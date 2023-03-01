import React from "react";
import Button from "../../atoms/Button";
import { HiOutlineTicket } from "react-icons/hi";
import "./index.scss";

interface CardSliderProps {
  title?: string;
  description?: string;
  backGroundImage: string;
  isBuyable?: boolean;
}

const CardSlider = ({
  title,
  description,
  backGroundImage,
  isBuyable,
}: CardSliderProps) => {
  return (
    <div
      className="card_slider_container"
      style={{ backgroundImage: `url(${backGroundImage})` }}
    >
      <div className="card_slider_main">
        <div className="card_slider_layout">
          {title ? <p className="card_slider_title">{title}</p> : ""}
          {description ? (
            <p className="card_slider_description">{description}</p>
          ) : null}
          {isBuyable ? (
            <Button
              icon={<HiOutlineTicket />}
              type="button"
              onClick={() => console.log("aea")}
              className="fifth_button"
              text="Comprar"
            ></Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
