import React from 'react'

function ChildC({ fName, lName }) {
    return (
      <>
        This is ChildC component.
        <br />
        <h3> Data from Parent component is as follows:</h3>
        <h4>{fName}</h4>
        <h4>{lName}</h4>
      </>
    );
  }

export default ChildC