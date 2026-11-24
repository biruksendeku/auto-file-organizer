import express from "express";
const router = express.Router();
import {
  listUploads,
  organizeGet,
  organize,
} from "../controllers/organize.js";
import { upload } from "../config/multer.js";

router.get("/organize", organizeGet);
router.post("/organize", upload.single("file"), organize);
router.get("/api/uploads", listUploads);

export default router;
