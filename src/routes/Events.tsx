import { useState } from "react";
import { day01events } from "../data/schedule/day01";

function Events() {
  const tabs = [
    { day: "TUE", date: "2024-07-02", schedule: day01events },
    { day: "WED", date: "2024-07-03", schedule: day01events },
    { day: "FRI", date: "2024-07-05", schedule: day01events },
    { day: "SAT", date: "2024-07-06", schedule: day01events },
    { day: "MON", date: "2024-07-08", schedule: day01events },
    { day: "TUE", date: "2024-07-09", schedule: day01events },
    { day: "WED", date: "2024-07-10", schedule: day01events },
    { day: "THU", date: "2024-07-11", schedule: day01events },
    { day: "FRI", date: "2024-07-12", schedule: day01events },
    { day: "SAT", date: "2024-07-13", schedule: day01events },
  ];

  const [activeTab, setActiveTab] = useState(() => {
    const currentDate = new Date();
    const lastTabDate = new Date(tabs[tabs.length - 1].date);
    return currentDate >= lastTabDate ? tabs.length - 1 : 0;
  });

  const handleTabClick = (index: number) => {
    const currentDate = new Date();
    const tabDate = new Date(tabs[index].date);

    if (currentDate <= tabDate) {
      setActiveTab(index);
    }
  };

  return (
    <div className="bg-red-weave bg-size-weave bg-repeat">
      <div className="container mx-auto">
        <div className="p-4">
          <img
            src="./img/event-banner-01.jpg"
            alt="Event banner"
            className="hidden md:block rounded-md border border-neutral-300/20"
          />
          <img
            src="./img/event-banner-02.jpg"
            alt="Event banner"
            className="md:hidden rounded-md border border-neutral-300/20"
          />
        </div>

        <div className="grid grid-cols-4 gap-3 md:grid-cols-5 xl:grid-cols-10 mx-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`p-4 my-1 flex-grow rounded border-neutral-300/20 border hover:text-neutral-500 ${
                activeTab === index
                  ? "bg-gradient-to-br from-[#fbb03b] via-[#cc6600] to-[#fbb03b] text-black"
                  : "bg-gradient-to-br from-black via-neutral-800 to-black text-white"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.day}
              <br />
              <span className="text-2xl">JUL</span>
              <br />
              <span className="text-4xl">{tab.date.slice(-2)}</span>
            </button>
          ))}
        </div>

        <ul role="list" className="divide-y divide-gray-100 gap-4">
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div>
                <p className="text-sm font-black leading-6 text-white">Event</p>
              </div>
              <div>
                <p className="text-sm font-black leading-6 text-white">Time</p>
              </div>
              <div>
                <p className="text-sm font-black leading-6 text-white">
                  Category
                </p>
              </div>
              <div>
                <p className="text-sm font-black leading-6 text-white">
                  Location
                </p>
              </div>
            </div>
          </li>
          {tabs[activeTab].schedule.map((event, index) => (
            <li
              key={index}
              className="justify-between gap-x-6 grid grid-cols-4 gap-4"
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-none">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {event.name}
                  </p>
                </div>
                <div className="flex-none">
                  <p className="text-sm font-semibold leading-6 text-gray-500">
                    {event.time}
                  </p>
                </div>
                <div className="flex-none">
                  <p className="text-sm font-semibold leading-6 text-gray-500">
                    {event.category}
                  </p>
                </div>
                <div className="flex-none">
                  <p className="text-sm font-semibold leading-6 text-gray-500">
                    {event.location}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Events;
