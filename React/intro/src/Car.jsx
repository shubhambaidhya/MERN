import React from "react";
const textStyle = {
  padding: "1rem",
  textAlign: "justify",
};
function Car(props) {
  return (
    <div
      style={{
        border: "6px solid gold",
        borderRadius: "1rem",
        boxShadow:
          props.type == "Supercar"
            ? "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px"
            : "rgb(38, 57, 77) 0px 20px 30px -10px",
        height: 500,
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        margin: "1rem",
      }}
    >
      <img
        style={{
          height: 300,
          // margin: "1rem",
          borderRadius: "0.5rem",
          width: "100%",
          border: "400px",
        }}
        src={props.image}
        alt=""
      />
      <h3 style={textStyle}>Name: {props.name}</h3>
      <h3 style={textStyle}>Price: {props.price}</h3>
      <h3 style={textStyle}>Type: {props.type}</h3>
    </div>
  );
}

export default Car;
