import express from "express";
import connectDB from "./connect.db.js";
import Movie from "./movie.model.js";
const app = express();

// to make app understand json
app.use(express.json());

// connect database
connectDB();

//api
app.post("/movie/add", async (req, res) => {
  const newMovie = req.body;

  await Movie.create(newMovie);
  return res.status(200).send("Adding movie....");
});

// get all movies
app.get("/movie/list", async (req, res) => {
  const movies = await Movie.find();
  return res.status(200).send({ message: "success", movieList: movies });
});
//network port and server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

// Structure: ObjectId is a 12-byte identifier, consisting of:

// A 4-byte timestamp (representing the ObjectId's creation, measured in seconds since the Unix epoch).
// A 5-byte random value (generated once per process).
// A 3-byte incrementing counter (initialized to a random value).
// Uniqueness: ObjectId is designed to be unique across different machines 
            // and processes, making it suitable for use as a unique identifier.

// Timestamp Extraction: The timestamp embedded within an ObjectId can be extracted 
                      // to find out when the document was created.
