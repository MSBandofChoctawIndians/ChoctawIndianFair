import Navbar from "./components/NavBar";
import Parallax from "./components/Parallax";

export default function Home() {
  return (
    <>
      <Navbar />
      <Parallax />
      <h1 className="text-4xl text-center mt-10">Hello World</h1>
    </>
  );
}
