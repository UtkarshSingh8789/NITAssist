import { Router } from "express";
import { localFileUpload,getSubjectName,getFilesByDepartmentAndSubject,getUserNotes,deleteNote,fileUploadUsingDriveLink } from "../controllers/File.js";
import { verifyJWT } from "../middlewares/auth.js";
import multer from "multer";
const fileRoutes=Router();
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
fileRoutes .post("/localFileUpload", verifyJWT, upload.single("file"), localFileUpload);
fileRoutes .post("/fileUploadUsingDriveLink",verifyJWT,fileUploadUsingDriveLink);
fileRoutes .get("/getSubjectName", getSubjectName);
fileRoutes .get("/getFilesByDepartmentAndSubject", getFilesByDepartmentAndSubject);
fileRoutes .get("/getUserNotes",getUserNotes);
fileRoutes .delete("/DeleteNote",deleteNote);
export default fileRoutes ;