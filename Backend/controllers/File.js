import { File } from "../models/FileUpload.js";
const localFileUpload = async (req, res) => {
    try {
        const { firstName, lastName, Department, subject, year } = req.body;
        const files = req.file;

        if (!files || !lastName || !Department || !subject || !year || !firstName) {
            return res.status(403).json({
                success: false,
                message: "plz fill the complete detail"
            });
        }

        const fileName = files.originalname;
        const userId = req.user.id;

        const newFile = new File({
            firstName,
            lastName,
            Department,
            year,
            subject,
            fileName,
            filePath: files.path,
            uploadedBy: userId,
        });

        try {
            await newFile.save();
            return res.status(200).json({
                success: true,
                message: "file uploaded and data saved",
            });
        } catch (error) {
            console.log("Printing error in saving data ", error.message);
            return res.status(500).json({
                success: false,
                message: "Error in file data saving",
            });
        }
    } catch (error) {
        console.log("Printing error in file uploading", error.message);
        return res.status(500).json({
            success: false,
            message: "file not uploaded",
        });
    }
};
const fileUploadUsingDriveLink=async(req,res)=>{
    try {
        const {firstName,lastName, Department , subject , year , fileName, driveLink} = req.body;
        // console.log("print req user",req.user);
        const userId = req.user.id;
        //console.log("printing file ", req.file);
        //console.log("Printing user id ", userId);
        const newFile = new File({
            firstName,
            lastName,
            Department,
            year,
            subject,
            fileName,
            driveLink,
            uploadedBy: userId, 
        });
        console.log("Printing new file",newFile);
        try {
            await newFile.save();
            return res.status(200).json({
                success:true,
                message: "file uploaded and data saved",
            });
        } catch (error) {
            console.log("Printing error in saving data ", error.message);
            return res.status(500).json({
                success:false,
                message:"Error in file data saving",
            });
        }
    }
    catch (error) {
        console.log("Printing error in file uploading", error.message);
        return res.status(500).json({
            success: false,
            message: "file not uploaded",
        });
    }
}
const getSubjectName=async(req,res)=>{
    try {
        const {Department}=req.query;
        // console.log(Department)
        if(!Department){
            return res.status(401).json({
                success:false,
                message:"Missing required parameter:year and department"
            })
        }
        const response= await File.find({Department}).distinct('subject')
        // console.log(response)
        if(!response){
            return res.status(404).json({
                success:false,
                message:"Something went wrong while finding subjects for department"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Subjects found Successfully",
            subjects:response  // rename response to subjects for clarity
        })
    } catch (error) {
        console.error("Error in getting subject names:", error.message);
        return res.status(500).json({
            success: false,
            message: "Subject names cannot be fetched",
        });
    }
}
const getFilesByDepartmentAndSubject=async(req,res)=>{
    try {
        const {Department,subjectName}=req.query;
        if(!Department || !subjectName){
            return res.status(404).json({
                success:false,
                message:"Missing required Parameters: Department or Subjects"
            })
        }
        const files=await File.find({
            Department,
            subject:subjectName
        })
        // console.log(files)
        if(!files){
            return res.status(404).json({
                success:false,
                message:"Something went wrong while finding files for subject of this department"
            })
        }
        return res.status(200).json({
            success:true,
            message:"files found successfully!",
            files
        })
    } catch (error) {
        console.error("Error in getting files:", error.message);
        return res.status(500).json({
            success: false,
            message: "Files cannot be fetched",
        });
    }
}
const getUserNotes=async (req,res)=>
  {
    try {
      const userId = req.query.userid; // check yha probjem lg rha;
      //console.log(userId)
      const notes = await File.find({ uploadedBy: userId });
      if (!notes || notes.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'No notes found for this user.',
        });
      }
      //console.log(notes)
      res.status(200).json({
        success: true,
        notes,
      });
    } catch (error) {
      console.error('Error fetching user notes:', error);
      res.status(500).json({
        success: false,
        message: 'Server error. Could not fetch notes.',
      });
    }
}
const deleteNote=async(req,res)=>{
    try {
        const noteId=req.body.params.noteId
        // console.log(noteId)
        const note=await File.findOne({_id:noteId});
        if(!note){
            return res.status(404).json({
                success:false,
                message:'Note not found or you do not have permission to delete this note.',
            });
        }
        await File.findByIdAndDelete(noteId);
        res.status(200).json({
            success: true,
            message: 'Note deleted successfully.',
        });
    } catch(error){
        console.log("error while deleting the notes");
        res.status(500).json({
            success:false,
            message:"Notes could not be deleted"
        })
    }
}
export {
    localFileUpload,
    fileUploadUsingDriveLink,
    getSubjectName,
    getFilesByDepartmentAndSubject,
    getUserNotes,
    deleteNote
}