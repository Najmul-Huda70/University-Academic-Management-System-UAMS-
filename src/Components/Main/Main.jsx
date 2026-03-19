import React from "react";
import MainContainer from "./MainContainer";
import NavbarList from "../../Global Components/NavbarList";

const Main = () => {
  return (
    <div className="flex">
      <div className="hidden sm:flex">
        <NavbarList></NavbarList>
      </div>
      <MainContainer></MainContainer>
    </div>
  );
};

export default Main;
