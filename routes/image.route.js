const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  uploadImage,
  getImages,
  getImage,
} = require("../controller/image.controller");

router.post("/", upload.single("image"), uploadImage);
router.get("/", getImages);
router.get("/:id", getImage);

module.exports = router;
