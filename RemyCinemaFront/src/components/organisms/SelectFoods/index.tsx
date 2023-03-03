import { useState } from "react";
import { Food } from "../../../interfaces";
import CardCombo from "../../molecules/CardCombo";
import CardFood from "../../molecules/CardFood";
import { initialCombos, initialFoods } from "../../../Api/dataFake";
import "./index.scss";

const SelectFoods = () => {
  const [selectType, setSelectType] = useState<string>("combos");

  const showedProducts = () => {
    if (selectType === "snacks") {
      const foodsbyType = initialFoods?.filter(
        (food: Food) => food?.type_food === "snack"
      );
      return foodsbyType;
    } else if (selectType === "bebidas") {
      const foodsbyType = initialFoods?.filter(
        (food: Food) => food?.type_food === "bebida"
      );
      return foodsbyType;
    } else {
      return initialCombos;
    }
  };

  return (
    <div className="proccess_foods_selection">
      <div className="select_foods_main section">
        <div className="selectfoods_type">
          <ul>
            <li
              onClick={() => setSelectType("snacks")}
              className={selectType === "snacks" ? "active" : ""}
            >
              <span>Snacks</span>
            </li>
            <li
              onClick={() => setSelectType("bebidas")}
              className={selectType === "bebidas" ? "active" : ""}
            >
              <span>Bebidas</span>
            </li>
            <li
              onClick={() => setSelectType("combos")}
              className={selectType === "combos" ? "active" : ""}
            >
              <span>Combos</span>
            </li>
          </ul>
        </div>
        <div className="select_foods_cards_container">
          {showedProducts().map((item: any) => {
            return selectType === "combos" ? (
              <CardCombo key={item.id_combo} data={item} />
            ) : (
              <CardFood key={item.id_food} data={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectFoods;
