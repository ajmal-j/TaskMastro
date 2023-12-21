import toast from "react-hot-toast";
import { type Items, type reactSetState } from "../../types/utils";
import Button from "../button";

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

  return items.map(({ id, data }) => (
    <div
      key={id}
      className='mb-2 rounded-lg flex p-3 justify-between items-center bg-black border border-gray-400 me-1'
    >
      <p className='text-gray-200'>{data}</p>
      <Button onClick={() => handleDelete(id)}>
        <i className='fa-regular fa-trash-can' style={{ color: "#ff0a0a" }}></i>
      </Button>
    </div>
  ));
};
export default List;
