import { useState } from "react";
import { day01events } from "../data/schedule/day01";

export default function Events() {
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

  const categories = [
    { name: "Culture", color: "bg-blue-500", textColor: "text-white" },
    { name: "Family Fun", color: "bg-green-500", textColor: "text-white" },
    { name: "Stickball", color: "bg-neutral-800", textColor: "text-white" },
    { name: "Pageant", color: "bg-purple-500", textColor: "text-white" },
    { name: "Competitions", color: "bg-red-500", textColor: "text-white" },
  ];

  const [activeTab, setActiveTab] = useState(() => {
    const currentDate = new Date();
    const lastTabDate = new Date(tabs[tabs.length - 1].date);
    return currentDate >= lastTabDate ? tabs.length - 1 : 0;
  });

  // const [checkedCategories, setCheckedCategories] = useState(false);

  const handleTabClick = (index: number) => {
    const currentDate = new Date();
    const tabDate = new Date(tabs[index].date);

    if (currentDate <= tabDate) {
      setActiveTab(index);
    }
  };

  // const handleCategoryClick = (index: number) => {
  //   setCheckedCategories((prevState: boolean) => !prevState);
  // };
  return (
    <div className="bg-red-weave bg-size-weave bg-repeat">
      <div className="container mx-auto">
        <div className="py-4">
          <img
            src="./img/event-banner-01.jpg"
            alt="Event banner"
            className="hidden rounded-md border border-neutral-300/20 md:block"
          />
          <img
            src="./img/event-banner-02.jpg"
            alt="Event banner"
            className="rounded-md border border-neutral-300/20 md:hidden"
          />
        </div>

        <div className="mx-2 grid grid-cols-4 gap-3 md:grid-cols-5 xl:grid-cols-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`my-1 flex-grow rounded border border-neutral-300/20 p-4 text-white hover:text-neutral-500 ${
                activeTab === index
                  ? "bg-gradient-to-br from-[#400000] via-[#900000] to-[#400000] hover:text-neutral-700"
                  : "bg-gradient-to-br from-black via-neutral-800 to-black"
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

        <div className="mx-2 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-5">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`my-1 w-full flex-grow rounded border border-neutral-300/20 p-4 ${category.color} ${category.textColor} mx-auto hover:text-neutral-500`}
              // onClick={() => handleCategoryClick(index)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <ul role="list" className="gap-4 divide-y divide-gray-100">
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
              className="grid grid-cols-4 justify-between gap-4 gap-x-6"
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
