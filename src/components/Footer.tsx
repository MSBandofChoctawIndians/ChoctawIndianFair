import DiamondBorder from "./DiamondBorder";

export default function Footer() {
  return (
    <footer>
      <DiamondBorder />
      <h1>This is the footer.</h1>
      <div className="w-full text-center py-3">
        <p className="text-neutral-500">Created by <a href="https://nativeconsult.io" className="text-indigo-400 hover:text-indigo-200">Native Consulting Services</a></p>
      </div>
    </footer>
  );
}
