import { useEffect, useRef, useState } from "react";
import { Items, Sort, reactSetState } from "../../../types/utils";
import toast from "react-hot-toast";

type AddNewForm = {
  setNewForm: reactSetState<boolean>;
  setItems: reactSetState<Items[]>;
  setSort: reactSetState<Sort>;
};

const AddNewForm = ({ setNewForm, setItems, setSort }: AddNewForm) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [dateInput, setDate] = useState<string>("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  const cancel = () => {
    setNewForm(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setInputValue("");
      toast.error("Enter Something", { duration: 700, id: "error" });
      return;
    }
    if (!dateInput) {
      toast.error("Select a Due Date", { duration: 700, id: "error" });
      return;
    }
    const currentDate = new Date();
    const formattedDate = currentDate
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, "");
    const newDate = dateInput.replace(/-/g, "");
    if (Number(formattedDate) > Number(newDate)) {
      toast.error("Select a future date", { id: "date" });
      return;
    }

    setItems((prev) => [
      ...prev,
      {
        data: inputValue,
        dueDate: dateInput,
        id: Date.now().toString(),
        completed: false,
        createdAt: new Date().toISOString(),
        edited: false,
        favorite: false,
      },
    ]);
    toast.success("Todo added.", {
      id: "added",
    });
    cancel();
    setDate("");
    setInputValue("");
    setSort("ascending");
  };

  return (
    <div className='left-0 z-20 right-0 bg-black bg-opacity-60 bottom-0 top-0 absolute fade-inForm'>
      <div className='relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden py-6 sm:py-12'>
        <div className='relative py-3 sm:w-96 mx-auto text-center'>
          <div className='mt-4 bg-violet-600 border border-gray-400 shadow-black shadow-lg rounded-2xl text-left'>
            <form onSubmit={handleSubmit} className='px-8 py-6 text-white'>
              <div className='flex mb-[25px] justify-between'>
                <h1 className='text-2xl font-bold'>Add Todo's</h1>
                <button
                  type='submit'
                  className=' rounded-full w-8 h-8 bg-white bg-opacity-30 text-gray-500 hover:bg-opacity-100 hover:text-red-500 transition-all duration-200 '
                  onClick={cancel}
                >
                  <i className=' fa-solid fa-close fa-lg'></i>
                </button>
              </div>
              <label className='block  font-semibold'> Todo </label>
              <textarea
                value={inputValue}
                ref={inputRef}
                onChange={(e) => setInputValue(() => e.target.value)}
                placeholder='Todo'
                className='border min-h-20 w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md text-black'
              />
              <label className='block mt-3 font-semibold'> Due Date </label>
              <input
                type='date'
                value={dateInput}
                onChange={(e) => setDate(e.target.value)}
                className='border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md text-black'
              />

              <div className='flex justify-end gap-3 items-baseline'>
                <button
                  type='submit'
                  className='mt-4 bg-violet-700 border  py-2 px-6 rounded-full hover:bg-purple-200 hover:text-black transition-all duration-200 '
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddNewForm;
