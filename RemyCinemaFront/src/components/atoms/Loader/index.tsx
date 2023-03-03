import React from "react";
import "./index.scss";

const Loader = () => {
  return (
    <div className="loader_container">
      <div className="loader">
        <div className="loader__filmstrip"></div>
        <p className="loader__text">loading</p>
      </div>
    </div>
  );
};

export default Loader;
