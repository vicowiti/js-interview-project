import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getStaff,
  patchResource,
  staffSelector,
} from "../../features/StaffSlice";
import "./Editform.css";

const EditForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(staffSelector);

  const singleEmployee = data.staff?.find((person) => person._id === id);

  const [name, setName] = useState(singleEmployee?.name);
  const [email, setEmail] = useState(singleEmployee?.email);
  const [occupation, setOccupation] = useState(singleEmployee?.occupation);
  const [bio, setBio] = useState(singleEmployee?.bio);

  const handleEdit = async (e) => {
    e.preventDefault();

    if (name && email && occupation && bio) {
      await dispatch(
        patchResource({
          _id: id,
          name,
          email,
          occupation,
          bio,
        })
      );
      dispatch(getStaff());
    }
  };
  return (
    <div className="editform">
      <button onClick={() => navigate("/")} className="back-btn">
        Back
      </button>
      <form onSubmit={handleEdit}>
        <h2>Edit Details</h2>
        <h5>Id: {id}</h5>
        <div className="form-sgt">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-sgt">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-sgt">
          <label>Occupation</label>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </div>
        <div className="form-sgt">
          <label>Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={12}
          ></textarea>
        </div>

        <button className="edit-btn" type="submit">
          Change
        </button>
      </form>
    </div>
  );
};

export default EditForm;
