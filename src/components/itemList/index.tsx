import "./index.css";
import moment from "moment";
import Button from "../button";
import CheckBox from "../checkBox";
import toast from "react-hot-toast";
import ListInput from "./itemEditInput";
import { memo, useState } from "react";
import * as sorting from "../../utils/sorting";
import { Sort, type Items, type reactSetState } from "../../types/utils";

type List = {
  items: Items[];
  setItems: reactSetState<Items[]>;
  sort: Sort;
};
const List = ({ items, setItems, sort }: List) => {
  const [save, setSave] = useState<boolean>(false);
  const [editId, setEditId] = useState<null | string>(null);
  const handleDelete = (currentId: string) => {
    setItems((prev) => prev.filter(({ id }) => id !== currentId));
    toast("Deleted", {
      icon: "🧹",
      duration: 900,
      style: {
        borderRadius: "10px",
        background: "#8732ff",
        color: "#fff",
      },
    });
  };
  const handleCheck = (currentId: string) => {
    setItems((prev) =>
      prev.map((current) => {
        if (current.id === currentId) {
          return { ...current, completed: !current.completed };
        }
        return current;
      })
    );
  };
  const openInput = (id: string) => {
    setEditId(id);
    setSave(false);
  };
  let todo = items;
  if (sort === "ascending") todo = sorting.ascending(todo);
  else if (sort === "completed") todo = sorting.completed(todo);
  else if (sort === "descending") todo = sorting.descending(todo);
  else todo = sorting.pending(todo);
  if (todo.length === 0)
    return <h1 className='text-gray-300 text-center'>empty.</h1>;
  const currentDate = new Date();
  const formattedDate = currentDate
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");
  return todo.map(({ id, data, completed, createdAt, edited, dueDate }) => (
    <div
      key={id}
      className='mb-2 bg-opacity-60 rounded-2xl p-3  bg-black border border-gray-500 me-2 fade-in hover:bg-opacity-30 hover:border-neutral-300 transition-all duration-300 hover:shadow-2xl '
    >
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 w-full'>
          <CheckBox onClick={() => handleCheck(id)} checked={completed} />
          {editId === id ? (
            <ListInput
              saved={save}
              setEditId={setEditId}
              data={data}
              id={id}
              setItems={setItems}
            />
          ) : (
            <p className='text-gray-200 break-all px-2'>
              {completed ? <s className='text-gray-500'>{data}</s> : data}
            </p>
          )}
        </div>
        <div className='flex gap-2'>
          {editId !== id ? (
            <Button className='text-gray-400' onClick={() => openInput(id)}>
              <i className='fa-solid fa-paintbrush fa-sm'></i>
            </Button>
          ) : (
            <Button className='text-white' onClick={() => setSave(true)}>
              <i className='fa-regular fa-circle-check fa-lg'></i>
            </Button>
          )}
          <Button onClick={() => handleDelete(id)}>
            <i
              className='fa-regular fa-trash-can ps-3'
              style={{ color: "#ff0a0a" }}
            ></i>
          </Button>
        </div>
      </div>
      <div className='m-0 mt-2 pt-1 flex items-center justify-between'>
        <span className='ps-10 text-slate-300 font-thin text-sm'>
          {dueDate ? (
            <>
              <i
                className={`${
                  Number(dueDate.replace(/-/g, "")) < Number(formattedDate)
                    ? "text-red-600"
                    : "text-gray-300"
                } fa-regular fa-calendar-check me-1`}
              ></i>{" "}
              {dueDate}
            </>
          ) : (
            " "
          )}
        </span>
        <span className='text-slate-300 font-thin text-sm '>
          {moment(createdAt).fromNow()}
          {edited && (
            <span className='beforeAndAfter ps-1'>
              <i
                title='Edited'
                className=' text-gray-300 fa-solid fa-signature fa-sm'
              ></i>
            </span>
          )}
        </span>
      </div>
    </div>
  ));
};
export default memo(List);
