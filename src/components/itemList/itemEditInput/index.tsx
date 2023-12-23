import { useEffect, useRef, useState } from "react";
import { Items, reactSetState } from "../../../types/utils";
import toast from "react-hot-toast";
import "./index.css";

type ListInput = {
  id: string;
  setItems: reactSetState<Items[]>;
  data: string;
  saved: boolean;
  setEditId: reactSetState<string | null>;
};

const ListInput = ({ setItems, id, data, setEditId, saved }: ListInput) => {
  const [newTask, setNewTask] = useState<string>(data);
  const input = useRef<any>(null);
  const handleEdit = (e?: React.FormEvent) => {
    e?.preventDefault();
    let updated = set();
    if (updated) {
      setEditId(null);
      toast.success("Updated");
    }
  };
  useEffect(() => {
    if (saved) {
      handleEdit();
    }
  }, [saved]);
  const set = (): boolean => {
    if (data === newTask) {
      setEditId(null);
      return false;
    }
    if (!newTask) {
      toast.error("Enter Something", { duration: 700 });
      return false;
    }
    setItems((prev) =>
      prev.map((current) =>
        current.id === id
          ? {
              ...current,
              data: newTask,
              edited: true,
              createdAt: new Date().toISOString(),
            }
          : current
      )
    );
    return true;
  };
  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <form className='w-full ms-2 me-3' onSubmit={handleEdit}>
      <input
        type='text'
        ref={input}
        placeholder='enter here..'
        value={newTask}
        onBlur={() => input.current.focus()}
        onChange={(e) => setNewTask(e.target.value)}
        className='text-gray-200 w-full todoEditInput ring ring-black ring-opacity-0 ring-inset focus:outline-none'
      ></input>
    </form>
  );
};

export default ListInput;
