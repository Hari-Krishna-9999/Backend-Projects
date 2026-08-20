const fs = require("fs");
const path = require("path");

const uploadFile = (req, res) => {

    const fileUrl = `/uploads/${req.file.filename}`;

    res.status(201).json({
        message: "File uploaded successfully",
        fileUrl: fileUrl
    });
};

const getFileInfo = (req, res) => {

    const { filename } = req.params;

    const filePath = path.join(__dirname, "..", "uploads", filename);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({
            message: "File not found"
        });
    }

    const stats = fs.statSync(filePath);

    res.status(200).json({
        filename: filename,
        size: stats.size,
        createdAt: stats.birthtime
    });
};

const deleteFile = (req, res) => {

    const { filename } = req.params;

    const filePath = path.join(__dirname, "..", "uploads", filename);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({
            message: "File not found"
        });
    }

    fs.unlinkSync(filePath);

    res.status(200).json({
        message: "File deleted successfully"
    });
};

module.exports = {
    uploadFile,
    getFileInfo,
    deleteFile
};