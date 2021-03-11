import React from "react";
import HeaderContent from "./HeaderUI/HeaderContent";
import HeaderMain from "./HeaderUI/HeaderMain";
import HeaderTop from "./HeaderUI/HeaderTop";

const Header = () => {
  return (
    <header className="container header">
      <HeaderTop />
      <HeaderMain />
      <HeaderContent />
    </header>
  );
};

export default Header;
