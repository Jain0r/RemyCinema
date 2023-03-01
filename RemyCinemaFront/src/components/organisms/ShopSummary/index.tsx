import { useSelector } from "react-redux";
import {
  totalPriceCombos,
  totalPriceFoods,
  totalPriceTickets,
} from "../../../functions";
import { Combo, Food, Seat, Ticket } from "../../../interfaces";
import ModalLayout from "../../molecules/ModalLayout";
import "./index.scss";

interface ShopSummaryProps {
  closeSummary(): void;
  isOpen: boolean;
}

const ShopSummary = ({ closeSummary, isOpen }: ShopSummaryProps) => {
  const { selectedSeats, selectedTickets, selectedFoods, selectedCombos } =
    useSelector((state: any) => state.shop);

  const allSeatsSelectedInfo = selectedSeats.reduce(
    (accumulator: Array<string>, currentSeat: Seat) => [
      ...accumulator,
      currentSeat.row_asiento + currentSeat.column_asiento,
    ],
    []
  );

  return (
    <ModalLayout
      title="Resumen de Compra"
      onClose={() => closeSummary()}
      isOpen={isOpen}
      maxWidth={480}
    >
      <div className="shopsummary_main">
        <div className="shopsummary_items">
          {selectedSeats?.length > 0 ? (
            <div className="shopsummary_item">
              <p className="shopsummary_category">Butacas Seleccinadas:</p>
              <div className="shopsummary_container">
                <p>{allSeatsSelectedInfo?.join(", ")}</p>
                <p>Cant. {selectedSeats?.length}</p>
              </div>
            </div>
          ) : null}
          {selectedTickets?.length > 0 ? (
            <div className="shopsummary_item">
              <p className="shopsummary_category">Entradas:</p>
              {selectedTickets?.map((ticket: Ticket) => {
                return (
                  <div
                    key={ticket?.id_ticket}
                    className="shopsummary_container"
                  >
                    <p>{ticket?.type_ticket}</p>
                    <p>Cant. {ticket?.cant_ticket}</p>
                    <p>
                      S/.
                      {ticket?.cant_ticket
                        ? (ticket?.cant_ticket * ticket?.price_ticket).toFixed(
                            2
                          )
                        : null}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : null}
          {selectedFoods?.length > 0 || selectedCombos?.length > 0 ? (
            <div className="shopsummary_item">
              <p className="shopsummary_category">Comidas:</p>
              {selectedFoods?.map((food: Food) => {
                return (
                  <div key={food?.id_food} className="shopsummary_container">
                    <p>{food?.name_food}</p>
                    <p>Cant. {food?.cant_food}</p>
                    <p>
                      S/.
                      {food?.cant_food
                        ? (food?.cant_food * food?.price_food).toFixed(2)
                        : null}
                    </p>
                  </div>
                );
              })}
              {selectedCombos?.map((combo: Combo) => {
                return (
                  <div key={combo?.id_combo} className="shopsummary_container">
                    <p>{combo?.name_combo}</p>
                    <p>Cant. {combo?.cant_combo}</p>
                    <p>
                      S/.
                      {combo?.cant_combo
                        ? (combo?.cant_combo * combo?.price_combo).toFixed(2)
                        : null}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <p className="shopsummary_total_order_price">
          Total S/.
          {(
            totalPriceTickets(selectedTickets) +
            totalPriceCombos(selectedCombos) +
            totalPriceFoods(selectedFoods)
          ).toFixed(2)}
        </p>
      </div>
    </ModalLayout>
  );
};

export default ShopSummary;
