import express from "express";

// app
const app = express();

//.

app.get("/", (req, res) => {
  return res.status(200).send("My first API");
});

app.get("/hello", (req, res) => {
  return res.status(200).send("Hello shubham");
});
//network port and server
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
