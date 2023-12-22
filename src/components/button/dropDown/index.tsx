import { useState } from "react";
import { Sort, reactSetState } from "../../../types/utils";
import Button from "..";
import { v4 as uuid } from "uuid";

type DropDown = {
  sort: Sort;
  setSort: reactSetState<Sort>;
};

const DropDown = ({ sort, setSort }: DropDown) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(!isOpen);
  };
  const handleSort = (val: Sort) => {
    setSort(val);
    if (open) open();
  };
  let types: Sort[] = ["ascending", "descending", "completed", "pending"];
  return (
    <div className='relative inline-block'>
      <button
        id='dropdownDefaultButton'
        data-dropdown-toggle='dropdown'
        className='text-white me-2 bg-violet-700 hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-violet-700 dark:hover:bg-violet-500 dark:focus:ring-violet-900'
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
                  {type}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
