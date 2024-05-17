import { useState } from "react";
import { day01events } from "../data/schedule/day01";
import { XCircleIcon } from "@heroicons/react/24/outline";

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
    { name: "Culture", color: "from-blue-950 via-blue-600 to-blue-950" },
    { name: "Family Fun", color: "from-green-950 via-green-600 to-green-950" },
    { name: "Stickball", color: "from-[#400000] via-[#900000] to-[#400000]" },
    { name: "Pageant", color: "from-[#400000] via-[#900000] to-[#400000]" },
    {
      name: "Competitions",
      color: "from-[#400000] via-[#900000] to-[#400000]",
    },
  ];

  const [activeTab, setActiveTab] = useState(() => {
    const currentDate = new Date();
    const lastTabDate = new Date(tabs[tabs.length - 1].date);
    return currentDate >= lastTabDate ? tabs.length - 1 : 0;
  });

  const [activeCategory, setActiveCategory] = useState(
    new Array(categories.length).fill(false),
  );

  const handleTabClick = (index: number) => {
    const currentDate = new Date();
    const tabDate = new Date(tabs[index].date);

    if (currentDate <= tabDate) {
      setActiveTab(index);
    }
  };

  const handleCategoryClick = (index: number) => {
    setActiveCategory((prevState) =>
      prevState.map((value, i) => (i === index ? !value : value)),
    );
  };

  return (
    <div className="bg-red-weave bg-size-weave bg-repeat">
      <div className="container mx-auto">
        <div className="py-4">
          <img
            src="./img/event-banner-01.jpg"
            alt="Event banner"
            className="hidden rounded-md border-2 border-neutral-300/20 md:block"
          />
          <img
            src="./img/event-banner-02.jpg"
            alt="Event banner"
            className="rounded-md border border-neutral-300/20 md:hidden"
          />
        </div>

        <div className="mx-2 grid grid-cols-3 gap-3 sm:grid-cols-4 md:mx-0 md:grid-cols-5 xl:grid-cols-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`my-1 flex-grow rounded border-2 border-neutral-300/20 p-4 text-white hover:text-neutral-500 ${
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

        <div className="mx-2 grid grid-cols-2 gap-1 sm:grid-cols-4 sm:gap-3 sm:pt-2 md:mx-0 md:grid-cols-11">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`col-span-2 mx-auto my-1 w-full flex-grow rounded border-2 border-neutral-300/20 p-4 hover:bg-opacity-75 ${
                activeCategory[index]
                  ? `${category.color} bg-gradient-to-br hover:text-neutral-700`
                  : "bg-gradient-to-br from-black via-neutral-800 to-black"
              }`}
              onClick={() => handleCategoryClick(index)}
            >
              {category.name}
            </button>
          ))}
          <button
            className="col-span-2 mx-auto my-1 w-full flex-grow rounded border-2 border-neutral-300/20 bg-gradient-to-br from-black via-neutral-800 to-black p-4 hover:bg-opacity-75 md:col-span-1"
            onClick={() =>
              setActiveCategory(new Array(categories.length).fill(false))
            }
          >
            <XCircleIcon className="mx-auto h-6 w-6 text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {tabs[activeTab].schedule.map((event, index) => (
            <div
              key={index}
              className="rounded-lg border-2 border-neutral-300/20 bg-black p-4 shadow-md"
            >
              <h3 className="text-lg font-semibold">{event.name}</h3>
              <p className="text-gray-500">{event.time}</p>
              <p className="text-gray-500">{event.category}</p>
              <p className="text-gray-500">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
