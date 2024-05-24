import { memo, useEffect, useRef, useState } from "react";
import { Items, Sort, reactSetState } from "../../../types/utils";
import Button from "..";
import { v4 as uuid } from "uuid";
import { RemoveButton } from "../removeButton";

type DropDown = {
  sort: Sort;
  setSort: reactSetState<Sort>;
  setItems: reactSetState<Items[]>;
};

const DropDown = ({ sort, setSort, setItems }: DropDown) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(!isOpen);
  };
  const handleSort = (val: Sort) => {
    setSort(val);
    if (open) open();
  };
  const types: Sort[] = [
    "ascending",
    "descending",
    "completed",
    "pending",
    "favorite",
  ];

  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closePopover = (e: MouseEvent) => {
    if (!e.target) return;
    if (
      popoverRef.current &&
      !popoverRef.current?.contains(e.target as Node) &&
      buttonRef.current &&
      !buttonRef.current?.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closePopover);
    } else {
      document.removeEventListener("mousedown", closePopover);
    }

    return () => {
      document.removeEventListener("mousedown", closePopover);
    };
  }, [isOpen]);

  return (
    <div className='relative inline-block'>
      <button
        ref={buttonRef}
        id='dropdownDefaultButton'
        style={{ boxShadow: "0px 0px 15px #7f28d0" }}
        data-dropdown-toggle='dropdown'
        className='text-white me-2 border border-gray-400 bg-violet-700 hover:bg-violet-900 focus:ring-4 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-violet-500 '
        type='button'
        onClick={open}
      >
        <svg
          className={`w-2.5 h-2.5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          id='dropdown'
          className='absolute z-10 bg-white divide-y divide-gray-100 rounded-xl shadow w-44 dark:bg-violet-600 border-2 border-violet-900'
          style={{ top: "115%", right: 0 }}
        >
          <ul
            className='py-2 text-sm text-gray-700 px-3 dark:text-gray-200'
            aria-labelledby='dropdownDefaultButton'
          >
            {types.map((type) => (
              <li className='mb-1' key={uuid()}>
                <Button
                  onClick={() => handleSort(type)}
                  className={`${
                    sort === type && "bg-violet-800 text-white"
                  } block w-full px-4 py-2 ${
                    sort !== type && "hover:bg-violet-500"
                  } capitalize dark:hover:text-white  rounded-xl`}
                >
                  {type === "descending"
                    ? "Oldest to Newest"
                    : type === "ascending"
                    ? "Newest to Oldest"
                    : type}
                </Button>
              </li>
            ))}
            <RemoveButton open={open} setItems={setItems} />
          </ul>
        </div>
      )}
    </div>
  );
};

export default memo(DropDown);
