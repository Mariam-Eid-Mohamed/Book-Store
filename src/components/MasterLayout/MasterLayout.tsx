import { Outlet } from "react-router-dom";
import Appbar from "../Appbar/Appbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MasterLayout = () => {
  return (
    <>
      <div
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <Appbar />
        <Navbar />
      </div>
      <div
        style={{
          paddingTop: "140 px" /*adjust based on navnar+appbar height*/,
        }}
      >
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default MasterLayout;
