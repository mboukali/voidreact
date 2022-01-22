import React from "react";
import User from "./user";

const UserList = ({ users }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {users.map((user, index) => {
        return (
          <div key={index} className="p-4">
            <User name={user.name} gender={user.gender} url={user.url} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
