import React, { useState, useEffect } from "react";
import "../styles/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount( count + 1);
  };
  const decrementCounter = () => {
    //setCount((count) => count - 1);
    setCount((prevState) => prevState - 1);
  };
  const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    console.log(list);
    if(list){
      return JSON.parse(localStorage.getItem('lists'));

    }
    else {
      return [];
    }
  }

  const [x, setx] = useState();
  const [items, setItems] = useState(
    
    getLocalItems()
    
  );

  const handleChange = (e) => {
    setx(e.target.value);
  };
  const updateItem = () => {
    if (!x) {
      alert("cannot enter empty data");
    } else {
      setItems([...items, x]);
      setx([" "]);
    }
  };
  const RemoveItem = () => {
    setItems([]);
  };
  const deleteItem = (id) => {
    console.log(id);
    const updatedItem = items.filter((currentElement, index) => {
      return id !== index;
    });
    setItems(updatedItem);
  };

  useEffect(()=>{
    localStorage.setItem('lists' ,JSON.stringify(items))
  },[items]
  );


  return (
    <div className="main-div">
      <button onClick={incrementCounter}>Count Up</button>
      <button onClick={decrementCounter}>Count Down</button>
      <p>{count}</p>

      <input
        type="text"
        placeholder="Add a task..."
        value={x}
        onChange={handleChange}
      ></input>
      <button onClick={updateItem}>Add Task</button>
      <button onClick={RemoveItem}>Remove All</button>
      <div>
        {items.map((currentElement, index) => {
          return (
            <div key={index}>
              <br/>
              {currentElement}
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;
