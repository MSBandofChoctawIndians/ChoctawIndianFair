import { useState } from "react";
import { tabs } from "../data/schedule/tabs";
import { XCircleIcon } from "@heroicons/react/24/outline";

export default function Events() {
  const categories = [
    {
      name: "Culture",
      style: "culture",
    },
    {
      name: "Family Fun",
      style: "family",
    },
    {
      name: "Stickball",
      style: "stickball",
    },
    {
      name: "Pageant",
      style: "pageant",
    },
    {
      name: "Competitions",
      style: "competitions",
    },
  ];

  const [activeTab, setActiveTab] = useState(() => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const day01date = new Date(tabs[0].date);
    day01date.setHours(0, 0, 0, 0);

    const day10date = new Date(tabs[9].date);
    day10date.setHours(0, 0, 0, 0);

    if (currentDate < day01date) {
      return 0;
    } else if (currentDate > day10date) {
      return 9;
    } else {
      const currentTabIndex = tabs.findIndex(
        (tab) => new Date(tab.date).setHours(0, 0, 0, 0) === +currentDate,
      );
      return currentTabIndex !== -1 ? currentTabIndex : 0;
    }
  });

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const [activeCategory, setActiveCategory] = useState(
    new Array(categories.length).fill(false),
  );

  const handleCategoryClick = (index: number) => {
    setActiveCategory((prevState) =>
      prevState.map((value, i) => (i === index ? !value : value)),
    );
  };

  return (
    <div className="bg-red-weave bg-size-weave bg-repeat py-3">
      <div className="container mx-auto">
        <div className="pb-3">
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
              className={`my-1 flex-grow rounded border-2 border-neutral-300/20 p-4 hover:text-neutral-500 ${
                activeTab === index
                  ? "bg-events hover:text-neutral-700"
                  : "bg-gradient-to-br from-black/50 via-neutral-800/70 to-black/50"
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

        <div className="mx-2 grid grid-cols-2 gap-1 py-2 sm:grid-cols-4 sm:gap-3 md:mx-0 md:grid-cols-11">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`col-span-2 mx-auto my-1 w-full flex-grow rounded border-2 border-neutral-300/20 p-4 hover:bg-opacity-75 ${
                activeCategory[index]
                  ? `bg-${category.style} bg-gradient-to-br hover:text-neutral-700`
                  : "bg-gradient-to-br from-black/50 via-neutral-800/70 to-black/50"
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
            <XCircleIcon className="mx-auto h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {tabs[activeTab].schedule.map((event, index) => (
            <div key={index} className="mx-auto flex w-full flex-col">
              <div className="flex-grow overflow-hidden border-2 border-neutral-300/20 bg-black sm:rounded sm:shadow">
                <div
                  className={`border-b-[1px] border-neutral-300/20 px-4 py-5 sm:px-6 bg-${event.style}`}
                >
                  <h3 className="text-base font-semibold leading-6 text-white">
                    {event.name}
                  </h3>
                </div>
                <ul role="list">
                  <li className="border-b-[1px] border-neutral-300/20 px-4 py-4 sm:px-6">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-white">Time</p>
                      <p className="text-sm text-gray-500">{event.time}</p>
                    </div>
                  </li>
                  <li className="px-4 py-4 sm:px-6">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-white">Location</p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
