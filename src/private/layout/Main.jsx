import Headder from "./Headder";
import Footer from "./Footer";
import NavBar from "./NavBar";

export const MainPrivate = ({ children }) => {
  return (
    <div className="g-sidenav-show flex-1 bg-gradient-Light">
      <Headder />
      <main className="main-content border-radius-lg ">
        <NavBar />
        <div className="container-fluid py-4">
          <main id="main">{children}</main>
        </div>
        <Footer />
      </main>

    </div>
  );
};
