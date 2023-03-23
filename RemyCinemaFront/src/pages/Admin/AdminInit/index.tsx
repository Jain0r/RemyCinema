import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminBreadCumb from "../../../components/molecules/AdminBreadCumb";
import NavMenuAdmin from "../../../components/organisms/NavMenuAdmin";
import SideMenuAdmin from "../../../components/organisms/SideMenuAdmin";
import "./index.scss";

// aca se traera toda la adata
const AdminInitPage = () => {
  return (
    <div className="admininit_container">
      <NavMenuAdmin />
      <SideMenuAdmin />
      <div className="admininit_main">
        <AdminBreadCumb />
        <div className="admininit_outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminInitPage;
