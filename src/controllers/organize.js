import path from "path";
import { fileURLToPath } from "node:url";
import { BadRequestError } from "../middlewares/customErrors.js";

export const organizeGet = (req, res) => {
  res.sendFile("/homepage.html");
};

export const organize = (req, res) => {
  if (!req.file) {
    throw new BadRequestError("No files uploaded!");
  }

  const results = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../uploads",
  );
  res.sendFile(results);
};
