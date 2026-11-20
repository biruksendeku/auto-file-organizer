import express from "express";
import organizeRoutes from "./routes/orgenize.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(organizeRoutes);

export default app;
