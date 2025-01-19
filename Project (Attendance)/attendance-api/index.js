import express from 'express';
import connectDB from './database-connection/db.connect.js';
import userRoutes from './user/user.controller.js';
import studentRoutes from './student/student.controller.js';
const app = express();

// to make app understand json
app.use(express.json());

//TODO: enable cors

// connect database
await connectDB();
// register routes
app.use(userRoutes);
app.use(studentRoutes);
// network PORT and Server

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
