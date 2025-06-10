import { Router } from "express";
import { localFileUpload,getSubjectName,getFilesByDepartmentAndSubject,getUserNotes,deleteNote,fileUploadUsingDriveLink } from "../controllers/File.js";
import { verifyJWT } from "../middlewares/auth.js";
import multer from "multer";
const router=Router();
const storage=multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix+"-"+ file.originalname );
    },
});
const upload = multer({
    storage: storage,
});
router.post("/localFileUpload", verifyJWT, upload.single("file"), localFileUpload);
router.post("/fileUploadUsingDriveLink",verifyJWT,fileUploadUsingDriveLink);
router.get("/getSubjectName", getSubjectName);
router.get("/getFilesByDepartmentAndSubject", getFilesByDepartmentAndSubject);
router.get("/getUserNotes",getUserNotes);
router.delete("/DeleteNote",deleteNote);
export default router;