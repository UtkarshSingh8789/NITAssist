import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fileUploadEndpoints} from '../../../services/apis.jsx'
import toast from 'react-hot-toast';
import { apiConnector } from '../../../services/apiConnector.jsx';
const { GET_FILES_BY_DEPARTMENT_AND_SUBJECT_API } = fileUploadEndpoints;
const SubjectNotes=()=>{
    const { Department, subjectName } = useParams();
    const [files,setFiles]=useState([]);
    async function getFiles(Department,subjectName){
        const toastId = toast.loading("Loading files...");
        const url = `${GET_FILES_BY_DEPARTMENT_AND_SUBJECT_API}?Department=${Department}&subjectName=${subjectName}`;
        console.log(url);
        try {
            const response = await apiConnector("GET", url);
            console.log("Printing file data", response);
            if (response.data && response.data.files) {
                setFiles(response.data.files);
            } else {
                setFiles([]);
            }    
        } catch (error) {
            console.error("Get Files API error:", error);
        }
        toast.dismiss(toastId);
    }
    useEffect(() => {
        if (Department && subjectName) {
            getFiles(Department, subjectName);
        }
    }, [Department, subjectName]);
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(dateString).toLocaleString('en-IN', options);
    }
    return (
    <div className='min-h-[calc(100vh-3.2rem)]'>
      <div className='h-20 bg-[#86C3FB] text-center text-lg md:text-4xl font-medium font-sans flex items-center justify-center'>
        {`${Department} - ${subjectName}`}
      </div>
      <div className='grid md:grid-cols-3 w-10/12 mx-auto mt-4 gap-x-8 items-center'>
        {files.length > 0 ? (
          files.map((file, index) => (
            <div key={index} className='bg-gradient-to-r from-cyan-300 to-blue-400 text-sm rounded font-medium p-4 m-2'>
              <div className="grid grid-cols-3 gap-2">
                <p>Year:</p>
                <p className="col-span-2">{file.year}</p>
                <p>Time:</p>
                <p className="col-span-2">{formatDate(file.uploadedAt)}</p>
                <p>Uploaded By:</p>
                <p className="col-span-2">{file.firstName}</p>
              </div>
              {file.filePath ? (
                <button
                  className='bg-blue-500 text-white rounded p-2 mt-2'
                  onClick={() => window.open(`http://localhost:5001/${file.filePath}`, '_blank')}
                  // this will help the user to open or download the notes;
                >
                Open File
                </button>
              ) : file.driveLink ? (
                <button
                  className='bg-blue-500 text-white rounded p-2 mt-2'
                  onClick={() => window.open(file.driveLink, '_blank')}
                >
                  Open Drive Link
                </button>
              ) : (
                <p>No file path or drive link available.</p>
              )}
            </div>
          ))
        ) : (
          <p>No files found for this subject.</p>
        )}
      </div>
    </div>
  );
}

export default SubjectNotes;