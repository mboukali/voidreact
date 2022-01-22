import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import Input from "./component/input";
import UserList from "./users/UserList";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, Setusers] = useState([]);

  console.log("rendering application", users);

  const fetchData = useCallback(() => {
    axios.get("https://swapi.dev/api/people").then((response) => {
      //console.log("response", response.data.results);
      Setusers(response.data.results);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex justify-center items-center text-white bg-gray-800 text-3xl">
      <UserList users={users} />
      <div className="flex flex-col w-96 hidden">
        <Input inputValue={name} onChange={setName} label="Votre nom" />
        <Input inputValue={age} onChange={setAge} label="Votre age" />
        <h1>This my name => {name}</h1>
      </div>
    </div>
  );
};

export default App;
