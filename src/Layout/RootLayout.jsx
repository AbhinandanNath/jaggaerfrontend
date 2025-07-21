import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "./Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
