import React, { useState } from 'react';

const Demo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "age") {
      setAge(value);
    }
  };

  const handleClick = () => {
    const obj = {
      name:name,
      age:age
    };

    setData([...data, obj]);
    setName("");
    setAge("");
    console.log(data);
  };

  return (
    <>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Enter your name"
        value={name}
      />

      <input
        type="text"
        name="age"
        onChange={handleChange}
        placeholder="Enter your age"
        value={age}
      />

      <button onClick={handleClick}>Click</button>

      {data.map((item, index) => (
        <h2 key={index}>{item.name} {item.age}</h2>
      ))}
    </>
  );
};

export default Demo;
