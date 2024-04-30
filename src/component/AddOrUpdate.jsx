import React from "react";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";
import { useSelector, useDispatch } from "react-redux";

function AddOrUpdate() {
  const Mode = useSelector((state) => state.counter.EditMode);
  const date = new Date();
  const hours = date.getHours();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayOfWeek = days[date.getDay()]; // Get the day of the week
  const month = months[date.getMonth()];
  const today = `${dayOfWeek}, ${date.getDate()} ${month} ${date.getFullYear()}`;
  let greeting = "";
  if (hours >= 0 && hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon";
  } else if (hours >= 18 && hours < 21) {
    greeting = "Good evening";
  } else {
    greeting = "Good Night";
  }

  return (
    <>
      <div className=" w-full flex flex-col lg:flex-row justify-evenly items-center ">
        <div className="lg:py-7 pl-10 w-full  sm:w-[80%] lg:w-fit max-sm:px-2 max-sm:py-3 flex flex-row justify-between  sm:justify-around items-center ">
          <div className="max-w-[1300px] max-lg:container flex justify-between items-center">
            <h1 className="text-black font-bold flex items-center gap-1 text-3xl ">
              <span className="max-sm:text-2xl">&#128075;</span>
              {greeting}
            </h1>
          </div>
          <div className="min-w-20 lg:hidden bg-blue-400 w-fit min-h-20 px-2  pb-3 font-medium rounded-lg mr-10 mt-3">
            <div className=" flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg">
              <div className="block rounded-xl overflow-hidden text-center">
                <div className="bg-blue text-white py-1">{month}</div>
                <div className="pt-1 border-l border-r border-white bg-white">
                  <span className="text-2xl font-bold leading-tight">
                    {date.getDate()}
                  </span>
                </div>
                <div className="border-l border-r border-b pb-2 rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
                  <span className="text-sm">{dayOfWeek}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80%]">{Mode ? <UpdateTask /> : <AddTask />} </div>
        <div className="min-w-20 ml-1 max-lg:hidden bg-blue-400 w-fit min-h-20 px-2  pb-3 font-medium rounded-lg mr-10 mt-3">
          <div className=" flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg">
            <div className="block rounded-xl overflow-hidden text-center">
              <div className="bg-blue text-white py-1">{month}</div>
              <div className="pt-1 border-l border-r border-white bg-white">
                <span className="text-2xl font-bold leading-tight">
                  {date.getDate()}
                </span>
              </div>
              <div className="border-l border-r border-b pb-2 rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
                <span className="text-sm">{dayOfWeek}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddOrUpdate;
