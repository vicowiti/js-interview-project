import React from "react";
import { ImSpinner9 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner">
        <ImSpinner9 size={35} color="turquoise" />
      </div>
    </div>
  );
};

export default Loader;
