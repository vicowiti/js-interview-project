import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getStaff, staffSelector } from "../features/StaffSlice";
import Loader from "./Loader/Loader";

const StaffList = () => {
  const dispatch = useDispatch();
  const data = useSelector(staffSelector);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getStaff());
  }, [dispatch]);
  return (
    <div>
      {data.staff.length > 1 ? (
        data.staff?.map((person) => (
          <article key={person._id} onClick={() => navigate(`/${person._id}`)}>
            <h1>{person.name}</h1>
            <h3>{person.email}</h3>
            <h3>{person.occupation}</h3>
            <p>{person.bio}</p>
          </article>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default StaffList;
