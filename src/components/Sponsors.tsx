import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { platinumSponsors } from "../data/sponsors/platinum";

export function SponsorCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      <div className="h-0.5 w-full bg-neutral-300/30" />
      <div className="bg-lattice-background from-amber-300 via-amber-950 to-amber-300 bg-center py-12 sm:py-24">
        <div>
          <h2 className="pb-12 text-center font-serif text-4xl font-bold sm:text-5xl">
            Thank you to our 2023 Sponsors
          </h2>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {platinumSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="min-w-none max-w-[20rem] flex-[0_0_100%] p-4 sm:flex-[0_0_50%] sm:p-1 md:flex-[0_0_25%] lg:flex-[0_0_20%] xl:flex-[0_0_15%]"
              >
                <a href={sponsor.url} target="_blank" rel="noreferrer">
                  <div className="bg-platinum rounded border-8 border-neutral-300/20 p-2 text-center text-black">
                    <h2 className="pb-2 text-2xl font-bold">
                      Platinum Sponsor
                    </h2>
                    <img
                      className="mx-auto h-auto w-full"
                      src={sponsor.logo} // sponsor.logo
                      alt={sponsor.name}
                    />
                  </div>
                </a>
              </div>
            ))}
            {platinumSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="min-w-none max-w-[20rem] flex-[0_0_100%] p-4 sm:flex-[0_0_50%] sm:p-1 md:flex-[0_0_25%] lg:flex-[0_0_20%] xl:flex-[0_0_15%]"
              >
                <a href={sponsor.url} target="_blank" rel="noreferrer">
                  <div className="bg-platinum rounded border-8 border-neutral-300/20 p-2 text-center text-black">
                    <h2 className="pb-2 text-2xl font-bold">
                      Platinum Sponsor
                    </h2>
                    <img
                      className="mx-auto h-auto w-full"
                      src={sponsor.logo} // sponsor.logo
                      alt={sponsor.name}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
