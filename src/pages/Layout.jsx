import { Outlet } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import BottomNav from "../components/Mobile/BottomNav";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Announcement />
      <Navbar />

      <Outlet />

      <Footer />
      {/* Mobile */}
      <div className="fixed bottom-0 z-10 w-full h-16 bg-teal-700 md:hidden">
        <BottomNav />
      </div>
    </>
  );
};

export default Layout;
