import { reactSetState } from "../../../types/utils";

type Input = {
  inputValue: string;
  setInputValue: reactSetState<string>;
  type: "text";
  className: string;
};

export const Input = ({
  type,
  inputValue,
  setInputValue,
  className,
}: Input) => {
  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      type={type}
      placeholder='Type here...'
      className={className}
    />
  );
};
