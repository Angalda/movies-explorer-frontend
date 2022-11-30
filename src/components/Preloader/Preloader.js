import React from "react";

const Preloader = ({ onClick }) => {
  return (
    <div className="preloader" onClick={onClick}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;