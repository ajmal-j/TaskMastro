import { reactSetState } from "../../../types/utils";

type Input = {
  inputValue: string;
  setInputValue: reactSetState<string>;
  type: "text";
};

export const Input = ({ type, inputValue, setInputValue }: Input) => {
  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      type={type}
      placeholder='Type here...'
      className='w-[60vw] mt-5 max-w-[1000px] py-4 px-5 rounded-full text-black border border-gray-600 focus:outline-slate-200 bg-gray-200 placeholder:text-black mb-2'
    />
  );
};
