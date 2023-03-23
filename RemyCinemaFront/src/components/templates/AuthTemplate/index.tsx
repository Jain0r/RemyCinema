import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdFastfood,
  MdOutlineCreditScore,
  MdEventSeat,
} from "react-icons/md";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { RiVipCrownFill } from "react-icons/ri";
import routes from "../../../shared/navigation";
import PartnerCard from "../../molecules/PartnerCard";
import { HiOutlineTicket } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import RegisterForm from "../../organisms/RegisterForm";
import LoginForm from "../../organisms/LoginForm";
import "./index.scss";

const AuthTemplate = () => {
  const [register, setRegister] = useState<boolean>(false);
  const navigate = useNavigate();

  const itemsBenefit: { icon: JSX.Element }[] = [
    { icon: <HiOutlineTicket /> },
    { icon: <BiCameraMovie /> },
    { icon: <MdFastfood /> },
    { icon: <MdEventSeat /> },
    { icon: <RiVipCrownFill /> },
    { icon: <MdOutlineCreditScore /> },
    { icon: <HiOutlineTicket /> },
    { icon: <BiCameraMovie /> },
    { icon: <MdFastfood /> },
    { icon: <MdEventSeat /> },
    { icon: <RiVipCrownFill /> },
    { icon: <MdOutlineCreditScore /> },
  ];
  return (
    <div className="authtemplate_container">
      <div className="authtemplate_goback section">
        <p onClick={() => navigate(`${routes.home.init}`)}>
          <MdOutlineKeyboardArrowLeft /> Regresar
        </p>
      </div>
      <div className="authtemplate_main section">
        <div className="authtemplate_form">
          {register ? (
            <RegisterForm setRegister={(value) => setRegister(value)} />
          ) : (
            <LoginForm setRegister={(value) => setRegister(value)} />
          )}
        </div>
        {register ? (
          <motion.div
            key="registertemplate_info"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ type: "easeOut" }}
            className="registertemplate_info"
          >
            <div className="registertemplate_info_benefits">
              <BsFillArrowRightCircleFill />
              <p>
                Conviertete en colaborador y aprovecha todas las promociones que
                tenemos para ti.
              </p>
            </div>
            <div className="registertemplate_info_cards">
              <PartnerCard userName="Usuario feliz" />
              <PartnerCard userName="Usuario feliz" className="white-card" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="logintemplate_info"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ type: "easeOut" }}
            className="logintemplate_info"
          >
            <div className="logintemplate_info_benefits">
              <BsFillArrowRightCircleFill />
              <p>
                ¡Bienvenido de vuelta!, sigue disfrutando de nuestros beneficios
                que tenemos para ti.
              </p>
            </div>
            <div className="slider_benefits">
              <div className="logintemplate_grid_benefits">
                {itemsBenefit.map((item: { icon: JSX.Element }, index) => {
                  return (
                    <div key={index} className="item_benefit">
                      {item.icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AuthTemplate;
