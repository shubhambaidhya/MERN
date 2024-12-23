import express from "express";
import connectDB from "./database-connection/connect.db.js";
import adminRoutes from "./admin/admin.controller.js";
import courseRoutes from "./course/course.controller.js";
// import printPink from "./utils/color.console.js";
const app = express();

//to make app understand json
app.use(express.json());

//database connection
await connectDB();

//register routes
app.use(adminRoutes);
app.use(courseRoutes);
//network port and server
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
