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
      placeholder="Type here..."
      className='w-full p-3 rounded-lg border border-black mb-2'
    />
  );
};
