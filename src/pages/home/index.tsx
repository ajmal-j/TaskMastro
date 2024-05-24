import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import List from "../../components/itemList";
import { Items, Sort } from "../../types/utils";
import { Input } from "../../components/form/input";
import DropDown from "../../components/button/dropDown";
import AddNewForm from "../../components/form/addNewForm";

const Home = () => {
  const [items, setItems] = useState<Items[]>(() => {
    const prev = localStorage.getItem("Todo");
    if (!prev) return [];
    return JSON.parse(prev);
  });
  const [fav, setFav] = useState<boolean>(() => {
    const fav = localStorage.getItem("fav");
    if (fav) return JSON.parse(fav);
    return false;
  });
  const [sort, setSort] = useState<Sort>("ascending");
  const [newForm, setNewForm] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      setInputValue("");
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
        favorite: false,
      },
    ]);
    setSort("ascending");
    toast.success("Todo added.", {
      id: "added",
    });
    setInputValue("");
  };

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(items));
  }, [items]);

  const makeFav = () => {
    setFav(!fav);
    localStorage.setItem("fav", JSON.stringify(!fav));
  };
  useEffect(() => {
    setSort(fav ? "favorite" : "ascending");
  }, [fav]);
  return (
    <div className='flex justify-center items-center '>
      <div className='flex w-full ms-5 me-5 max-w-[1000px] flex-col justify-center items-center'>
        <form className='flex items-baseline' onSubmit={handleSubmit}>
          <Input
            type='text'
            focus={true}
            inputValue={inputValue}
            setInputValue={setInputValue}
            className='w-[60vw] mt-5 max-w-[1000px] sm:py-4 py-2.5 px-5 rounded-full text-white border border-gray-300 focus:outline-slate-900 bg-black placeholder:text-white mb-2'
          />
          <Button
            className='bg-black ms-2 sm:py-4 py-2.5 border border-gray-300 max-w-[100px] w-full min-w-16 text-white transition-all rounded-full hover:shadow-gray-800 hover:shadow-lg ease-in-out duration-100'
            onClick={
              !inputValue.length ? () => setNewForm((prev) => !prev) : undefined
            }
            type={inputValue.length ? "submit" : "button"}
          >
            {!inputValue.length ? (
              <div>
                <span className='hidden sm:inline-block'>Add</span>
                <i className='text-gray-300 fa-solid fa-plus sm:hidden'></i>
              </div>
            ) : (
              <i className='text-gray-300 fa-solid fa-check'></i>
            )}
          </Button>
        </form>
        {newForm && (
          <AddNewForm
            setSort={setSort}
            setItems={setItems}
            setNewForm={setNewForm}
          />
        )}
        {!items.length ? (
          <span className='me-auto ms-1 font-bold mt-5  text-white'>
            No Todo's
          </span>
        ) : (
          <div className='flex mt-5 w-full items-center justify-between'>
            <span className='ms-1 font-bold  text-white'>
              <i className='fa-solid fa-list-ul text-gray-200 me-1'></i> Todo's
              ({items.length})
            </span>
            <div
              className='ms-auto me-5 cursor-pointer hover:scale-105 transition-all duration-100 ease-in'
              onClick={makeFav}
            >
              {fav ? (
                <i className='fa-solid fa-star text-xl text-yellow-200'></i>
              ) : (
                <i className='fa-regular fa-star text-xl text-yellow-200 opacity-90'></i>
              )}
            </div>
            <DropDown setItems={setItems} setSort={setSort} sort={sort} />
          </div>
        )}
        <div className='h-[70vh] max-w-[1000px] flex flex-col overflow-y-auto w-full mt-5'>
          <List sort={sort} items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  );
};

export default Home;
