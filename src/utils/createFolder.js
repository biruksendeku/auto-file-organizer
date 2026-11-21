import path from "path";
import { mkdir } from "node:fs/promises";

export const createFolder = async (file) => {
  try {
    const extension = path.extname(file.originalname);
    const ext = extension.slice(1);
    const targetDir = path.join(__dirname, "uploads", ext);
    await mkdir(targetDir, { recursive: true });
  } catch (err) {
    console.error(`Error creating the required ${ext} folder: `, err);
  }
};
