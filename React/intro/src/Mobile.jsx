import React from "react";

const Mobile = (props) => {
  return (
    <div>
      {props.children}
      <p>{props.name}</p>
      <h3>{props.price}</h3>
    </div>
  );
};

export default Mobile;
