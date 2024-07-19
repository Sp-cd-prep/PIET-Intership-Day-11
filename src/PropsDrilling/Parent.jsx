import React, { useState } from "react";
import ChildA from "./ChildA";

const Parent = () => {
    const [fName] = useState("SP");
    const [lName] = useState("Acharya");
  return (
    <>
      <div>This is a Parent component</div>
      <br />

      <ChildA fName={fName} lName={lName} />
    </>
  )
}

export default Parent