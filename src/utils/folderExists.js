import path from "path";
import { access } from "node:fs/promises";

export const folderExists = async (targetFolderPath) => {
  try {
    const targetDir = path.join(__dirname, "uploads", targetFolderPath);
    await access(targetDir);
    return true;
  } catch (err) {
    return false;
  }
};
