import express from 'express';
import { config } from "./db/config.js";
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(bodyParser.json())


// ROUTES
// User routes
userRoutes(app);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.url}`);
})

