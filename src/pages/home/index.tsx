import { useEffect, useState } from "react";
import Button from "../../components/button";
import { Input } from "../../components/form/input";
import List from "../../components/itemList";
import { Items } from "../../types/utils";
import toast from "react-hot-toast";

const Home = () => {
  const [items, setItems] = useState<Items[]>(() => {
    const prev = localStorage.getItem("Todo");
    if (!prev) return [];
    return JSON.parse(prev);
  });

  const [inputValue, setInputValue] = useState<string>("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputValue) {
      toast.error("Enter Something", { duration: 700, id: "error" });
      return;
    }
    setItems((prev) => [
      ...prev,
      {
        data: inputValue,
        id: Date.now().toString(),
        completed: false,
        createdAt: new Date().toISOString(),
        edited: false,
      },
    ]);
    toast.success("Todo added.");
    setInputValue("");
  };

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(items));
  }, [items]);
  return (
    <div className='flex justify-center items-center '>
      <div className='flex w-[70vw] max-w-[1000px] flex-col justify-center items-center'>
        <form
          className='flex flex-col justify-center items-center'
          onSubmit={handleSubmit}
        >
          <Input
            type='text'
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Button className='bg-black border border-gray-700  hover:w-10/12 max-w-[900px] w-full p-2 text-white rounded-full transition-all hover:shadow-gray-500 hover:shadow-md ease-in duration-300'>
            Add
          </Button>
        </form>
        {!items.length ? (
          <span className='me-auto ms-1 font-bold mt-5  text-white'>
            No Todo's
          </span>
        ) : (
          <span className='me-auto ms-1 font-bold mt-5  text-white'>
            Todo's
          </span>
        )}
        <div className='h-[70vh] max-w-[1000px] flex flex-col overflow-y-auto  w-full mt-5'>
          <List items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  );
};

export default Home;
