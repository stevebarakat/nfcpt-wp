import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children, menuItems }) => (
  <>
    <Header menuItems={menuItems} />
    {children}
    <Footer />
  </>
);

export default Layout;
