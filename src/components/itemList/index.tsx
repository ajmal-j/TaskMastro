import toast from "react-hot-toast";
import { type Items, type reactSetState } from "../../types/utils";
import Button from "../button";
import "./index.css";
import CheckBox from "../checkBox";
import ListInput from "./itemInput";
import { useState } from "react";
import moment from "moment";

type List = {
  items: Items[];
  setItems: reactSetState<Items[]>;
};
const List = ({ items, setItems }: List) => {
  const [editId, setEditId] = useState<null | string>(null);
  const handleDelete = (currentId: string) => {
    setItems((prev) => prev.filter(({ id }) => id !== currentId));
    toast("Deleted!", {
      icon: "🧹",
      duration: 900,
      style: {
        borderRadius: "1rem",
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

  return items.map(({ id, data, completed, createdAt }) => (
    <div
      key={id}
      className='mb-2 bg-opacity-60 rounded-2xl p-3  bg-black border border-gray-500 me-2 fade-in hover:bg-opacity-30 hover:border-neutral-300 transition-all duration-300 hover:shadow-2xl'
    >
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
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
      <span className="text-white ">{moment(createdAt).fromNow()}</span>
    </div>
  ));
};
export default List;
