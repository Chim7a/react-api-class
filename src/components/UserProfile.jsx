import React from "react";

const UserProfile = (props) => {
  return (
    <div>
      <p>{props.username}</p>
      <p>{props.phone}</p>
      <p>{props.website}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default UserProfile;
