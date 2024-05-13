import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
