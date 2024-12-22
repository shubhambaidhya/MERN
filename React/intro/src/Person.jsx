const divStyle = {
  width: "400px",
  padding: "1rem",
  border: "1px solid purple",
};

const Person = (props) => {
  return (
    <div style={divStyle}>
      <img
        src={props.image}
        alt=""
        style={{ height: "400px", width: "100%" }}
      />
      <h3>{props.name}</h3>
    </div>
  );
};

export default Person;
