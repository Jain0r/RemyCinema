import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminBreadCumb from "../../../components/molecules/AdminBreadCumb";
import SideMenuAdmin from "../../../components/organisms/SideMenuAdmin";
import "./index.scss";

// aca se traera toda la adata
const AdminInitPage = () => {
  return (
    <div className="admininit_container">
      <SideMenuAdmin />
      <div className="admininit_main">
        <AdminBreadCumb />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminInitPage;
