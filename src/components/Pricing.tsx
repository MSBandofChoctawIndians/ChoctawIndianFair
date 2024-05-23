import React from "react";

const ticketPrices = [
  {
    name: "Child Pass",
    age: "5 & Under",
    dayPrice: "Free",
    style: "child-pass",
  },
  {
    name: "Student Pass",
    age: "6 - 17",
    dayPrice: "$7",
    seasonPrice: "$10",
    style: "student-pass",
  },
  {
    name: "Adult Pass",
    age: "18 & Over",
    dayPrice: "$12",
    seasonPrice: "$20",
    style: "adult-pass",
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="flex flex-wrap items-start justify-around py-16 sm:py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Ticket Prices
            </h2>
          </div>
          <dl className="mx-2 mt-16 grid gap-1 overflow-hidden text-center sm:mx-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {ticketPrices.map((ticket, index) => (
              <div
                key={index}
                className={`${ticket.style} flex flex-col rounded-xl border-8 border-neutral-300/30 p-4 sm:p-8`}
              >
                <dt className="pb-2 font-serif text-4xl font-bold lg:text-5xl">
                  {ticket.name}
                </dt>
                <dd className="mx-4 rounded border-2 bg-white/15 p-2 text-2xl font-bold text-neutral-100">
                  Ages {ticket.age}
                </dd>
                {(ticket.seasonPrice && (
                  <>
                    <dd className="pt-2 text-2xl font-bold text-neutral-100">
                      Season: {ticket.seasonPrice}
                    </dd>
                    <dd className="text-2xl font-bold text-neutral-100">
                      Day: {ticket.dayPrice}
                    </dd>
                  </>
                )) || (
                  <dd className="pt-5 text-4xl font-bold text-neutral-100">
                    {ticket.dayPrice}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
