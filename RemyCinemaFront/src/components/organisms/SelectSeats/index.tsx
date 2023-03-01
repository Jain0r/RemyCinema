import { Seat } from "../../../interfaces";
import { useSelector, useDispatch } from "react-redux";
import { addSeat, removeSeat } from "../../../redux/actions/shopActions";
import "./index.scss";
import { useState } from "react";
import ModalConfirmAction from "../../molecules/ModalConfirmAction";

interface SelectSeatsProps {
  initialValue: Array<Seat>;
}
const SelectSeats = ({ initialValue }: SelectSeatsProps) => {
  const { selectedSeats } = useSelector((state: any) => state.shop);
  const dispatch = useDispatch();
  const [modalLimitSeats, setModalLimitSeats] = useState<boolean>(false);
  const handleSeat = (seat: Seat) => {
    if (
      selectedSeats?.find(
        (selectedSeat: Seat) => selectedSeat.id_seat === seat.id_seat
      )
    ) {
      dispatch(removeSeat(seat.id_seat));
    } else if (selectedSeats.length > 9) {
      setModalLimitSeats(true);
    } else {
      dispatch(addSeat(seat));
    }
  };

  const allSeatsSelectedInfo = selectedSeats.reduce(
    (accumulator: Array<string>, currentSeat: Seat) => [
      ...accumulator,
      currentSeat.row_asiento + currentSeat.column_asiento,
    ],
    []
  );

  return (
    <div className="proccess_seats_selection">
      <p className="screen_title">Pantalla</p>
      <div className="seat_selection_screen">
        <div className="screen"></div>
        <div className="shadow-screen"></div>
      </div>
      <div className="all_seats_main_info">
        <ul className="list_letter_seats_left">
          {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map(
            (letter) => {
              return <li key={letter}>{letter}</li>;
            }
          )}
        </ul>
        <div className="all_seats_container">
          {initialValue.map((seat) => {
            return (
              <div key={seat?.id_seat} className="seat_container">
                <button
                  onClick={() => handleSeat(seat)}
                  type="button"
                  disabled={seat?.status_asiento !== "available"}
                  className={
                    selectedSeats?.find(
                      (selectedSeat: Seat) =>
                        selectedSeat.id_seat === seat.id_seat
                    )
                      ? "seat selected"
                      : "seat"
                  }
                >
                  {seat?.row_asiento + seat?.column_asiento}
                </button>
              </div>
            );
          })}
        </div>
        <ul className="list_letter_seats_right">
          {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map(
            (letter) => {
              return <li key={letter}>{letter}</li>;
            }
          )}
        </ul>
      </div>
      <ul className="seat_selection_info">
        <li className="available_seat">
          <div className="circle"></div>
          <span>Disponible</span>
        </li>
        <li className="occupied_seat">
          <div className="circle"></div>
          <span>Ocupada</span>
        </li>
        <li className="selected_seat">
          <div className="circle"></div>
          <span>Seleccionada</span>
        </li>
      </ul>
      <div className="selected_seats_info">
        <p>Butacas seleccionadas:</p>
        <p>{allSeatsSelectedInfo?.join(", ")}</p>
      </div>
      <ModalConfirmAction
        isOpen={modalLimitSeats}
        description="El número máximo de asientos por proceso de venta es de 10, si planea comprar mas de este limite, se le recomienda hacerlo por procesos diferentes."
        maxWidth={350}
        onClose={() => setModalLimitSeats(false)}
        title="Limite de asientos sobrepasados"
      />
    </div>
  );
};

export default SelectSeats;
