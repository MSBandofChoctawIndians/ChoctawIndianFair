export default function Culture() {
  return (
    <div className="bg-blue-weave bg-size-weave bg-repeat">
      <div className="container mx-auto">
        <div className="py-3">
          <img
            src="./img/culture-banner-01.webp"
            alt="Event banner"
            className="hidden rounded-md border-2 border-neutral-300/20 md:block"
          />
          <img
            src="./img/event-banner-02.jpg"
            alt="Event banner"
            className="rounded-md border border-neutral-300/20 md:hidden"
          />
        </div>
      </div>
    </div>
  );
}
