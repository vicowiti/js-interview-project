import React from "react";

const StaffCard = (person) => {
  return (
    <article>
      <h1>{person.name}</h1>
      <h3>{person.email}</h3>
      <h3>{person.occupation}</h3>
      <p>{person.bio}</p>
    </article>
  );
};

export default StaffCard;
