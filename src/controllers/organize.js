import { BadRequestError } from "../middlewares/customErrors.js";

export const organizeGet = (req, res) => {
  res.render("homepage");
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
  res.render("results");
};
