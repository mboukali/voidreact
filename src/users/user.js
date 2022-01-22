import React from "react";

const User = ({ name, gender, url }) => {
  return (
    <div className="bg-white py-4 px-3 text-black w-96 text-lg">
      <h3>{name}</h3>
      <p>{gender}</p>
      <a href={url}>Lear more</a>
    </div>
  );
};

export default User;
