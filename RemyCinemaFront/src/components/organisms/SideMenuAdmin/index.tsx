import React, { useEffect, useRef, useState } from "react";
import imageAdmin from "../../../assets/logo-transparent-white-svg.svg";
import { FaBars } from "react-icons/fa";
import {
  MdSpaceDashboard,
  MdFastfood,
  MdInsertChartOutlined,
} from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi";
import { BiMovie, BiCameraMovie, BiBuilding, BiLogOut } from "react-icons/bi";
import { GiTheater } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import perfil from "../../../assets/perfil.jpg";
import routes from "../../../shared/navigation";
import "./index.scss";
import { useLocation, useNavigate } from "react-router-dom";

interface Paths {
  id: number;
  text: string;
  icon: JSX.Element;
  path?: string;
}
const SideMenuPaths: Paths[] = [
  {
    id: 1,
    text: "admin",
    icon: <MdSpaceDashboard />,
    path: routes.mainRoutes.admin,
  },
  { id: 2, text: "movies", icon: <BiMovie />, path: routes.admin.movies },
  {
    id: 3,
    text: "functions",
    icon: <BiCameraMovie />,
    path: routes.admin.functions,
  },
  { id: 4, text: "users", icon: <FiUsers />, path: routes.admin.users },
  { id: 5, text: "cinemas", icon: <BiBuilding />, path: routes.admin.cinemas },
  { id: 6, text: "halls", icon: <GiTheater />, path: routes.admin.halls },
  {
    id: 7,
    text: "tickets",
    icon: <HiOutlineTicket />,
    path: routes.admin.tickets,
  },
  { id: 8, text: "foods", icon: <MdFastfood />, path: routes.admin.foods },
  {
    id: 9,
    text: "bookings",
    icon: <MdInsertChartOutlined />,
    path: routes.admin.bookings,
  },
];

const SideMenuAdmin = () => {
  const location = useLocation();
  const getCurrentPath = () => {
    const currentPath = location.pathname?.split("/").at(-1);
    const Path = SideMenuPaths.find((path) => path.text === currentPath);
    return Path?.id;
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<number | undefined>(
    getCurrentPath()
  );
  const navigate = useNavigate();

  const handlePath = (path: Paths) => {
    if (path.path !== undefined) {
      navigate(path.path);
      setCurrentPath(path.id);
      //setIsOpen(true); //aun por ver
    }
  };

  return (
    <div
      className={
        isOpen ? "admin_sidemenu_container  open" : "admin_sidemenu_container "
      }
    >
      <div className="admin_sidemenu_main">
        <div className="admin_sidemenu_top_container">
          <img className="admin_logo" src={imageAdmin} alt="logo"></img>
          <p className="admin_toggle" onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </p>
        </div>
        <ul className="admin_sidemenu_paths_list_container">
          {SideMenuPaths.map((path) => {
            return (
              <li
                onClick={() => handlePath(path)}
                className={
                  currentPath === path.id ? "path_item active" : "path_item"
                }
                key={path.id}
              >
                <span className="path_icon">{path.icon}</span>
                <p className="path_text">
                  {path.text === "admin" ? "dashboard" : path.text}
                </p>
                <div className="tooltip_text">
                  <p>{path.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="admin_perfil_container">
          <div className="admin_current_perfil">
            <img src={perfil} alt="fino"></img>
            <p className="admin_info">
              <span>Maicol Jainor</span>
              <span>Backend Developer</span>
            </p>
          </div>
          <span className="admin_logout_button">
            <BiLogOut />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideMenuAdmin;
