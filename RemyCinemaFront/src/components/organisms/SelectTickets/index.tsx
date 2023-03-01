import { useSelector } from "react-redux";
import { Ticket } from "../../../interfaces";
import { TbMoodSad } from "react-icons/tb";
import Button from "../../atoms/Button";
import { initialTickets } from "../../../Api/dataFake";
import CardTicket from "../../molecules/CardTicket";
import "./index.scss";

interface SelectTicketsProps {
  totalTickets: number;
}

const SelectTickets = ({ totalTickets }: SelectTicketsProps) => {
  return (
    <div className="proccess_tickets_selection">
      <div className="select_tickets_main section">
        <div className="select_tickets_info">
          <strong>Selecciona tus entradas</strong>
          <p>
            ¡Combinalas como prefieras! Recuerda que deben coincidir con el
            número de butacas que seleccionaste.
          </p>
        </div>
        <div className="select_tickets_options">
          <ul>
            <strong>Tus Entradas</strong>
            {initialTickets.map((ticket: Ticket) => {
              return (
                <li key={ticket?.id_ticket}>
                  <CardTicket data={ticket} totalTickets={totalTickets} />
                </li>
              );
            })}
          </ul>
          <div className="tickets_options_benefits">
            <strong>Tus Beneficios</strong>

            <div className="all_benefits">
              <span>
                <TbMoodSad />
              </span>
              <p>
                Al parecer no hay beneficios disponibles para ti debido a que no
                eres un miembro registrado de nuestra página web.
              </p>
            </div>
          </div>
        </div>
        <div className="select_tickets_promo_code">
          <div className="promo_code_info">
            <strong>Aplica un código de descuento</strong>
            <p>Códigos promocionales, entradas corporativas.</p>
          </div>
          <div className="promo_code_input">
            <input type="text" placeholder="Ingresa tu código..."></input>
          </div>
          <div className="promo_code_button">
            <Button
              onClick={() => alert("xd")}
              text="Canjear"
              type="button"
              className="tertiary_button"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTickets;
