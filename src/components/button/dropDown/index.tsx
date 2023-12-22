import { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    if (isOpen) setIsOpen(!isOpen);
  };
  const open = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='relative inline-block'>
      <button
        id='dropdownDefaultButton'
        data-dropdown-toggle='dropdown'
        className='text-white bg-violet-700 hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-violet-700 dark:hover:bg-violet-900 dark:focus:ring-violet-900'
        type='button'
        onBlur={toggleDropdown}
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
          className='absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
          style={{ top: "100%", right: 0 }}
        >
          <ul
            className='py-2 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='dropdownDefaultButton'
          >
            <li>
              <button className='block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Dashboard
              </button>
            </li>
            <li>
              <button className='block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Dashboard
              </button>
            </li>
            <li>
              <button className='block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Dashboard
              </button>
            </li>
            <li>
              <button className='block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Dashboard
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
