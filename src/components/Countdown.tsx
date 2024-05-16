import React, { useEffect, useState } from "react";

const calculateTimeRemaining = (targetDate: Date): number => {
  const currentTime = new Date().getTime();
  const targetTime = targetDate.getTime();
  const timeRemaining = Math.floor((targetTime - currentTime) / 1000);
  return timeRemaining > 0 ? timeRemaining : 0;
};

const Countdown: React.FC = () => {
  const targetDate = new Date("2024-07-10T11:00:00");
  const [countdown, setCountdown] = useState(
    calculateTimeRemaining(targetDate),
  );
  const [message, setMessage] = useState(
    "Countdown to the next Choctaw Indian Fair",
  );

  const days = Math.floor(countdown / (24 * 60 * 60));
  const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = countdown % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
      setMessage("The Choctaw Indian Fair has begun!");
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  return (
    <div className="mx-auto max-w-2xl pt-24 text-white lg:max-w-none">
      <div className="text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          {message}
        </h2>
      </div>
      {countdown > 0 ? (
        <dl className="mt-16 grid gap-1 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col border-8 border-amber-300 bg-gradient-to-b from-neutral-800/50 via-neutral-500/70 to-neutral-800/50 p-8">
            <dt className="text-5xl font-bold">{days}</dt>
            <dd className="font-serif text-lg text-gray-500">Days</dd>
          </div>
          <div className="flex flex-col border-8 border-amber-300 bg-gradient-to-b from-neutral-800/50 via-neutral-500/70 to-neutral-800/50 p-8">
            <dt className="text-5xl font-bold">{hours}</dt>
            <dd className="font-serif text-lg text-gray-500">Hours</dd>
          </div>
          <div className="flex flex-col border-8 border-amber-300 bg-gradient-to-b from-neutral-800/50 via-neutral-500/70 to-neutral-800/50 p-8">
            <dt className="text-5xl font-bold">{minutes}</dt>
            <dd className="font-serif text-lg text-gray-500">Minutes</dd>
          </div>
          <div className="flex flex-col border-8 border-amber-300 bg-gradient-to-b from-neutral-800/50 via-neutral-500/70 to-neutral-800/50 p-8">
            <dt className="text-5xl font-bold">{seconds}</dt>
            <dd className="font-serif text-lg text-gray-500">Seconds</dd>
          </div>
        </dl>
      ) : null}
    </div>
  );
};

export default Countdown;
