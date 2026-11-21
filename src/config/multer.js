import multer from "multer";
import path from "path";
import { fileFilter } from "../utils/fileFilter.js";
import { createFolder } from "../utils/createFolder.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    createFolder(file).then(
      (targetDir) => cb(null, targetDir),
      (error) => cb(error),
    );
  },

  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE || 100) * 1024 * 1024, // 100 MB per file
  },
  fileFilter,
});
