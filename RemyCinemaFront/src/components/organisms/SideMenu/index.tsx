import React, { useRef, useState } from "react";
import { IoIosRocket, IoMdClose, IoIosSend } from "react-icons/io";
import { FiSearch, FiHome } from "react-icons/fi";
import { BiCameraMovie } from "react-icons/bi";
import {
  MdFastfood,
  MdLocalDrink,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { GiPopcorn } from "react-icons/gi";
import IconText from "../../atoms/IconText";
import { TbMovie } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";
import "./index.scss";

interface SideMenuProps {
  isOpen: boolean;
  toggleSideMenu(): void;
}
interface SideMenuItemProps {
  route: string;
  subroutes?: JSX.Element;
  icon?: JSX.Element;
}
const SideMenuItem = ({ route, subroutes, icon }: SideMenuItemProps) => {
  const [active, setActive] = useState(false);
  const dropMenuRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  let content = dropMenuRef.current?.nextElementSibling;
  return (
    <li onClick={() => setActive(!active)}>
      <div
        className={active ? "sidemenu_item active" : "sidemenu_item"}
        ref={dropMenuRef}
      >
        <IconText text={route} icon={<>{icon}</>} />
        {subroutes ? (
          <span className="sidemenu_item_arrow">
            <MdOutlineKeyboardArrowDown />
          </span>
        ) : null}
      </div>
      {subroutes && (
        <div
          className="sidemenu_subroutes"
          style={{ maxHeight: active ? `${content?.scrollHeight}px` : "0" }}
        >
          {subroutes}
        </div>
      )}
    </li>
  );
};
const SideMenu = ({ isOpen, toggleSideMenu }: SideMenuProps) => {
  const [search, setSearch] = useState("");
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className={isOpen ? "sidemenu_container open" : "sidemenu_container"}>
      <div className="sidemenu_main section">
        <div className="sidemenu_top_container">
          <div className="sidemenu_search_container">
            <div className="sidemenu_search_input">
              <input
                id="search_sidemenu"
                type="text"
                placeholder="¿Qué quieres ver hoy?"
                value={search}
                onBlur={() => setSearch("")}
                onChange={handleQuery}
              ></input>
            </div>
            <label htmlFor="search_sidemenu">
              <FiSearch />
              <IoIosSend />
            </label>
          </div>
          <div className="sidemenu_close_container">
            <div className="sidemenu_close_button">
              <IoMdClose onClick={() => toggleSideMenu()} />
            </div>
          </div>
        </div>
        <ul className="sidemenu_main_routes">
          <SideMenuItem route="Inicio" icon={<FiHome />} />
          <SideMenuItem
            route="Películas"
            icon={<BiCameraMovie />}
            subroutes={
              <ul>
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
          <SideMenuItem
            route="Dulcería"
            icon={<FiHome />}
            subroutes={
              <ul>
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
      </div>
    </div>
  );
};

export default SideMenu;
