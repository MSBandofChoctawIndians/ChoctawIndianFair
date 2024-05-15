import { useRef, useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

let videos = [
  {
    url: "./vid/OpeningCeremonies.mp4",
    title: "Opening Ceremonies",
    statement: "Our full Fair Schedule is available now!",
    link: "/ChoctawIndianFair/events",
  },
  {
    url: "./vid/Princess.mp4",
    title: "Princess Pageant",
    statement: "Our Princess Pageant is coming up!",
    link: "/ChoctawIndianFair/pageant",
  },
  {
    url: "./vid/Stickball.mp4",
    title: "World Series Stickball",
    statement: "Watch Choctaw Stickball in action!",
    link: "/ChoctawIndianFair/stickball",
  },
  {
    url: "./vid/Dancegrounds.mp4",
    title: "Choctaw Culture",
    statement: "Cultural Dances are a must-see!",
    link: "/ChoctawIndianFair/culture",
  },
  {
    url: "./vid/RezRun.mp4",
    title: "Competitions",
    statement: "Sign up for the Rez Run today!",
    link: "/ChoctawIndianFair/competitions",
  },
  {
    url: "./vid/IronWarrior.mp4",
    title: "Competitions",
    statement: "The Iron Warrior Challenge is back!",
    link: "/ChoctawIndianFair/competitions",
  },
  {
    url: "./vid/Midway.mp4",
    title: "Family Fun",
    statement: "Check out the Midway Rides!",
    link: "/ChoctawIndianFair/family",
  },
];

export default function BackgroundVid() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    let currentVideoElement = videoRef.current;

    if (currentVideoElement) {
      currentVideoElement.addEventListener("ended", nextVideo);
      return () => {
        currentVideoElement.removeEventListener("ended", nextVideo);
      };
    }
  }, []);

  useEffect(() => {
    let currentVideoElement = videoRef.current;
    if (currentVideoElement) {
      currentVideoElement.src = videos[currentVideoIndex].url;
      currentVideoElement.load();
      currentVideoElement.addEventListener("loadeddata", () => {
        currentVideoElement.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      });
    }
  }, [currentVideoIndex]);

  return (
    <div className="relative h-[65vh] w-full overflow-hidden bg-black sm:h-[80vh]">
      <video
        autoPlay
        muted
        playsInline
        ref={videoRef}
        className="h-full min-w-full object-cover"
        onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu
      >
        <source src={videos[currentVideoIndex].url} type="video/mp4" />
      </video>
      <div
        key={currentVideoIndex}
        className="text-foreground absolute bottom-0 left-0 right-0 flex h-[30vh] flex-col items-center justify-end bg-gradient-to-b from-transparent via-neutral-900 to-black pb-1 text-center sm:pb-4"
      >
        <Link to={videos[currentVideoIndex].link}>
          <h2 className="animate-fade-in text-base font-semibold leading-7 text-red-700 transition dark:text-amber-200">
            {videos[currentVideoIndex].title}
          </h2>
          <p className="animate-fade-in text-foreground mt-2 pb-4 font-serif text-4xl font-bold tracking-tight text-white transition sm:text-5xl">
            {videos[currentVideoIndex].statement}
          </p>
        </Link>
        <ChevronDownIcon className="text-foreground h-6 w-6 animate-bounce" />
      </div>
    </div>
  );
}
