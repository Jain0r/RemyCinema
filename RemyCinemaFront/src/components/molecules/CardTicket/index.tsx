import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ticket } from "../../../interfaces";
import {
  addTicket,
  removeTicket,
  setCantTicket,
} from "../../../redux/actions/shopActions";
import "./index.scss";

interface CardTicketProps {
  data: Ticket;
  totalTickets: number;
}

const CardTicket = ({ data, totalTickets }: CardTicketProps) => {
  const { selectedTickets, selectedSeats } = useSelector(
    (state: any) => state.shop
  );
  const dispatch = useDispatch();
  const getCurrentTicketsByType = (id_ticket: number) => {
    const isOnShop = selectedTickets.find(
      (ticket: Ticket) => ticket.id_ticket === id_ticket
    );
    if (isOnShop) {
      return isOnShop.cant_ticket;
    } else {
      return 0;
    }
  };

  const handleMinusCantTicket = (ticket: Ticket, cant: number) => {
    if (getCurrentTicketsByType(ticket?.id_ticket) > 1) {
      dispatch(
        setCantTicket(
          ticket?.id_ticket,
          getCurrentTicketsByType(ticket?.id_ticket) - cant
        )
      );
    } else {
      dispatch(removeTicket(ticket?.id_ticket));
    }
  };

  const handlePlusCantTicket = (ticket: Ticket, cant: number) => {
    if (getCurrentTicketsByType(ticket?.id_ticket) !== 0) {
      dispatch(
        setCantTicket(
          ticket?.id_ticket,
          getCurrentTicketsByType(ticket.id_ticket) + cant
        )
      );
    } else {
      dispatch(addTicket(ticket));
    }
  };

  return (
    <div className="ticket_item_container" key={data?.id_ticket}>
      <div className="ticket_info">
        <p className="ticket_name">{data?.type_ticket}</p>
        <p className="ticket_price">S/.{data?.price_ticket?.toFixed(2)}</p>
      </div>
      <div className="ticket_cant">
        <button
          disabled={getCurrentTicketsByType(data?.id_ticket) === 0 && true}
          type="button"
          onClick={() => handleMinusCantTicket(data, 1)}
        >
          -
        </button>
        <span>{getCurrentTicketsByType(data?.id_ticket)}</span>
        <button
          type="button"
          disabled={totalTickets === selectedSeats?.length && true}
          onClick={() => handlePlusCantTicket(data, 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CardTicket;
