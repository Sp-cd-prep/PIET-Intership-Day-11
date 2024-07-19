import React, { useState } from "react";

const AssignmentTwo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);
  console.log(data)

  const handleChange = (e) => {

    const {name,value} =  e.target;
    if(name==="fullname"){
        setName(value)
    }
    else if(name === "age"){
        setAge(value)
    }
    // console.log(name,"name");
    // console.log(value,"value")
  };
  const handelClick=()=>{
    const obj = {
        name:name,
        age:age
    }
    setData([...data,obj])
  }

  return (
    <div>
      <input type="text" name="fullname" value={name} onChange={handleChange} placeholder="Enter Name"/>
      <input type="text" name="age" value={age} onChange={handleChange} placeholder="Enter age"/>

      <button onClick={handelClick}>Submit</button>

    {data.map((item,index)=>(
        <h1 key={index}>{item.name}{item.age}</h1>
    ))}




    </div>


  );
};

export default AssignmentTwo;
