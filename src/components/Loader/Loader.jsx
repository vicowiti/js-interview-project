import React from "react";
import { ImSpinner9 } from "react-icons/im";
import "./Loader.css";
import { BiErrorAlt } from "react-icons/bi";

const Loader = ({ loadingMsg, errorState }) => {
  return (
    <div className="loader">
      <div className="spinner">
        <div className="loadmsg">
          <ImSpinner9 size={50} color="turquoise" className="spinner-child" />
          {errorState ? (
            <p
              style={{
                color: "red",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              Error <BiErrorAlt size={30} />
            </p>
          ) : (
            <p>{loadingMsg}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;
