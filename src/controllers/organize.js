import path from "path";
import { fileURLToPath } from "node:url";
import { BadRequestError } from "../middlewares/customErrors.js";

export const organizeGet = (req, res) => {
  res.sendFile("/homepage.html");
};

export const organize = async (req, res) => {
  // checking file existence
  if (!req.file) {
    throw new BadRequestError("No files uploaded!");
  }
  // res.status(202).json({
  //   success: true,
  //   message: "File organized successfully!",
  // });

  const results = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../uploads",
  );
  // res.render("results", {
  //   results,
  // });
  res.sendFile(results);
};
