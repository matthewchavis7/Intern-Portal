"use client";
import { useState } from "react";

const Calendar = () => {
  const [currDate, setCurrDate] = useState(new Date());

  //to next month
  const nextMonth = () => {
    setCurrDate((prev) => {
      const nextDate = new Date(prev);
      nextDate.setMonth(nextDate.getMonth() + 1);
      return nextDate;
    });
  };

  //to past month
  const pastMonth = () => {
    setCurrDate((prev) => {
      const past = new Date(prev);
      past.setMonth(past.getMonth() - 1);
      return past;
    });
  };

  //number of days in a month
  const monthDays = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  //starting day of the month
  const startDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // array of days for the current month
  const daysArray = Array.from(
    { length: monthDays(currDate) },
    (_, i) => i + 1
  );

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between mb-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={pastMonth}
        >
          Prev
        </button>
        <h1 className="text-2xl font-bold">
          {currDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h1>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={nextMonth}
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold text-gray-700">
            {day}
          </div>
        ))}
        {[...Array(startDayOfMonth(currDate)).fill(null), ...daysArray].map(
          (day, index) => (
            <div
              key={index}
              className={`text-center p-2 ${day ? "cursor-pointer hover:bg-gray-200" : "bg-gray-100"}`}
            >
              {day}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Calendar;
