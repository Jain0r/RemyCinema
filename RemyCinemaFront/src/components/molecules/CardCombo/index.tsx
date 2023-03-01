import React from "react";
import { Combo } from "../../../interfaces";
import foodimage from "../../../assets/food.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  addCombo,
  removeCombo,
  setCantCombo,
} from "../../../redux/actions/shopActions";
import { totalCantCombos, totalCantFoods } from "../../../functions";

interface CardComboProps {
  data: Combo;
}
const CardCombo = ({ data }: CardComboProps) => {
  const { selectedCombos, selectedFoods } = useSelector(
    (state: any) => state.shop
  );
  const dispatch = useDispatch();

  const getCurrentCant = (id: number) => {
    const isOnShop = selectedCombos.find(
      (combo: Combo) => combo.id_combo === id
    );
    if (isOnShop) {
      return isOnShop.cant_combo;
    } else {
      return 0;
    }
  };

  const handleMinusCant = (id: number, cant: number) => {
    if (getCurrentCant(id) > 1) {
      dispatch(setCantCombo(id, getCurrentCant(id) - cant));
    } else {
      dispatch(removeCombo(id));
    }
  };
  const handlePlusCant = (id: number, cant: number) => {
    if (getCurrentCant(id) !== 0) {
      dispatch(setCantCombo(id, getCurrentCant(id) + cant));
    } else {
      dispatch(addCombo(data));
    }
  };
  return (
    <div className="cardfood_container">
      <div className="cardfood_main">
        <div className="cardfood_image">
          <img src={foodimage}></img>
        </div>
        <div className="cardfood_layout">
          <strong>{data?.name_combo}</strong>
          <p>{data?.description_combo}</p>
        </div>
        <div className="cardfood_buttons">
          <div className="cardfood_buttons_options">
            <button
              disabled={getCurrentCant(data?.id_combo) === 0 && true}
              onClick={() => handleMinusCant(data?.id_combo, 1)}
              type="button"
            >
              -
            </button>
            <span>{getCurrentCant(data?.id_combo)}</span>
            <button
              onClick={() => handlePlusCant(data?.id_combo, 1)}
              disabled={
                totalCantCombos(selectedCombos) +
                  totalCantFoods(selectedFoods) >=
                  10 && true
              }
              type="button"
            >
              +
            </button>
          </div>
          <p>S/{data?.price_combo.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCombo;
