import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStaff, staffSelector } from "./features/StaffSlice";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(staffSelector);
  useEffect(() => {
    dispatch(getStaff());
  }, [dispatch]);
  console.log(data);
  return <div>App</div>;
};

export default App;
