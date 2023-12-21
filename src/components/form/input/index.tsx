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
      className='w-[60vw] py-5 px-3 rounded-lg text-black border border-black bg-gray-200 placeholder:text-black mb-2'
    />
  );
};
