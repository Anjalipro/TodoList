import React, { useState } from "react";
import MenuList from "../helpers/MenuList";

import "../styles/Home.css";

function Home() {
  const[people, setPeople] = useState(MenuList)
  return (
    <div className="home">
      <h3>{people.length} birthdays today</h3>
      <div>
        {MenuList.map((people) => {
          return <div key = 'id'>
           <p>{people.name}</p>
           <p>{people.age}</p> 
          <p><img src = {people.image} alt = 'image'/></p>
           

          </div>
        } )}
        
      </div>
     
    </div>
  );
}

export default Home;
