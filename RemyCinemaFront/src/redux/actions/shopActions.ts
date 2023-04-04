import { Combo, Food, Seat, Ticket } from "../../interfaces";
import {
  ADD_COMBO,
  ADD_FOOD,
  ADD_SEAT,
  ADD_TICKET,
  REMOVE_COMBO,
  REMOVE_FOOD,
  REMOVE_SEAT,
  REMOVE_TICKET,
  SET_CANT_COMBO,
  SET_CANT_FOOD,
  SET_CANT_TICKET,
  SET_COMBOS,
  SET_FOODS,
  SET_SEATS,
  SET_TICKETS,
} from "../typesof";

//SeatActions

export const setSeats = (allSeats: any) => ({
  type: SET_SEATS,
  payload: allSeats,
});
export const addSeat = (seat: Seat) => ({
  type: ADD_SEAT,
  payload: seat,
});

export const removeSeat = (id: number) => ({
  type: REMOVE_SEAT,
  payload: id,
});

//TicketActions

export const setTickets = (allTickets: any) => ({
  type: SET_TICKETS,
  payload: allTickets,
});

export const addTicket = (ticket: Ticket) => ({
  type: ADD_TICKET,
  payload: ticket,
});

export const removeTicket = (id: number) => ({
  type: REMOVE_TICKET,
  payload: id,
});

export const setCantTicket = (id: number, cant: number) => ({
  type: SET_CANT_TICKET,
  payload: { id, cant },
});

//FoodActions

export const setFoods = (allFoods: any) => ({
  type: SET_FOODS,
  payload: allFoods,
});

export const addFood = (Food: Food) => ({
  type: ADD_FOOD,
  payload: Food,
});

export const removeFood = (id: number) => ({
  type: REMOVE_FOOD,
  payload: id,
});

export const setCantFood = (id: number, cant: number) => ({
  type: SET_CANT_FOOD,
  payload: { id, cant },
});

//ComboActions

export const setCombos = (allCombos: any) => ({
  type: SET_COMBOS,
  payload: allCombos,
});

export const addCombo = (Combo: Combo) => ({
  type: ADD_COMBO,
  payload: Combo,
});

export const removeCombo = (id: number) => ({
  type: REMOVE_COMBO,
  payload: id,
});

export const setCantCombo = (id: number, cant: number) => ({
  type: SET_CANT_COMBO,
  payload: { id, cant },
});
