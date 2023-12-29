import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connection and listeneres
connectToDatabase().then(() => {
  app.listen(5000, () => console.log("Server Running & Connected To DB"));
}).catch((err) => console.log(err));