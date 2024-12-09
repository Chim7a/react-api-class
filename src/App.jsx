import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setListOfUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(listOfUsers);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div>
        <UserList listOfUsers={listOfUsers} />
      </div>
    </>
  );
}

export default App;
