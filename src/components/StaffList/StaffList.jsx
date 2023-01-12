import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getStaff, staffSelector } from "../../features/StaffSlice";
import Loader from "../Loader/Loader";
import "./StaffList.css";

const StaffList = () => {
  const dispatch = useDispatch();
  const data = useSelector(staffSelector);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getStaff());
  }, [dispatch]);
  return (
    <div
      className="cards-parent"
      style={{ display: data.staff.length > 1 && "grid" }}
    >
      {data.staff.length > 1 ? (
        data.staff?.map((person) => (
          <article className="person-card" key={person._id}>
            <div className="card-header">
              <h3>Name: </h3>
              <p>{person.name}</p>
            </div>
            <div className="card-header">
              <h3>Email: </h3>
              <p>{person.email}</p>
            </div>
            <div className="card-header">
              <h3>Occupation: </h3>
              <p>{person.occupation}</p>
            </div>

            <div>
              <h5>Bio:</h5>
              <p>{person.bio}</p>
            </div>
            <button
              className="editbtn"
              onClick={() => navigate(`/${person._id}`)}
            >
              Edit
            </button>
          </article>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default StaffList;
