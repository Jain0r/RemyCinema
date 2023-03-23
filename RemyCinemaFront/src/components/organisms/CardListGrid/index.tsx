import React from "react";
import { movieRCFormat } from "../../../interfaces";
import CardMovie from "../../molecules/CardMovie";
import Button from "../../atoms/Button";
import "./index.scss";

interface CardListGridProps {
  data: movieRCFormat[];
  title: string;
  onSeeMore?(): void;
}

const CardListGrid = ({ title, onSeeMore, data }: CardListGridProps) => {
  return (
    <div className="movies_list_grid_container section">
      {title ? <p className="movies_list_grid_title  ">{title}</p> : null}
      <div className="movies_grid_slider ">
        {/* {data
          ? data.map((movieItem) => {
              return <CardMovie key={movieItem?.id_movie} data={movieItem} />;
            })
          : null} */}
        {data
          ? data.map((movieItem: any) => {
              return <CardMovie key={movieItem?.id} data={movieItem} />;
            })
          : null}
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
