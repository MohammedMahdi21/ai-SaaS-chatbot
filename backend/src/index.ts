import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connection and listeneres

const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
  app.listen(PORT, () => console.log("Server Running & Connected To DB"));
}).catch((err) => console.log(err));