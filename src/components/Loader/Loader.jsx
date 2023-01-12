import React from "react";
import { ImSpinner9 } from "react-icons/im";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner">
        <ImSpinner9 size={50} color="turquoise" className="spinner-child" />
      </div>
    </div>
  );
};

export default Loader;
