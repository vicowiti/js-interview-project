import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getStaff,
  patchResource,
  staffSelector,
} from "../../features/StaffSlice";
import "./Editform.css";
import Loader from "../Loader/Loader.jsx";

const EditForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector(staffSelector);

  const singleEmployee = data.staff?.find((person) => person.id === id);

  const [name, setName] = useState(singleEmployee?.name);
  const [email, setEmail] = useState(singleEmployee?.email);
  const [occupation, setOccupation] = useState(singleEmployee?.occupation);
  const [bio, setBio] = useState(singleEmployee?.bio);
  const [loading, setLoading] = useState(false);
  const [stateMsg, setStateMsg] = useState("");

  //Checks what fields have been altered
  // function myDiff(myName, myEmail, MyOcc, myBio) {
  //   const myObj = { id: singleEmployee.id };
  //   if (myName !== singleEmployee.name) {
  //     myObj.name = myName;
  //   }
  //   if (myEmail !== singleEmployee.email) {
  //     myObj.email = myEmail;
  //   }
  //   if (MyOcc !== singleEmployee.occupation) {
  //     myObj.occupation = MyOcc;
  //   }
  //   if (myBio !== singleEmployee.bio) {
  //     myObj.bio = myBio;
  //   }
  //   return myObj;
  // }

  const handleEdit = async (e) => {
    e.preventDefault();

    // const myChangedData = myDiff(name, email, occupation, bio);

    if (name && email && occupation && bio) {
      setLoading(true);
      setStateMsg("Loading...");
      //To send only changed data => returns a 500
      // const response = await dispatch(patchResource(myData));
      const response = await dispatch(
        patchResource({
          id,
          name,
          email,
          occupation,
          bio,
        })
      );
      console.log(response);
      if (response.type === "staff/patchResource/fulfilled") {
        dispatch(getStaff());
        setStateMsg("Changed Successfully!");
        setLoading(false);
        navigate("/");
      }
    }
  };
  return (
    <div className="form-container">
      {loading && <Loader loadingMsg={stateMsg} />}
      {
        <div className="editform">
          <button onClick={() => navigate("/")} className="back-btn">
            Back
          </button>
          <form onSubmit={handleEdit}>
            <h2>Edit Details</h2>
            <h5>Id: {id}</h5>
            <div className="form-sgt">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-sgt">
              <label htmlFor="email">Email</label>
              <input
                required
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-sgt">
              <label htmlFor="occupation">Occupation</label>
              <input
                name="name"
                required
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>
            <div className="form-sgt">
              <label htmlFor="bio">Bio</label>
              <textarea
                name="bio"
                required
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={8}
              ></textarea>
            </div>

            <button className="edit-btn" type="submit">
              Change
            </button>
          </form>
          {(!name || !email || !occupation || !bio) && (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "red",
                fontWeight: "bold",
              }}
            >
              Please fill all the fields
            </p>
          )}
        </div>
      }
    </div>
  );
};

export default EditForm;
