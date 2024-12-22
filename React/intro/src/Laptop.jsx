const Laptop = (info) => {
  return (
    <div
      style={{
        width: 600,
        border: "1px solid black",
      }}
    >
      <img
        style={{
          height: 600,
          width: "100%",
          border: "400px",
        }}
        src={info.image}
        alt=""
      />
      <h3 style={{ padding: "1rem", textAlign: "center" }}>{info.name}</h3>
    </div>
  );
};

export default Laptop;
