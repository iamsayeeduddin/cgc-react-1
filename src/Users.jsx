import React from "react";
import userData from "./user.json";
import User from "./User";

const Users = () => {
  return (
    <div>
      <h3>Users</h3>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {userData.map((ele, idx) => {
          return <User key={idx + "user"} user={ele} />;
        })}
      </div>
      {/* {userData.forEach((ele) => ele.login)} */}
    </div>
  );
};

export default Users;
