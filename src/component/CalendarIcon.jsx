import React from "react";

const CalendarIcon = () => {
    const date = new Date();
    const hours = date.getHours();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
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
        "December"
    ];

    const dayOfWeek = days[date.getDay()]; // Get the day of the week
    const month = months[date.getMonth()];

    const today = `${dayOfWeek}, ${date.getDate()} ${month} ${date.getFullYear()}`;

    let greeting = "";

    if (hours >= 0 && hours < 12) {
        greeting = "Good morning";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Good afternoon";
    } else if (hours >= 18 && hours < 21) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    return (
        <>
        <div className="py-7 px-10 max-sm:px-2 max-sm:py-3">
            <div className="max-w-[1300px] max-lg:container flex justify-between items-center">
                <h1 className="text-black font-bold flex items-center gap-1 text-3xl max-sm:text-lg">
                    <span className="max-sm:text-3xl">&#128075;</span>{greeting}
                </h1>
            </div>
        </div>

        <div className="min-w-20 bg-blue-400 w-fit min-h-20 px-2  pb-3 font-medium rounded-lg mr-10 mt-3">
      <div className="w-28 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg">
        <div className="block rounded-t overflow-hidden text-center">
          <div className="bg-blue text-white py-1">
          {month}
           </div>
           <div className="pt-1 border-l border-r border-white bg-white">
             <span className="text-2xl font-bold leading-tight">
             {date.getDate()}
             </span>
           </div>
           <div className="border-l border-r border-b pb-2 rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
             <span className="text-sm">
             {dayOfWeek}
             </span>
           </div>
         
         </div>
       </div>
     </div>
        </>
    );
};

export default CalendarIcon;



// import React from 'react';

// function CalendarIcon() {
    
//   return (
//     <div className="min-w-20 bg-blue-400 w-fit min-h-20 px-2  pb-3 font-medium rounded-lg mr-10 mt-3">
//       <div className="w-28 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg">
//         <div className="block rounded-t overflow-hidden text-center">
//           <div className="bg-blue text-white py-1">
//             March
//           </div>
//           <div className="pt-1 border-l border-r border-white bg-white">
//             <span className="text-2xl font-bold leading-tight">
//               17
//             </span>
//           </div>
//           <div className="border-l border-r border-b pb-2 rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
//             <span className="text-sm">
//               Sunday
//             </span>
//           </div>
         
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CalendarIcon;