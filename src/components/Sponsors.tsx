import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { platinumSponsors } from "../data/sponsors/platinum";

export function SponsorCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="grid auto-cols-[20%] grid-flow-col">
        {platinumSponsors.map((sponsor, index) => (
          <div key={index} className="flex items-center justify-center">
            <img className="h-16 w-16" src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
        <div>Slide 6</div>
        <div>Slide 7</div>
        <div>Slide 8</div>
        <div>Slide 9</div>
        <div>Slide 10</div>
      </div>
    </div>
  );
}
