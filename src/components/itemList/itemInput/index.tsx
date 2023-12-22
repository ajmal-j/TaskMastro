import { useEffect, useRef, useState } from "react";
import { Items, reactSetState } from "../../../types/utils";
import toast from "react-hot-toast";
import "./index.css";

type ListInput = {
  id: string;
  setItems: reactSetState<Items[]>;
  data: string;
  setEditId: reactSetState<string | null>;
};

const ListInput = ({ setItems, id, data, setEditId }: ListInput) => {
  const [newTask, setNewTask] = useState<string>(data);
  const input = useRef<null | any>(null);
  const handleEdit = (e?: React.FormEvent) => {
    e?.preventDefault();
    let updated = set();
    if (updated) {
      setEditId(null);
      toast.success("Updated");
    }
  };
  const set = () => {
    if (!newTask) {
      toast.error("Enter Something", { duration: 700 });
      return false;
    }
    setItems((prev) =>
      prev.map((current) =>
        current.id === id
          ? { ...current, data: newTask, edited: true }
          : current
      )
    );
    return true;
  };
  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <form className='w-full ms-2' onSubmit={handleEdit}>
      <input
        type='text'
        ref={input}
        onBlur={handleEdit}
        onChange={(e) => setNewTask(e.target.value)}
        className='text-gray-200 w-full todoEditInput ring ring-black ring-opacity-0 ring-inset focus:outline-none'
        value={newTask}
      ></input>
    </form>
  );
};

export default ListInput;
