import React from "react";

const Pricing: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap items-start justify-around p-4">
        <div className="m-4 flex w-full flex-col rounded-lg bg-white p-6 shadow-md sm:w-64">
          <h2 className="mb-4 text-2xl font-semibold">General Admission</h2>
          <p className="mb-4 text-4xl font-bold">$10</p>
          <ul className="mb-4">
            <li>Access to all general areas</li>
            <li>No reserved seating</li>
          </ul>
          <button className="mt-auto rounded-md bg-blue-500 px-4 py-2 text-white">
            Buy Now
          </button>
        </div>
        <div className="m-4 flex w-full flex-col rounded-lg bg-white p-6 shadow-md sm:w-64">
          <h2 className="mb-4 text-2xl font-semibold">VIP Admission</h2>
          <p className="mb-4 text-4xl font-bold">$25</p>
          <ul className="mb-4">
            <li>Access to all general areas</li>
            <li>Reserved seating</li>
            <li>Complimentary snacks and drinks</li>
          </ul>
          <button className="mt-auto rounded-md bg-blue-500 px-4 py-2 text-white">
            Buy Now
          </button>
        </div>
        <div className="m-4 flex w-full flex-col rounded-lg bg-white p-6 shadow-md sm:w-64">
          <h2 className="mb-4 text-2xl font-semibold">Family Pack</h2>
          <p className="mb-4 text-4xl font-bold">$50</p>
          <ul className="mb-4">
            <li>Access to all general areas</li>
            <li>Reserved seating for 4</li>
            <li>Complimentary snacks and drinks</li>
            <li>Special gift pack</li>
          </ul>
          <button className="mt-auto rounded-md bg-blue-500 px-4 py-2 text-white">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Pricing;
