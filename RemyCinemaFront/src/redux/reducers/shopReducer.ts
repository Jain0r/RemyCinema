import {  Combo, Food, OrderInfo, Seat, Ticket } from "../../interfaces";
import { ADD_COMBO, ADD_FOOD, ADD_SEAT, ADD_TICKET, REMOVE_COMBO, REMOVE_FOOD, REMOVE_SEAT, REMOVE_TICKET, SET_CANT_COMBO, SET_CANT_FOOD, SET_CANT_TICKET, SET_COMBOS, SET_FOODS, SET_SEATS, SET_TICKETS } from "../typesof";


export const initialState:OrderInfo = {
  selectedSeats: [],
  selectedTickets:[],
  selectedFoods: [],
  selectedCombos:[]
};

//Thunk functions

export default function shopReducer(state = initialState, action:any) {
  switch (action.type) {
    case SET_SEATS: {
      return {
        ...state,
        selectedSeats: action.payload,
      };
    }
    case ADD_SEAT:
      let seatAlreadyIn = state.selectedSeats.find((seat:Seat)=> seat.id_seat === action.payload.id_seat )
      return seatAlreadyIn ?{
        ...state,
        selectedSeats:state.selectedSeats
      }:{
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload]
      }

    case REMOVE_SEAT:
      return {
        ...state,
        selectedSeats: state.selectedSeats.filter((seat: Seat)=> seat.id_seat !== action.payload)
      };
    case SET_TICKETS:{
        return{
            ...state,
            selectedTickets: action.payload,
        }
    }
    case ADD_TICKET:
      let ticketAlreadyIn = state.selectedTickets.find((ticket: Ticket)=> ticket.id_ticket === action.payload.id_ticket)
        return ticketAlreadyIn?{
            ...state,
            selectedTickets: state.selectedTickets
        }:{
            ...state,
            selectedTickets: [...state.selectedTickets, {...action.payload, cant_ticket: 1}]
        }
    case REMOVE_TICKET:{
        return{
            ...state,
            selectedTickets: state.selectedTickets.filter((ticket: Ticket)=> ticket.id_ticket !== action.payload)
        }
    }
    case SET_CANT_TICKET:{
        return {
            ...state,
            selectedTickets : state.selectedTickets.map((ticket:Ticket)=> ticket.id_ticket === action.payload.id ? {...ticket, cant_ticket:action.payload.cant}: ticket   )
        }
    }
    case SET_FOODS:{
      return {
        ...state,
        selectedFoods: action.payload
      }
    }
    case ADD_FOOD:
      let foodAlreadyIn = state.selectedFoods.find((food:Food)=> food.id_food === action.payload.id_food)
        return foodAlreadyIn?{
          ...state,
          selectedFoods: state.selectedFoods
        }:{
          ...state,
          selectedFoods: [...state.selectedFoods,{...action.payload, cant_food:1}]
        }
    case REMOVE_FOOD:{
      return {
        ...state,
        selectedFoods: state.selectedFoods.filter((food: Food)=> food.id_food !== action.payload)
      }
    }
    case SET_CANT_FOOD:{
      return {
        ...state,
        selectedFoods: state.selectedFoods.map((food:Food)=> food.id_food === action.payload.id? {...food, cant_food: action.payload.cant}: food)
      }
    }
    case SET_COMBOS:{
      return {
        ...state,
        selectedCombos: action.payload
      }
    }
    case ADD_COMBO:
      let comboAlreadyIn = state.selectedCombos.find((combo: Combo)=>combo.id_combo === action.payload.id_combo)
      return comboAlreadyIn?{
        ...state,
        selectedCombos: state.selectedCombos
      }: {
        ...state,
        selectedCombos: [...state.selectedCombos,{...action.payload, cant_combo:1}]
      }
      case REMOVE_COMBO:{
        return {
          ...state,
          selectedCombos: state.selectedCombos.filter((combo:Combo)=> combo.id_combo !== action.payload)
        }
      }
      case SET_CANT_COMBO:{
        return {
          ...state,
          selectedCombos: state.selectedCombos.map((combo:Combo)=> combo.id_combo === action.payload.id?{...combo, cant_combo: action.payload.cant}:combo)
        }
      }
    default:
      return state;
  }
}
