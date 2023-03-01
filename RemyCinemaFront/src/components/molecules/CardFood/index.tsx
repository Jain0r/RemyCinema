import React from "react";
import { useDispatch, useSelector } from "react-redux";
import foodimage from "../../../assets/food.jpg";
import { totalCantCombos, totalCantFoods } from "../../../functions";
import { Food } from "../../../interfaces";
import {
  addFood,
  removeFood,
  setCantFood,
} from "../../../redux/actions/shopActions";
import "./index.scss";

interface CardFoodProps {
  data: Food;
}

const CardFood = ({ data }: CardFoodProps) => {
  const { selectedFoods, selectedCombos } = useSelector(
    (state: any) => state.shop
  );
  const dispatch = useDispatch();

  const getCurrentCant = (id: number) => {
    const isOnShop = selectedFoods.find((food: Food) => food.id_food === id);
    if (isOnShop) {
      return isOnShop.cant_food;
    } else {
      return 0;
    }
  };

  const handleMinusCant = (id: number, cant: number) => {
    if (getCurrentCant(id) > 1) {
      dispatch(setCantFood(id, getCurrentCant(id) - cant));
    } else {
      dispatch(removeFood(id));
    }
  };
  const handlePlusCant = (id: number, cant: number) => {
    if (getCurrentCant(id) !== 0) {
      dispatch(setCantFood(id, getCurrentCant(id) + cant));
    } else {
      dispatch(addFood(data));
    }
  };

  return (
    <div className="cardfood_container">
      <div className="cardfood_main">
        <div className="cardfood_image">
          <img src={foodimage}></img>
        </div>
        <div className="cardfood_layout">
          <strong>{data?.name_food}</strong>
          <p>{data?.description_food}</p>
        </div>
        <div className="cardfood_buttons">
          <div className="cardfood_buttons_options">
            <button
              disabled={getCurrentCant(data?.id_food) === 0 && true}
              onClick={() => handleMinusCant(data?.id_food, 1)}
              type="button"
            >
              -
            </button>
            <span>{getCurrentCant(data?.id_food)}</span>
            <button
              onClick={() => handlePlusCant(data?.id_food, 1)}
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
          <p>S/{data?.price_food.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFood;
