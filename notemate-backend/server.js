import express from "express";
import { config } from "./db/config.js";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

// ROUTES
// User routes
userRoutes(app);
notesRoutes(app);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.url}`);
});
