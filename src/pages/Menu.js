import React ,{ useState }from "react";

import "../styles/Menu.css";

function Menu() {
  
  const[person,setPerson] = useState([{firstName: '' , email:'',age:''}])
  const [people , setPeople] = useState([]);

  const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);
      setPerson({...person , [name]:value})

  };
  const handleSubmit = (e) => {
      e.preventDefault();
      if(person.firstName&&person.email&&person.age){
          const newPerson = {...person , id: new Date().getTime().toString()}
          setPeople([...people , newPerson]);
          setPerson({firstName:'',email:'' ,age:''});
      }

}

 
  return (
    <>
      <article>
        <form >
          <div>
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick = {handleSubmit}>Add Person</button>
        </form>
        {
            people.map((person,index) =>{
                const{id,firstName,age,email} = person
                return<div id={id}>
                    <h4>{firstName}</h4>
                    <h5>{age}</h5>
                    <h6>{email}</h6>
                </div>
            })
        }
      </article>
    </>
  );
};


export default Menu;