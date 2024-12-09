import React, { useState } from "react";
import axios from "axios";
import UserProfile from "./UserProfile";

const UserCard = (props) => {
  const [userDetails, setUserDetails] = useState(null);
  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        ` https://jsonplaceholder.typicode.com/users/${props.userId}`
      );
      setUserDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userDetails);
  return (
    <div className="m-3 p-2 border border-red-500">
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Street:</strong> {props.street}
      </p>
      <p>
        <strong>City:</strong> {props.city}
      </p>

      {userDetails === null ? (
        <button
          onClick={getUserDetails}
          className="border border-red-500 rounded-md p-2 w-fit"
        >
          Get more details
        </button>
      ) : (
        <UserProfile
          phone={userDetails.phone}
          website={userDetails.website}
          username={userDetails.username}
          email={userDetails.email}
        />
      )}
    </div>
  );
};

export default UserCard;
