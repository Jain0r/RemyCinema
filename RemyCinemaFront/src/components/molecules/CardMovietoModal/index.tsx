import React, { useState } from "react";
import { POSTER_PATH } from "../../../Api/config";
import { MovieByQuery } from "../../../interfaces";
import "./index.scss";

interface CardMovieToModalProps {
  data: MovieByQuery;
  openModal(dataMovie: MovieByQuery): void;
  isSelected?: boolean;
}

const CardMovieToModal = ({
  data,
  openModal,
  isSelected,
}: CardMovieToModalProps) => {
  return (
    <div
      className={
        isSelected ? "card_movie_detail selected" : "card_movie_detail"
      }
    >
      <img
        className={isSelected ? "selected" : ""}
        onClick={() => openModal(data)}
        src={`${POSTER_PATH}/${data.poster_path}`}
        alt={data.title}
      ></img>
    </div>
  );
};

export default CardMovieToModal;
