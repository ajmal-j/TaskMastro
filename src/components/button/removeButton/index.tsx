import toast from "react-hot-toast";
import { Items, reactSetState } from "../../../types/utils";
import "./index.css";

type RemoveButton = {
  setItems: reactSetState<Items[]>;
  open(): void;
};
export const RemoveButton = ({ setItems, open }: RemoveButton) => {
  const handleClick = () => {
    setItems((prev) => prev.filter((val) => val.completed !== true));
    toast.success("Cleared completed todo's", {
      id: "clear",
    });
    open();
  };
  return (
    <div className='flex justify-center'>
      <button className='button' onClick={handleClick}>
        clear <i className=' ms-2 fa-regular fa-circle-check'></i>
        <div className='hoverEffect'>
          <div></div>
        </div>
      </button>
    </div>
  );
};
