import React from "react";
import { ImSpinner9 } from "react-icons/im";
import "./Loader.css";
const Loader = ({ loadingMsg }) => {
  return (
    <div className="loader">
      <div className="spinner">
        <div className="loadmsg">
          <ImSpinner9 size={50} color="turquoise" className="spinner-child" />
          <p>{loadingMsg}</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
