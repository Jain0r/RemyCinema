import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/organisms/Footer";
import NavBar from "../../../components/organisms/NavBar";

const UserContainer = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserContainer;
