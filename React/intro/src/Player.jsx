const Player = (props) => {
  return (
    <div
      style={{
        width: 400,
        border: "1px solid black",
      }}
    >
      <img
        src={props.image}
        alt=""
        style={{
          height: 600,
          width: "100%",
          border: "400px",
        }}
      />

      <h3 style={{ padding: "1rem" }}>{props.name}</h3>
      <p style={{ padding: "1rem", textAlign: "justify" }}>{props.text}</p>
    </div>
  );
};
export default Player;
