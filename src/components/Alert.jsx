import React from "react";

const Alert = ({ onClick }) => {
  return (
    <div>
      <div>
        <h3>An alert has been rendered!!</h3>
        <button onClick={onClick}>X</button>
      </div>
    </div>
  );
};

export default Alert;
