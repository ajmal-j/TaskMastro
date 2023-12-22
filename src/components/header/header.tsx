import "./header.css";

import { useEffect, useState } from "react";

const Header = () => {
  const [time, setTime] = useState<Date>(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);
  let hours: string | number = time.getHours();
  let Am: boolean = true;
  if (hours > 12) {
    hours -= 12;
  }
  if (hours >= 12) Am = false;
  if (hours < 9) {
    hours = "0" + " " + hours;
  }
  const minutes = time.getMinutes();
  return (
    <div className='flex items-center p-2 pt-4 mb-5 '>
      <img className='w-[55px]' src='/logo.svg' alt='logo' />
      <span className='text-xl font-thin text-white'>To Do App</span>
      <p className='timeDiv'>
        <span className='hour'>{hours}</span>
        <span className='minutes'>{minutes}</span>
        <span>{Am ? " am" : " pm"}</span>
      </p>
    </div>
  );
};

export default Header;
