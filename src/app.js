import express from "express";
import { fileURLToPath } from "node:url";
import organizeRoutes from "./routes/orgenize.js";
const app = express();

const publicFolder = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "./public",
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicFolder));

app.use(organizeRoutes);

export default app;
