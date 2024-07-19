"use client";
import { useEffect, useState } from "react";
import { createEvent, updateEvent, removeEvent } from "./actions";

const Calendar = () => {
  const [currDate, setCurrDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const nextMonth = () => {
    setCurrDate((prev) => {
      const nextDate = new Date(prev);
      nextDate.setMonth(nextDate.getMonth() + 1);
      return nextDate;
    });
  };

  const pastMonth = () => {
    setCurrDate((prev) => {
      const past = new Date(prev);
      past.setMonth(past.getMonth() - 1);
      return past;
    });
  };

  const monthDays = (date: any) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const startDayOfMonth = (date: any) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const daysArray = Array.from(
    { length: monthDays(currDate) },
    (_, i) => i + 1
  );

  const handleCreateEvent = async () => {
    if (selectedDay !== null && newEventTitle.trim() !== "") {
      const startDate = new Date(
        currDate.getFullYear(),
        currDate.getMonth(),
        selectedDay
      );
      const endDate = new Date(
        currDate.getFullYear(),
        currDate.getMonth(),
        selectedDay + 1
      );
      const newEvent = {
        title: newEventTitle,
        start: startDate,
        end: endDate,
      };

      try {
        const createdEvent = await createEvent(
          newEvent.title,
          newEvent.start,
          newEvent.end
        );
        setEvents([...events, createdEvent]);
        setShowEventForm(false);
        setNewEventTitle("");
        setSelectedDay(null);
      } catch (error) {
        console.error("Error creating event:", error);
      }
    }
  };

  const handleUpdateEvent = async (eventToUpdate) => {
    const updatedEvent = {
      ...eventToUpdate,
      title: "Updated Event",
    };

    try {
      const updated = await updateEvent(
        updatedEvent.id,
        updatedEvent.title,
        updatedEvent.start,
        updatedEvent.end
      );
      const updatedEvents = events.map((event) =>
        event.id === updated.id ? updated : event
      );
      setEvents(updatedEvents); // update events state with the updated event
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleRemoveEvent = async (id) => {
    try {
      await removeEvent(id);
      const filteredEvents = events.filter((event) => event.id !== id);
      setEvents(filteredEvents); // update events state by removing the deleted event
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };
  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowEventForm(true);
  };

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
              onClick={() => day && handleDayClick(day)}
            >
              {day}
              {day === selectedDay && showEventForm && (
                <div>
                  <input
                    type="text"
                    placeholder="Event Title"
                    value={newEventTitle}
                    onChange={(e) => setNewEventTitle(e.target.value)}
                  />
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={handleCreateEvent}
                  >
                    Create Event
                  </button>
                </div>
              )}
              {events &&
                events.map((event) => {
                  if (event.start && new Date(event.start).getDate() === day) {
                    return (
                      <div key={event.id}>
                        {event.title}
                        <button onClick={() => handleUpdateEvent(event)}>
                          Update
                        </button>
                        <button onClick={() => handleRemoveEvent(event.id)}>
                          Remove
                        </button>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Calendar;

// "use client";
// import { useEffect, useState } from "react";
// import { createEvent, updateEvent, removeEvent } from "./actions";

// const Calendar = () => {
//   const [currDate, setCurrDate] = useState(new Date());

//   //to next month
//   const nextMonth = () => {
//     setCurrDate((prev) => {
//       const nextDate = new Date(prev);
//       nextDate.setMonth(nextDate.getMonth() + 1);
//       return nextDate;
//     });
//   };

//   //to past month
//   const pastMonth = () => {
//     setCurrDate((prev) => {
//       const past = new Date(prev);
//       past.setMonth(past.getMonth() - 1);
//       return past;
//     });
//   };

//   //number of days in a month
//   const monthDays = (date: Date) => {
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//   };

//   //starting day of the month
//   const startDayOfMonth = (date: Date) => {
//     return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//   };

//   // array of days for the current month
//   const daysArray = Array.from(
//     { length: monthDays(currDate) },
//     (_, i) => i + 1
//   );

//   return (
//     <div className="container mx-auto mt-8">
//       <div className="flex justify-between mb-4">
//         <button
//           className="px-3 py-1 bg-blue-500 text-white rounded"
//           onClick={pastMonth}
//         >
//           Prev
//         </button>
//         <h1 className="text-2xl font-bold">
//           {currDate.toLocaleDateString("en-US", {
//             month: "long",
//             year: "numeric",
//           })}
//         </h1>
//         <button
//           className="px-3 py-1 bg-blue-500 text-white rounded"
//           onClick={nextMonth}
//         >
//           Next
//         </button>
//       </div>

//       <div className="grid grid-cols-7 gap-1">
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//           <div key={day} className="text-center font-bold text-gray-700">
//             {day}
//           </div>
//         ))}
//         {[...Array(startDayOfMonth(currDate)).fill(null), ...daysArray].map(
//           (day, index) => (
//             <div
//               key={index}
//               className={`text-center p-2 ${day ? "cursor-pointer hover:bg-gray-200" : "bg-gray-100"}`}
//             >
//               {day}
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Calendar;
