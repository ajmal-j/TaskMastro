import { useEffect, useRef } from "react";
import { reactSetState } from "../../../types/utils";

type Input = {
  inputValue: string;
  setInputValue: reactSetState<string>;
  type: "text";
  focus?: boolean;
  className: string;
};

export const Input = ({
  type,
  inputValue,
  setInputValue,
  className,
  focus,
}: Input) => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  useEffect(() => {
    if (focus) {
      inputRef?.current?.focus();
    }
  }, [focus]);
  return (
    <input
      ref={inputRef}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      type={type}
      placeholder='Type here...'
      className={className}
    />
  );
};
