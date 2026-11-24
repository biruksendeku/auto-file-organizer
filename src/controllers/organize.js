import path from "path";
import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { BadRequestError } from "../middlewares/customErrors.js";

const uploadsRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../uploads",
);

const getDirectoryTree = async (directory, entries) => {
  if (!entries) {
    entries = await readdir(directory, { withFileTypes: true });
  }
  entries.sort((a, b) => {
    if (a.isDirectory() !== b.isDirectory()) {
      return a.isDirectory() ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });

  return Promise.all(
    entries
      .filter((entry) => entry.isDirectory() || entry.isFile())
      .map(async (entry) => ({
        name: entry.name,
        type: entry.isDirectory() ? "directory" : "file",
        ...(entry.isDirectory()
          ? {
              children: await getDirectoryTree(
                path.join(directory, entry.name),
              ),
            }
          : {}),
      })),
  );
};

export const organizeGet = (req, res) => {
  res.sendFile(
    path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      "../public/homepage.html",
    ),
  );
};

export const organize = (req, res) => {
  if (!req.file) {
    throw new BadRequestError("No files uploaded!");
  }

  res.redirect("/results.html");
};

export const listUploads = async (req, res) => {
  let entries;
  try {
    entries = await readdir(uploadsRoot, { withFileTypes: true });
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
    entries = [];
  }

  const children = await getDirectoryTree(uploadsRoot, entries);
  res.json({ name: "uploads", type: "directory", children });
};
