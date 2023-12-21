import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Input } from "./components/form/input";
import { Items } from "./types/utils";
import List from "./components/itemList";
import Button from "./components/button";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [items, setItems] = useState<Items[]>(() => {
    const prev = localStorage.getItem("Todo");
    if (!prev) return [];
    return JSON.parse(prev);
  });
  
  const [inputValue, setInputValue] = useState<string>("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputValue) {
      toast.error("Enter Something",{duration:700});
      return;
    }
    setItems((prev) => [
      ...prev,
      { data: inputValue, id: Date.now().toString() },
    ]);
    toast.success("Todo added.");
    setInputValue("");
  };

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Header />
      <div className='flex justify-center items-center'>
        <div className='flex w-[50vw] flex-col justify-center items-center'>
          <form onSubmit={handleSubmit}>
            <Input
              type='text'
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
            <Button className='bg-black w-full p-2 text-white rounded-lg'>
              Add
            </Button>
          </form>
          <div className='h-[70vh] overflow-y-auto  w-full mt-5'>
            <List items={items} setItems={setItems} />
          </div>
        </div>
      </div>
      <Toaster position='top-right' reverseOrder={true}/>
    </>
  );
}

export default App;
