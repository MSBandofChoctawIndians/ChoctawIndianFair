import { useEffect } from "react";
import chiefprincess from "/img/chiefprincess.webp";
import Countdown from "./Countdown";

export default function Feature() {
  useEffect(() => {
    const image = new Image();
    image.src = chiefprincess;
  }, []);

  return (
    <div className="bg-red-weave bg-size-weave bg-repeat sm:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 px-4 xl:grid-cols-2">
          <div className="flex items-center justify-center p-8">
            <div className="rounded-md bg-gradient-to-br from-yellow-400/70 via-yellow-100/80 to-yellow-400/70 p-2">
              <img
                src={chiefprincess}
                alt="Chief and Princess"
                className="h-auto w-full"
                height={600}
                width={600}
              />
            </div>
          </div>
          <div className="flex-col items-center justify-center p-8 text-center">
            <p className="font-serif text-7xl font-bold">Halito!</p>
            <p className="mt-6 text-lg text-gray-300">
              Greetings from the Choctaw Indian Reservation. We invite you to
              join us July 10-13 for our 74th annual Choctaw Indian Fair. The
              fair takes place on our centuries-old homeland in beautiful
              Choctaw, Mississippi. We gather each July to celebrate our
              heritage and share our beautiful and vibrant culture with our
              friends and neighbors. This year’s fair theme is:
            </p>
            <p className="my-8 font-serif text-4xl font-bold">
              “The Choctaw Spirit Lives On”
            </p>
            <p className="mt-6 text-lg text-gray-300">
              Fairgoers will experience the magnificent journey of our people
              through historical and cultural displays, social dancing, tribal
              arts & crafts, Choctaw stickball – the granddaddy of all field
              sports – as well as the Choctaw Indian Princess Pageant and
              traditional Choctaw food. The fair also offers carnival rides and
              games for the young and old alike, Shawi’s Discovery Zone and
              chart-topping musical acts each night. There’s something for
              everyone at the Choctaw Indian Fair – we’ll see you soon!
            </p>
            <p className="mt-8 font-serif text-5xl font-bold">Yakoki!</p>
          </div>
        </div>
        <Countdown />
      </div>
    </div>
  );
}
