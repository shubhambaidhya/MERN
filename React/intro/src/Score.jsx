import React from "react";

const Score = (props) => {
  return (
    <div
      style={{
        border: props.runs >= 100 ? "4px solid red" : "1px solid black",
        borderRadius: "1rem",
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
      }}
    >
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      {props.runs >= 100 && <h4>Star Player </h4>}
      <h5>Runs:{props.runs}</h5>
    </div>
  );
};

export default Score;
