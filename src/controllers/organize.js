import { BadRequestError } from "../middlewares/customErrors.js";

export const organizeGet = (req, res) => {
  res.send(`
        <h1> Organize Better With Us! </h1>
        <form action="/organize" method="post" enctype="multipart/form-data">
            <input type="file" name="file" placeholder="Upload your file here">
            <button type="submit"> Upload </button>
        </form>
        `);
};

export const organize = async (req, res) => {
  // checking file existence
  if (!req.file) {
    throw new BadRequestError("No files uploaded!");
  }
  res.status(202).json({
    success: true,
    message: "File organized successfully!",
  });
};
