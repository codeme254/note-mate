import express from "express";
import { config } from "./db/config.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());

// ROUTES
// User routes
userRoutes(app);
notesRoutes(app);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.url}`);
});
