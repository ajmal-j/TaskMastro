import toast from "react-hot-toast";
import { type Items, type reactSetState } from "../../types/utils";
import Button from "../button";
import "./index.css";
import CheckBox from "../checkBox";

type List = {
  items: Items[];
  setItems: reactSetState<Items[]>;
};
const List = ({ items, setItems }: List) => {
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

  return items.map(({ id, data, completed }) => (
    <div
      key={id}
      className='mb-2 rounded-lg flex p-3 justify-between items-center bg-black border border-gray-400 me-1 fade-in'
    >
      <div className='flex gap-2'>
        <CheckBox onClick={() => handleCheck(id)} checked={completed} />
        <p className='text-gray-200'>{completed ? <s>{data}</s> : data}</p>
      </div>
      <Button onClick={() => handleDelete(id)}>
        <i className='fa-regular fa-trash-can' style={{ color: "#ff0a0a" }}></i>
      </Button>
    </div>
  ));
};
export default List;
