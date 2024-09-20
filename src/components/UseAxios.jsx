import React, { useEffect, useState } from "react";
import axios from "axios";
const UseAxios = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Rubuto Yvan" },
    { id: 2, name: "R Yvan" },
    { id: 3, name: "Noella Nkiliye" },
    { id: 4, name: "Paccy Pank" },
    { id: 5, name: "Baddoo Eric" },
  ]);
  const deleteUser = (usr) => {
    const newUsers = users.filter((wantedUser) => wantedUser !== usr);
    setUsers(newUsers);
  };
  const updateUser = (usr) => {
    setUsers([...users, {...usr, name: + " !"}]);
  };

  // useEffect(() => {
  //   // axios
  //   //   .get("https://jsonplaceholder.typicode.com/users")
  //   //   .then((res) => console.log(res))
  //   //   .catch((err) => console.log(err));

  //   try {
  //     const res = async () => {
  //       const responseObject = await axios.get(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setUsers(responseObject.data);
  //     };
  //     res();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [users]);

  return (
    <div>
      {users.map((user, index) => (
        <li key={index}>
          {user.id}
          {user.name}
          <button onClick={() => deleteUser(user)}>Delete</button>
          <button onClick={() => updateUser(user)}>Update</button>
        </li>
      ))}
    </div>
  );
};

export default UseAxios;
