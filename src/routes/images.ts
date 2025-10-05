import { Router } from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary";
import Image from "../models/Image";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ message: "No file uploaded" });

    const result = await cloudinary.uploader.upload(file.path, {
      folder: "cdn-images",
      transformation: [{ quality: "auto", fetch_format: "auto" }],
    });
    const image = await Image.create({
      url: result.secure_url,
      public_id: result.public_id,
    });

    return res.status(201).json(image);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  const images = await Image.find();
  return res.json(images);
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // FIRST FIND
    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    // Delete from cloudinary
    await cloudinary.uploader.destroy(image.public_id);

    // Delete from DB
    await Image.findByIdAndDelete(id);

    return res.json({ message: "Image deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});
export default router;
