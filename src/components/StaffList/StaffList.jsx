import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getStaff, staffSelector } from "../../features/StaffSlice";
import Loader from "../Loader/Loader";
import "./StaffList.css";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GiSpanner } from "react-icons/gi";
import { AiOutlineEdit } from "react-icons/ai";

const StaffList = () => {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();
  const data = useSelector(staffSelector);
  const navigate = useNavigate();

  const searchedList = data.staff?.filter(
    (item) =>
      item.name.toLowerCase().includes(searchName.toLowerCase()) ||
      item.email.toLowerCase().includes(searchName.toLowerCase())
  );

  useEffect(() => {
    dispatch(getStaff());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="search">
        <input
          type="search"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Search by name or email..."
        />
      </div>
      <div
        className="cards-parent"
        style={{ display: data.staff.length > 1 && "grid" }}
      >
        {data.staff.length > 1 ? (
          searchedList?.map((person) => (
            <article className="person-card" key={person._id}>
              <div className="bio-header">
                <div className="card-header">
                  <BsFillPersonFill title="Name" size={20} />
                  <p>{person.name}</p>
                </div>
                <div className="card-header">
                  <HiOutlineMail title="Email" size={20} />
                  <p>{person.email}</p>
                </div>
                <div className="card-header">
                  <GiSpanner title="Occupation" size={20} />
                  <p>{person.occupation}</p>
                </div>
              </div>
              <div className="bio-div">
                <h5>Bio:</h5>
                <p>{person.bio}</p>
              </div>
              <div className="editbtn-div">
                <button
                  className="editbtn"
                  onClick={() => navigate(`/${person._id}`)}
                >
                  <AiOutlineEdit />
                  Edit
                </button>
              </div>
            </article>
          ))
        ) : (
          <Loader loadingMsg="Loading..." errorState={data.isError} />
        )}
      </div>
    </div>
  );
};

export default StaffList;
