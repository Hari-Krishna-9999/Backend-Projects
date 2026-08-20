const express = require("express");
const upload = require("../middleware/uploadMiddleware");

const {
    uploadFile,
    getFileInfo,
    deleteFile
} = require("../controllers/fileController");

const router = express.Router();

router.post(
    "/upload",
    upload.single("file"),
    uploadFile
);

router.get(
    "/:filename",
    getFileInfo
);

router.delete(
    "/:filename",
    deleteFile
);

module.exports = router;