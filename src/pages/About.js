import React, { useState, useEffect } from "react";

import "../styles/About.css";
function About() {
  const [users , setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(response);
    setUsers( await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>List of users</h2>
      <div className="card">
        {
          users.map((currentElement ) => {
            return (
              <div key = {currentElement.id}>
                <div className="card">{currentElement.id}</div>
                <div >{currentElement.name}</div>
                <div>{currentElement.username}</div>
                <div>{currentElement.email}</div>
              </div>
            )

          })
        }
      </div>
    </>
  );
}

export default About;
