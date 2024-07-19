import React from 'react'
import ChildB from './ChildB';

function ChildA({ fName, lName }) {
    return (
      <>
        This is ChildA Component.
        <br />
        <ChildB fName={fName} lName={lName} />
      </>
    );
  }

export default ChildA