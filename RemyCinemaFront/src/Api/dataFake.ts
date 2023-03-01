import { Combo, Food, Seat, Ticket } from "../interfaces";

export const initialCombos: Combo[] = [ 
    {
      id_combo: 1,
      name_combo: "Combo 2 Dulce OL CC",
      description_combo:
        "1 Canchita Gigante (Dulce) + 2 Bebidas (32oz). *Sabor bebida sujeto a stock / canchita sin refill",
      price_combo: 41.5,
    },
    {
      id_combo: 2,
      name_combo: "Combo 2 Salado OL CC",
      description_combo:
        "Canchita Gigante Salada + 2 Bebidas (32oz). *Sabor bebida sujeto a stock / canchita sin refill",
      price_combo: 37.5,
    },
    {
      id_combo: 3,
      name_combo: "Combo 2 Salado Dob.Gig. OL",
      description_combo:
        "2 Canchita Gigante Salada + 2 Bebidas Grandes (32oz) *Sabor bebida sujeto a stock / canchita sin refill",
      price_combo: 48.5,
    },
    {
      id_combo: 4,
      name_combo: "Combo 2 Mix OL CC",
      description_combo:
        "1 Canchita Gigante (Mix) + 2 Bebidas (32oz). *Sabor bebida sujeto a stock / canchita sin refill",
      price_combo: 41.5,
    },
    {
      id_combo: 5,
      name_combo: "Combo 1 OL CC Dulce",
      description_combo:
        "Canchita Grande(Dulce) + 1 Bebida (32oz).*Sabor gaseosa sujeto a stock del cine",
      price_combo: 25.5,
    },
    {
      id_combo: 6,
      description_combo:
        "1 Canchita Grande (Dulce) + 2 Bebidas Medianas (21 oz). *Sabor gaseosa sujeto a stock del cine",
      name_combo: "Combo de Película OL CC Dulce",
      price_combo: 30.5,
    },
  ];
  export const initialFoods: Food[] = [
    {
      id_food: 1,
      name_food: "Canchita Gigante Mix",
      description_food:
        "La mejor opción para compartir en pareja. *Canchita sin refill",
      stock_food: 90,
      price_food: 26,
      type_food: "snack",
    },
    {
      id_food: 2,
      name_food: "Canchita Gigante Dulce",
      description_food:
        "La mejor opción para compartir en pareja. *Canchita sin refill",
      stock_food: 90,
      price_food: 24,
      type_food: "snack",
    },
    {
      id_food: 3,
      name_food: "Canchita Gigante",
      description_food:
        "La mejor opción para compartir en pareja. *Canchita sin refill",
      stock_food: 90,
      price_food: 20,
      type_food: "snack",
    },
    {
      id_food: 4,
      name_food: "CCBebida Mediana OL",
      description_food:
        "21 oz de puro y refrescante sabor *Sabor gaseosa sujeto a stock del cine.",
      stock_food: 50,
      price_food: 12.5,
      type_food: "bebida",
    },
    {
      id_food: 5,
      name_food: "CCBebida Grande OL",
      description_food:
        "Refréscate con 32 oz de tu bebida favorita *Sabor gaseosa sujeto a stock del cine.",
      stock_food: 50,
      price_food: 14,
      type_food: "bebida",
    },
    {
      id_food: 6,
      name_food: "Agua San Luis sin gas",
      description_food: "",
      stock_food: 50,
      price_food: 5,
      type_food: "bebida",
    },
  ];
  export const initialValueSeats: Seat[] = [
    {
      id_seat: 1,
      id_sala: 2,
      row_asiento: "A",
      column_asiento: 1,
      status_asiento: "available",
    },
    {
      id_seat: 2,
      id_sala: 2,
      row_asiento: "A",
      column_asiento: 2,
      status_asiento: "occupied",
    },
    {
      id_seat: 3,
      id_sala: 2,
      row_asiento: "A",
      column_asiento: 3,
      status_asiento: "available",
    },
    {
      id_seat: 4,
      id_sala: 2,
      row_asiento: "A",
      column_asiento: 4,
      status_asiento: "available",
    },
    {
      id_seat: 5,
      id_sala: 2,
      row_asiento: "A",
      column_asiento: 5,
      status_asiento: "available",
    },
    {
      id_seat: 6,
      id_sala: 2,
      row_asiento: "A",
      column_asiento: 6,
      status_asiento: "available",
    },
    {
      id_seat: 7,
      id_sala: 2,
      row_asiento: "A",
      column_asiento: 7,
      status_asiento: "available",
    },
    {
      id_seat: 8,
      id_sala: 2,
      row_asiento: "A",
      column_asiento: 8,
      status_asiento: "occupied",
    },
    {
      id_seat: 9,
      id_sala: 2,
      row_asiento: "A",
      column_asiento: 9,
      status_asiento: "available",
    },
    {
      id_seat: 10,
      id_sala: 2,
      row_asiento: "A",
      column_asiento: 10,
      status_asiento: "available",
    },
    {
      id_seat: 11,
      id_sala: 2,
      row_asiento: "A",
      column_asiento: 11,
      status_asiento: "available",
    },
    {
      id_seat: 12,
      id_sala: 2,
      row_asiento: "B",
      column_asiento: 1,
      status_asiento: "available",
    },
    {
      id_seat: 13,
      id_sala: 2,
      row_asiento: "B",
      column_asiento: 2,
      status_asiento: "occupied",
    },
    {
      id_seat: 14,
      id_sala: 2,
      row_asiento: "B",
      column_asiento: 3,
      status_asiento: "available",
    },
    {
      id_seat: 15,
      id_sala: 2,
      row_asiento: "B",
      column_asiento: 4,
      status_asiento: "available",
    },
    {
      id_seat: 16,
      id_sala: 2,
      row_asiento: "B",
      column_asiento: 5,
      status_asiento: "available",
    },
    {
      id_seat: 17,
      id_sala: 2,
      row_asiento: "B",
      column_asiento: 6,
      status_asiento: "available",
    },
    {
      id_seat: 18,
      id_sala: 2,
      row_asiento: "B",
      column_asiento: 7,
      status_asiento: "available",
    },
    {
      id_seat: 19,
      id_sala: 2,
      row_asiento: "B",
      column_asiento: 8,
      status_asiento: "occupied",
    },
    {
      id_seat: 20,
      id_sala: 2,
      row_asiento: "B",
      column_asiento: 9,
      status_asiento: "available",
    },
    {
      id_seat: 21,
      id_sala: 2,
      row_asiento: "B",
      column_asiento: 10,
      status_asiento: "available",
    },
    {
      id_seat: 22,
      id_sala: 2,
      row_asiento: "B",
      column_asiento: 11,
      status_asiento: "available",
    },
    {
      id_seat: 23,
      id_sala: 2,
      row_asiento: "C",
      column_asiento: 1,
      status_asiento: "available",
    },
    {
      id_seat: 24,
      id_sala: 2,
      row_asiento: "C",
      column_asiento: 2,
      status_asiento: "occupied",
    },
    {
      id_seat: 25,
      id_sala: 2,
      row_asiento: "C",
      column_asiento: 3,
      status_asiento: "available",
    },
    {
      id_seat: 26,
      id_sala: 2,
      row_asiento: "C",
      column_asiento: 4,
      status_asiento: "available",
    },
    {
      id_seat: 27,
      id_sala: 2,
      row_asiento: "C",
      column_asiento: 5,
      status_asiento: "available",
    },
    {
      id_seat: 28,
      id_sala: 2,
      row_asiento: "C",
      column_asiento: 6,
      status_asiento: "available",
    },
    {
      id_seat: 29,
      id_sala: 2,
      row_asiento: "C",
      column_asiento: 7,
      status_asiento: "available",
    },
    {
      id_seat: 30,
      id_sala: 2,
      row_asiento: "C",
      column_asiento: 8,
      status_asiento: "occupied",
    },
    {
      id_seat: 31,
      id_sala: 2,
      row_asiento: "C",
      column_asiento: 9,
      status_asiento: "available",
    },
    {
      id_seat: 32,
      id_sala: 2,
      row_asiento: "C",
      column_asiento: 10,
      status_asiento: "available",
    },
    {
      id_seat: 33,
      id_sala: 2,
      row_asiento: "C",
      column_asiento: 11,
      status_asiento: "available",
    },
    {
      id_seat: 34,
      id_sala: 2,
      row_asiento: "D",
      column_asiento: 1,
      status_asiento: "available",
    },
    {
      id_seat: 35,
      id_sala: 2,
      row_asiento: "D",
      column_asiento: 2,
      status_asiento: "occupied",
    },
    {
      id_seat: 36,
      id_sala: 2,
      row_asiento: "D",
      column_asiento: 3,
      status_asiento: "available",
    },
    {
      id_seat: 37,
      id_sala: 2,
      row_asiento: "D",
      column_asiento: 4,
      status_asiento: "available",
    },
    {
      id_seat: 38,
      id_sala: 2,
      row_asiento: "D",
      column_asiento: 5,
      status_asiento: "available",
    },
    {
      id_seat: 39,
      id_sala: 2,
      row_asiento: "D",
      column_asiento: 6,
      status_asiento: "available",
    },
    {
      id_seat: 40,
      id_sala: 2,
      row_asiento: "D",
      column_asiento: 7,
      status_asiento: "available",
    },
    {
      id_seat: 41,
      id_sala: 2,
      row_asiento: "D",
      column_asiento: 8,
      status_asiento: "occupied",
    },
    {
      id_seat: 42,
      id_sala: 2,
      row_asiento: "D",
      column_asiento: 9,
      status_asiento: "available",
    },
    {
      id_seat: 43,
      id_sala: 2,
      row_asiento: "D",
      column_asiento: 10,
      status_asiento: "available",
    },
    {
      id_seat: 44,
      id_sala: 2,
      row_asiento: "D",
      column_asiento: 11,
      status_asiento: "available",
    },
    {
      id_seat: 45,
      id_sala: 2,
      row_asiento: "E",
      column_asiento: 1,
      status_asiento: "available",
    },
    {
      id_seat: 46,
      id_sala: 2,
      row_asiento: "E",
      column_asiento: 2,
      status_asiento: "occupied",
    },
    {
      id_seat: 47,
      id_sala: 2,
      row_asiento: "E",
      column_asiento: 3,
      status_asiento: "available",
    },
    {
      id_seat: 48,
      id_sala: 2,
      row_asiento: "E",
      column_asiento: 4,
      status_asiento: "available",
    },
    {
      id_seat: 49,
      id_sala: 2,
      row_asiento: "E",
      column_asiento: 5,
      status_asiento: "available",
    },
    {
      id_seat: 50,
      id_sala: 2,
      row_asiento: "E",
      column_asiento: 6,
      status_asiento: "available",
    },
    {
      id_seat: 51,
      id_sala: 2,
      row_asiento: "E",
      column_asiento: 7,
      status_asiento: "available",
    },
    {
      id_seat: 52,
      id_sala: 2,
      row_asiento: "E",
      column_asiento: 8,
      status_asiento: "occupied",
    },
    {
      id_seat: 53,
      id_sala: 2,
      row_asiento: "E",
      column_asiento: 9,
      status_asiento: "available",
    },
    {
      id_seat: 54,
      id_sala: 2,
      row_asiento: "E",
      column_asiento: 10,
      status_asiento: "available",
    },
    {
      id_seat: 55,
      id_sala: 2,
      row_asiento: "E",
      column_asiento: 11,
      status_asiento: "available",
    },
    {
      id_seat: 56,
      id_sala: 2,
      row_asiento: "F",
      column_asiento: 1,
      status_asiento: "available",
    },
    {
      id_seat: 57,
      id_sala: 2,
      row_asiento: "F",
      column_asiento: 2,
      status_asiento: "occupied",
    },
    {
      id_seat: 58,
      id_sala: 2,
      row_asiento: "F",
      column_asiento: 3,
      status_asiento: "available",
    },
    {
      id_seat: 59,
      id_sala: 2,
      row_asiento: "F",
      column_asiento: 4,
      status_asiento: "available",
    },
    {
      id_seat: 60,
      id_sala: 2,
      row_asiento: "F",
      column_asiento: 5,
      status_asiento: "available",
    },
    {
      id_seat: 61,
      id_sala: 2,
      row_asiento: "F",
      column_asiento: 6,
      status_asiento: "available",
    },
    {
      id_seat: 62,
      id_sala: 2,
      row_asiento: "F",
      column_asiento: 7,
      status_asiento: "available",
    },
    {
      id_seat: 63,
      id_sala: 2,
      row_asiento: "F",
      column_asiento: 8,
      status_asiento: "occupied",
    },
    {
      id_seat: 64,
      id_sala: 2,
      row_asiento: "F",
      column_asiento: 9,
      status_asiento: "available",
    },
    {
      id_seat: 65,
      id_sala: 2,
      row_asiento: "F",
      column_asiento: 10,
      status_asiento: "available",
    },
    {
      id_seat: 66,
      id_sala: 2,
      row_asiento: "F",
      column_asiento: 11,
      status_asiento: "available",
    },
    {
      id_seat: 67,
      id_sala: 2,
      row_asiento: "G",
      column_asiento: 1,
      status_asiento: "available",
    },
    {
      id_seat: 68,
      id_sala: 2,
      row_asiento: "G",
      column_asiento: 2,
      status_asiento: "occupied",
    },
    {
      id_seat: 69,
      id_sala: 2,
      row_asiento: "G",
      column_asiento: 3,
      status_asiento: "available",
    },
    {
      id_seat: 70,
      id_sala: 2,
      row_asiento: "G",
      column_asiento: 4,
      status_asiento: "available",
    },
    {
      id_seat: 71,
      id_sala: 2,
      row_asiento: "G",
      column_asiento: 5,
      status_asiento: "available",
    },
    {
      id_seat: 72,
      id_sala: 2,
      row_asiento: "G",
      column_asiento: 6,
      status_asiento: "available",
    },
    {
      id_seat: 73,
      id_sala: 2,
      row_asiento: "G",
      column_asiento: 7,
      status_asiento: "available",
    },
    {
      id_seat: 74,
      id_sala: 2,
      row_asiento: "G",
      column_asiento: 8,
      status_asiento: "occupied",
    },
    {
      id_seat: 75,
      id_sala: 2,
      row_asiento: "G",
      column_asiento: 9,
      status_asiento: "available",
    },
    {
      id_seat: 76,
      id_sala: 2,
      row_asiento: "G",
      column_asiento: 10,
      status_asiento: "available",
    },
    {
      id_seat: 77,
      id_sala: 2,
      row_asiento: "G",
      column_asiento: 11,
      status_asiento: "available",
    },
    {
      id_seat: 78,
      id_sala: 2,
      row_asiento: "H",
      column_asiento: 1,
      status_asiento: "available",
    },
    {
      id_seat: 79,
      id_sala: 2,
      row_asiento: "H",
      column_asiento: 2,
      status_asiento: "occupied",
    },
    {
      id_seat: 80,
      id_sala: 2,
      row_asiento: "H",
      column_asiento: 3,
      status_asiento: "available",
    },
    {
      id_seat: 81,
      id_sala: 2,
      row_asiento: "H",
      column_asiento: 4,
      status_asiento: "available",
    },
    {
      id_seat: 82,
      id_sala: 2,
      row_asiento: "H",
      column_asiento: 5,
      status_asiento: "available",
    },
    {
      id_seat: 83,
      id_sala: 2,
      row_asiento: "H",
      column_asiento: 6,
      status_asiento: "available",
    },
    {
      id_seat: 84,
      id_sala: 2,
      row_asiento: "H",
      column_asiento: 7,
      status_asiento: "available",
    },
    {
      id_seat: 85,
      id_sala: 2,
      row_asiento: "H",
      column_asiento: 8,
      status_asiento: "occupied",
    },
    {
      id_seat: 86,
      id_sala: 2,
      row_asiento: "H",
      column_asiento: 9,
      status_asiento: "available",
    },
    {
      id_seat: 87,
      id_sala: 2,
      row_asiento: "H",
      column_asiento: 10,
      status_asiento: "available",
    },
    {
      id_seat: 88,
      id_sala: 2,
      row_asiento: "H",
      column_asiento: 11,
      status_asiento: "available",
    },
    {
      id_seat: 89,
      id_sala: 2,
      row_asiento: "I",
      column_asiento: 1,
      status_asiento: "available",
    },
    {
      id_seat: 90,
      id_sala: 2,
      row_asiento: "I",
      column_asiento: 2,
      status_asiento: "occupied",
    },
    {
      id_seat: 91,
      id_sala: 2,
      row_asiento: "I",
      column_asiento: 3,
      status_asiento: "available",
    },
    {
      id_seat: 92,
      id_sala: 2,
      row_asiento: "I",
      column_asiento: 4,
      status_asiento: "available",
    },
    {
      id_seat: 93,
      id_sala: 2,
      row_asiento: "I",
      column_asiento: 5,
      status_asiento: "available",
    },
    {
      id_seat: 94,
      id_sala: 2,
      row_asiento: "I",
      column_asiento: 6,
      status_asiento: "available",
    },
    {
      id_seat: 95,
      id_sala: 2,
      row_asiento: "I",
      column_asiento: 7,
      status_asiento: "available",
    },
    {
      id_seat: 96,
      id_sala: 2,
      row_asiento: "I",
      column_asiento: 8,
      status_asiento: "occupied",
    },
    {
      id_seat: 97,
      id_sala: 2,
      row_asiento: "I",
      column_asiento: 9,
      status_asiento: "available",
    },
    {
      id_seat: 98,
      id_sala: 2,
      row_asiento: "I",
      column_asiento: 10,
      status_asiento: "available",
    },
    {
      id_seat: 99,
      id_sala: 2,
      row_asiento: "I",
      column_asiento: 11,
      status_asiento: "available",
    },
    {
      id_seat: 100,
      id_sala: 2,
      row_asiento: "J",
      column_asiento: 1,
      status_asiento: "available",
    },
    {
      id_seat: 101,
      id_sala: 2,
      row_asiento: "J",
      column_asiento: 2,
      status_asiento: "occupied",
    },
    {
      id_seat: 102,
      id_sala: 2,
      row_asiento: "J",
      column_asiento: 3,
      status_asiento: "available",
    },
    {
      id_seat: 103,
      id_sala: 2,
      row_asiento: "J",
      column_asiento: 4,
      status_asiento: "available",
    },
    {
      id_seat: 104,
      id_sala: 2,
      row_asiento: "J",
      column_asiento: 5,
      status_asiento: "available",
    },
    {
      id_seat: 105,
      id_sala: 2,
      row_asiento: "J",
      column_asiento: 6,
      status_asiento: "available",
    },
    {
      id_seat: 106,
      id_sala: 2,
      row_asiento: "J",
      column_asiento: 7,
      status_asiento: "available",
    },
    {
      id_seat: 107,
      id_sala: 2,
      row_asiento: "J",
      column_asiento: 8,
      status_asiento: "occupied",
    },
    {
      id_seat: 108,
      id_sala: 2,
      row_asiento: "J",
      column_asiento: 9,
      status_asiento: "available",
    },
    {
      id_seat: 109,
      id_sala: 2,
      row_asiento: "J",
      column_asiento: 10,
      status_asiento: "available",
    },
    {
      id_seat: 110,
      id_sala: 2,
      row_asiento: "J",
      column_asiento: 11,
      status_asiento: "available",
    },
    {
      id_seat: 111,
      id_sala: 2,
      row_asiento: "K",
      column_asiento: 1,
      status_asiento: "available",
    },
    {
      id_seat: 112,
      id_sala: 2,
      row_asiento: "K",
      column_asiento: 2,
      status_asiento: "occupied",
    },
    {
      id_seat: 113,
      id_sala: 2,
      row_asiento: "K",
      column_asiento: 3,
      status_asiento: "available",
    },
    {
      id_seat: 114,
      id_sala: 2,
      row_asiento: "K",
      column_asiento: 4,
      status_asiento: "available",
    },
    {
      id_seat: 115,
      id_sala: 2,
      row_asiento: "K",
      column_asiento: 5,
      status_asiento: "available",
    },
    {
      id_seat: 116,
      id_sala: 2,
      row_asiento: "K",
      column_asiento: 6,
      status_asiento: "available",
    },
    {
      id_seat: 117,
      id_sala: 2,
      row_asiento: "K",
      column_asiento: 7,
      status_asiento: "available",
    },
    {
      id_seat: 118,
      id_sala: 2,
      row_asiento: "K",
      column_asiento: 8,
      status_asiento: "occupied",
    },
    {
      id_seat: 119,
      id_sala: 2,
      row_asiento: "K",
      column_asiento: 9,
      status_asiento: "available",
    },
    {
      id_seat: 120,
      id_sala: 2,
      row_asiento: "K",
      column_asiento: 10,
      status_asiento: "available",
    },
    {
      id_seat: 121,
      id_sala: 2,
      row_asiento: "K",
      column_asiento: 11,
      status_asiento: "available",
    },
    {
      id_seat: 122,
      id_sala: 2,
      row_asiento: "L",
      column_asiento: 1,
      status_asiento: "available",
    },
    {
      id_seat: 123,
      id_sala: 2,
      row_asiento: "L",
      column_asiento: 2,
      status_asiento: "occupied",
    },
    {
      id_seat: 124,
      id_sala: 2,
      row_asiento: "L",
      column_asiento: 3,
      status_asiento: "available",
    },
    {
      id_seat: 125,
      id_sala: 2,
      row_asiento: "L",
      column_asiento: 4,
      status_asiento: "available",
    },
    {
      id_seat: 126,
      id_sala: 2,
      row_asiento: "L",
      column_asiento: 5,
      status_asiento: "available",
    },
    {
      id_seat: 127,
      id_sala: 2,
      row_asiento: "L",
      column_asiento: 6,
      status_asiento: "available",
    },
    {
      id_seat: 128,
      id_sala: 2,
      row_asiento: "L",
      column_asiento: 7,
      status_asiento: "available",
    },
    {
      id_seat: 129,
      id_sala: 2,
      row_asiento: "L",
      column_asiento: 8,
      status_asiento: "occupied",
    },
    {
      id_seat: 130,
      id_sala: 2,
      row_asiento: "L",
      column_asiento: 9,
      status_asiento: "available",
    },
    {
      id_seat: 131,
      id_sala: 2,
      row_asiento: "L",
      column_asiento: 10,
      status_asiento: "available",
    },
    {
      id_seat: 132,
      id_sala: 2,
      row_asiento: "L",
      column_asiento: 11,
      status_asiento: "available",
    },
  ];

  export const initialTickets: Ticket[] = [
    { id_ticket: 1, type_ticket: "Adulto General", price_ticket: 20 },
    { id_ticket: 2, type_ticket: "Niño General", price_ticket: 10 },
    { id_ticket: 3, type_ticket: "Mayor 65", price_ticket: 12 },
  ];