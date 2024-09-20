import React, { useRef } from "react";

const Input = () => {
  const nameRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameRef.current) console.log(nameRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={nameRef} />
      <button onSubmit={handleSubmit}>Submit</button>
    </div>
  );
};

export default Input;
