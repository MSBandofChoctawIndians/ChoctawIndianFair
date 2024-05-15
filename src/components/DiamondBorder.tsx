export default function DiamondBorder() {
  return (
    <>
      <div className="bg-background h-1 w-full" />
      <div className="h-1.5 w-full bg-[#c4b166]" />
      <div className="bg-background h-1 w-full" />
      <div
        className="h-10 w-full bg-[#38363c]"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 20" fill="%23CCBB77"%3E%3Cpolygon points="13,1 25,10 13,19 1,10" /%3E%3C/svg%3E')`,
        }}
      />
      <div className="bg-background h-1 w-full" />
      <div className="h-1.5 w-full bg-[#c09c2f]" />
      <div className="bg-background h-1 w-full" />
    </>
  );
}
