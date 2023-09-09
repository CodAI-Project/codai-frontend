import React from "react";
import Header from "./Header";
import NavbarCustom from "../landpage/navbarCustom";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarCustom/>
      {children}
    </>
  );
};

export default Layout;
