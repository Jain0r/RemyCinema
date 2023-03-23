import React, { useState } from "react";
import imageAdmin from "../../../assets/logo-transparent-white-svg.svg";
import { FaBars, FaClosedCaptioning } from "react-icons/fa";
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
import { IoMdClose } from "react-icons/io";
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

const NavMenuAdmin = () => {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <div className="navmenu_admin_container">
      <div className="admin_logo">
        <img src={imageAdmin}></img>
      </div>

      <div className="admin_open toggle">
        <FaBars onClick={() => setOpenNav(true)} />
      </div>

      <div
        className={
          openNav ? "admin_paths_container open" : "admin_paths_container"
        }
      >
        <div className="admin_close toggle">
          <IoMdClose onClick={() => setOpenNav(false)} />
        </div>
        <ul>
          {SideMenuPaths &&
            SideMenuPaths.map((path: Paths) => {
              return (
                <li key={path.id} onClick={() => navigate(`${path.path}`)}>
                  <div className="admin_path_container">
                    <p>{path?.text}</p>
                    <span>{path?.icon}</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default NavMenuAdmin;
