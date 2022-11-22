import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:3000/";
  const fetchUsers = () => {
    axios.get(`${url}users`).then((response) => {
      const userList = response.data;
      setUsers(userList.map((user) => user));
    });
    // .then(data => setUsers(data.map(datum => datum.name)))
    // const data = await response.json();
    // if(data){
    //   console.log(data)
    //      setUsers(data.name);
    // }
  };

  console.log(users);

  useEffect(() => fetchUsers(), []);

  console.log(users);
  return (
    <div style={{ margin: "1rem" }}>
      <p>list of registered users:</p>
      {users.map((user) => (
        <li key={user._id}>{user.name}</li>
      ))}
    </div>
  );
}

export default Users;
