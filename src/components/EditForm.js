import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { staffSelector } from "../features/StaffSlice";

const EditForm = () => {
  const { id } = useParams();

  const data = useSelector(staffSelector);

  const singleEmployee = data.staff?.find((person) => person._id === id);

  const [name, setName] = useState(singleEmployee?.name);
  const [email, setEmail] = useState(singleEmployee?.email);
  const [occupation, setOccupation] = useState(singleEmployee?.occupation);
  const [bio, setBio] = useState(singleEmployee.bio);

  const handleEdit = async (e) => {
    e.preventDEfault();
  };
  return (
    <form onSubmit={handleEdit}>
      <h2>Edit Details</h2>
      <h5>Id: {id}</h5>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Occupation</label>
        <input
          type="text"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
      </div>
      <div>
        <label>Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>

      <button type="submit">Change</button>
    </form>
  );
};

export default EditForm;
