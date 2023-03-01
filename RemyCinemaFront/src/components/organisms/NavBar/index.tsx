import React, { useState } from "react";
import logo from "../../../assets/logo-transparent-svg.svg";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser, AiOutlineFire } from "react-icons/ai";
import {
  MdFavoriteBorder,
  MdOutlineKeyboardArrowDown,
  MdFastfood,
  MdLocalDrink,
} from "react-icons/md";
import { GiPopcorn } from "react-icons/gi";
import { RiMenuFill } from "react-icons/ri";
import { IoIosRocket, IoIosSend } from "react-icons/io";
import { TbMovie } from "react-icons/tb";
import SideMenu from "../SideMenu";
import "./index.scss";
import IconText from "../../atoms/IconText";

interface NavMenuItemProps {
  route: string;
  subroutes?: JSX.Element;
}

const NavMenuItem = ({ route, subroutes }: NavMenuItemProps) => {
  return (
    <li>
      <a>
        {route}
        {subroutes ? <MdOutlineKeyboardArrowDown /> : null}
      </a>
      {subroutes ? subroutes : null}
    </li>
  );
};

const NavBar = () => {
  const [search, setSearch] = useState<string>("");
  const [isOpenSideMenu, setIsOpenSideMenu] = useState<boolean>(false);

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div id="nav_container" className="navbar_container">
      <div className="navbar_main_container section">
        <img className="navbar_logo" src={logo} alt="logo" title="logo"></img>
        <ul className="navbar_main_routes">
          <NavMenuItem route="Inicio" />
          <NavMenuItem
            route="Películas"
            subroutes={
              <ul className="sublinks_container">
                <li>
                  <IconText text="Cartelera" icon={<TbMovie />} />
                </li>
                <li>
                  <IconText text="Estrenos" icon={<AiOutlineFire />} />
                </li>
                <li>
                  <IconText text="Proximamente" icon={<IoIosRocket />} />
                </li>
              </ul>
            }
          />
          <NavMenuItem
            route="Dulcería"
            subroutes={
              <ul className="sublinks_container">
                <li>
                  <IconText text="Snacks" icon={<GiPopcorn />} />
                </li>
                <li>
                  <IconText text="Bebidas" icon={<MdLocalDrink />} />
                </li>
                <li>
                  <IconText text="Combos" icon={<MdFastfood />} />
                </li>
              </ul>
            }
          />
        </ul>
        <ul className="navbar_menu_list">
          <li className="navbar_search_container">
            <div className="navbar_search_input">
              <input
                id="search_navmenu"
                type="text"
                placeholder="¿Qué quieres ver hoy?"
                value={search}
                onBlur={() => setSearch("")}
                onChange={handleQuery}
              ></input>
            </div>
            <label htmlFor="search_navmenu">
              <FiSearch />
              <IoIosSend />
            </label>
          </li>
          <li title="Dulceria">
            <MdFavoriteBorder />
          </li>
          <li>
            <AiOutlineUser />
          </li>
          <li>
            <RiMenuFill onClick={() => setIsOpenSideMenu(true)} />
          </li>
        </ul>
        <SideMenu
          isOpen={isOpenSideMenu}
          toggleSideMenu={() => setIsOpenSideMenu(!isOpenSideMenu)}
        />
      </div>
    </div>
  );
};

export default NavBar;
