import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "./routes";

const app = express();
const port = 5000;

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(routes)

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
