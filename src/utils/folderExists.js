import path from "path";
import { access } from "node:fs/promises";

export const folderExists = async (file) => {
  try {
    const extension = path.extname(file.originalname);
    const ext = extension.slice(1);
    const targetDir = path.join(__dirname, "uploads", ext);
    await access(targetDir);
    return true;
  } catch (err) {
    return false;
  }
};
