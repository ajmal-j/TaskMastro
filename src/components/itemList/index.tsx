import toast from "react-hot-toast";
import { type Items, type reactSetState } from "../../types/utils";
import Button from "../button";
import "./index.css";
import CheckBox from "../checkBox";
import ListInput from "./itemInput";
import { useState } from "react";

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

  return items.map(({ id, data, completed }) => (
    <div
      key={id}
      className='mb-2 rounded-2xl flex p-3 justify-between items-center bg-black border border-gray-400 me-1 fade-in'
    >
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
            {completed ? <s>{data}</s> : data}
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
  ));
};
export default List;
