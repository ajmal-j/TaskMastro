import { useEffect, useState } from "react";
import { Items, reactSetState } from "../../../types/utils";
import toast from "react-hot-toast";

type ListInput = {
  id: string;
  setItems: reactSetState<Items[]>;
  data: string;
  setEditId: reactSetState<string | null>;
};
const ListInput = ({ setItems, id, data, setEditId }: ListInput) => {
  const [newTask, setNewTask] = useState<string>(data);
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
        current.id === id ? { ...current, data: newTask } : current
      )
    );
    return true;
  };

  return (
    <form onSubmit={handleEdit}>
      <input
        type='text'
        onChange={(e) => setNewTask(e.target.value)}
        className='text-gray-200'
        value={newTask}
      ></input>
    </form>
  );
};

export default ListInput;
