import toast from "react-hot-toast";
import { Sort, type Items, type reactSetState } from "../../types/utils";
import Button from "../button";
import CheckBox from "../checkBox";
import ListInput from "./itemEditInput";
import { useState } from "react";
import moment from "moment";
import "./index.css";
import * as sorting from "../../utils/sorting";

type List = {
  items: Items[];
  setItems: reactSetState<Items[]>;
  sort: Sort;
};
const List = ({ items, setItems, sort }: List) => {
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
  };
  let todo = items;
  if (sort === "ascending") todo = sorting.ascending(todo);
  else if (sort === "completed") todo = sorting.completed(todo);
  else if (sort === "descending") todo = sorting.descending(todo);
  else todo = sorting.pending(todo);
  if (todo.length === 0)
    return <h1 className='text-gray-300 text-center'>empty.</h1>;
  return todo.map(({ id, data, completed, createdAt, edited }) => (
    <div
      key={id}
      className='mb-2 bg-opacity-60 rounded-2xl p-3  bg-black border border-gray-500 me-2 fade-in hover:bg-opacity-30 hover:border-neutral-300 transition-all duration-300 hover:shadow-2xl '
    >
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 w-full'>
          <CheckBox onClick={() => handleCheck(id)} checked={completed} />
          {editId === id ? (
            <ListInput
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
            <Button className='text-white'>
              <i className='fa-regular fa-circle-check'></i>
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
      <div className='m-0 pt-1 flex items-center justify-end'>
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
export default List;
