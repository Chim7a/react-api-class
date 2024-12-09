import React from "react";
import UserCard from "./UserCard";

const UserList = (props) => {
  console.log(props.listOfUsers);

  return (
    <div>
      {props.listOfUsers.map((item) => {
        return (
          <UserCard
            key={item.id}
            name={item.name}
            city={item.address.city}
            street={item.address.street}
            userId={item.id}
          />
        );
      })}
    </div>
  );
};

export default UserList;
