import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  MapIcon,
  TicketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import cifLogoShort from "/img/cifLogoShort.webp";

const navItems = [
  {
    name: "Events",
    href: "/ChoctawIndianFair/events",
  },
  {
    name: "Culture",
    href: "/ChoctawIndianFair/culture",
  },
  {
    name: "Family Fun",
    href: "/ChoctawIndianFair/family",
  },
  {
    name: "Stickball",
    href: "/ChoctawIndianFair/stickball",
  },
  {
    name: "Pageant",
    href: "/ChoctawIndianFair/pageant",
  },
  {
    name: "Competitions",
    href: "/ChoctawIndianFair/competitions",
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-rope bg-center font-serif">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/ChoctawIndianFair/" className="-m-1.5 p-1.5">
            <span className="sr-only">Choctaw Indian Fair</span>
            <img src={cifLogoShort} width={48} height={48} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden gap-x-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 hover:text-gray-500 xl:text-base"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/ChoctawIndianFair/map"
            className="text-sm font-semibold leading-6"
          >
            <MapIcon
              className="mt-1 h-5 w-5 flex-none text-gray-300 hover:text-gray-500 xl:mt-0 xl:h-7 xl:w-7"
              aria-hidden="true"
            />
            <span className="sr-only">Fair Map</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-x-1.5 space-y-1 rounded border-2 border-neutral-300/20 bg-gradient-to-br from-black via-neutral-800 to-black px-3 py-2 text-sm font-semibold shadow-sm hover:text-neutral-500 disabled:opacity-70 sm:space-y-0"
          >
            <TicketIcon className="h-5 w-5" aria-hidden="true" />
            <span>Buy Tickets</span>
          </button>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-800 px-6 py-6 font-serif sm:max-w-sm sm:ring-1 sm:ring-neutral-300/10">
          <div className="flex items-center justify-between">
            <Link to="/ChoctawIndianFair/" className="-m-1.5 p-1.5">
              <span className="sr-only">Choctaw Indian Fair</span>
              <img src={cifLogoShort} height={48} width={48} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-200/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-neutral-600"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/ChoctawIndianFair/map"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-neutral-600"
                >
                  Fair Map
                </Link>
              </div>
              <div className="py-6">
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-x-1.5 space-y-1 rounded border-2 border-neutral-300/20 bg-gradient-to-br from-black via-neutral-800 to-black px-3 py-2 text-sm font-semibold shadow-sm hover:text-neutral-500 disabled:opacity-70 sm:space-y-0"
                >
                  <TicketIcon className="h-5 w-5" aria-hidden="true" />
                  <span>Buy Tickets</span>
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
