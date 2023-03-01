import React from "react";
import logo from "../../../assets/logo-transparent-white-svg.svg";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import "./index.scss";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_main section">
        <div className="logo_item">
          <img src={logo} alt="logorc"></img>
        </div>
        <div className="footer_items">
          <div className="footer_item about_us">
            <p className="footer_item_title">Sobre nosotros</p>
            <ul>
              <li>
                <a>¿Quiénes somos?</a>
              </li>
              <li>
                <a>Trabaja con nosotros</a>
              </li>
              <li>
                <a>Beneficios de trabajar con nosotros</a>
              </li>
            </ul>
          </div>
          <div className="footer_item partner_benefit">
            <p className="footer_item_title">Programa de asociados</p>
            <ul>
              <li>
                <a>¿Como hacerme partner?</a>
              </li>
              <li>
                <a>¿Ser partner cuesta dinero?</a>
              </li>
              <li>
                <a>¿Cada cuanto se renueva mi suscripción?</a>
              </li>
              <li>
                <a>¿Cuales son los beneficios de ser partner?</a>
              </li>
            </ul>
          </div>

          <div className="footer_item tyc_terms">
            <p className="footer_item_title">Términos y condiciones</p>
            <ul>
              <li>
                <a>Políticas de Privacidad</a>
              </li>
              <li>
                <a>Políticas de Sostenibilidad</a>
              </li>
              <li>
                <a>Políticas de Diversidad e Inclusión</a>
              </li>
              <li>
                <a>Reglas de Convivencia</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social_media_links">
          <p className="social_media_links_title">
            {" "}
            © 2023 RemicineCorp. Todos los derechos reservados
          </p>
          <ul>
            <li>
              <a>
                <BsFacebook />
              </a>
            </li>
            <li>
              <a>
                <BsInstagram />
              </a>
            </li>
            <li>
              <a>
                <BsTwitter />
              </a>
            </li>
            <li>
              <a>
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
