import React from 'react'
import ChildC from './ChildC';

function ChildB({ fName, lName }) {
    return (
      <>
        This is ChildB Component.
        <br />
        <ChildC fName={fName} lName={lName} />
      </>
    );
  }

export default ChildB