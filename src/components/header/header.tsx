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
  let hours: number = time.getHours();
  let am: boolean = true;

  if (hours >= 12) {
    am = false;
    if (hours > 12) {
      hours -= 12;
    }
  }

  let formattedHours: string = hours < 10 ? "0" + hours : "" + hours;

  let formattedTime: string = formattedHours + (am ? " am" : " pm");

  return (
    <div className='flex items-center p-2 pt-4 mb-5 '>
      <img className='w-[55px]' src='/logo.svg' alt='logo' />
      <span className='text-xl font-thin text-white'>To Do App</span>
      <p className='timeDiv'>
        <span className='hour'>{formattedHours}</span>
        <span className='minutes'>{formattedTime}</span>
      </p>
    </div>
  );
};

export default Header;
