import Header from "./globals/Header";
import Footer from "./globals/Footer";
import "./global.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;