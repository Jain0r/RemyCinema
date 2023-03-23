import React from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";

const AdminBreadCumb = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/").at(-1);
  console.log(currentPath);
  return (
    <div className="admin_breadcumb_container">
      <div className="admin_breadcumb_main">
        <p className="admin_current_path admin_section_title">
          {currentPath === "admin" ? "dashboard" : currentPath}
        </p>
      </div>
    </div>
  );
};

export default AdminBreadCumb;
