import React from "react";
import { movieRCFormat } from "../../../interfaces";
import CardMovie from "../../molecules/CardMovie";
import Button from "../../atoms/Button";
import "./index.scss";

interface CardListGridProps {
  data?: movieRCFormat[];
  title: string;
  onSeeMore?(): void;
}

const CardListGrid = ({ title, onSeeMore }: CardListGridProps) => {
  return (
    <div className="movies_list_grid_container section">
      {title ? <p className="movies_list_grid_title  ">{title}</p> : null}
      <div className="movies_grid_slider ">
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <Button
          type="button"
          onClick={() => console.log("hola")}
          className="fifth_button"
          text="Ver más"
        ></Button>
      </div>
    </div>
  );
};

export default CardListGrid;
