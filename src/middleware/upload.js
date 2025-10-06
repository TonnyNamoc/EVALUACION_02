import multer from "multer";
import path from "path";
import fs from "fs";

const dir = "uploads";
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const storage = multer.diskStorage({
        destination: (_req, _file, cb) => cb(null, dir),
        filename: (_req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const base = path.basename(file.originalname, ext).replace(/\s+/g, "_");
        cb(null, `${base}-${Date.now()}${ext}`);
    }
});

const fileFilter = (_req, file, cb) => {
    const ok = ["image/jpeg", "image/png", "image/webp"].includes(file.mimetype);
    cb(null, ok);
};

export const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } // 2MB
});
