import multer from "multer";
import path from "path";
import { fileFilter } from "../utils/fileFilter.js";
import { folderExists } from "../utils/folderExists.js";

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    console.log("file: ", file);
    const folderExistence = await folderExists(ext);
    console.log("ext: ", ext);
    console.log("folderExistence: ", folderExistence);
    if (folderExistence) {
      // put the file in that folder
      const targetDir = path.join(__dirname, "uploads", ext);
      console.log("targetDir: ", targetDir);
      cb(null, targetDir);
    } else {
      const newTargetFolder = await createFolder(extension);
      console.log("newTargetFolder: ", newTargetFolder);
      cb(null, newTargetFolder);
    }
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = `${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE || 100) * 1024 * 1024, // 100 MB per file
  },
  fileFilter,
});
