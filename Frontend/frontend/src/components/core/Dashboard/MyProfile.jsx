import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fileUploadEndpoints } from '../../../services/apis.jsx';
import { apiConnector } from '../../../services/apiConnector.jsx';
import { deleteFile } from '../../../services/operations/apiforprofile.jsx';
const { GET_USER_NOTES } = fileUploadEndpoints;
const MyProfile = () => {
    const [files, setFiles] = useState([]);
    const { user } = useSelector((state) => state.profile);
    useEffect(() => {
        // Fetch user file
        const fetchUserFiles = async () => {
            try {
                const response = await apiConnector("GET", `${GET_USER_NOTES}?userid=${user._id}`,{
                    userid :user._id,
                });
                setFiles(response.data.notes);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchUserFiles();
    }, [user]);
    const handleDelete = (fileId) => {
        deleteFile(fileId);
        setFiles((prevFiles) => prevFiles.filter((file) => file._id !== fileId));
    }
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(dateString).toLocaleString('en-IN', options);
    }
    return (
        <div className="min-h-screen text-black p-6">
            <div className="container mx-auto md:flex">
                {/* Left Section - User Info */}
                <div className="w-1/4 mx-auto flex gap-4 justify-center md:block">
                    <img src={user?.image} alt={user?.firstName} className="rounded-full md:w-32 md:h-32 object-cover mb-4" />
                    <div className="text-2xl font-semibold">{`${user?.firstName} ${user?.lastName}`}</div>
                    <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hidden md:flex">Edit Profile</button>
                </div>

                {/* Right Section - User's Files */}
                <div className="w-10/12 md:pl-10 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {files.map((file) => (
                            <div key={file._id} className="bg-gradient-to-r from-cyan-300 to-blue-400 text-sm rounded font-medium p-4 m-2">
                                <div className="text-lg font-medium">{file.subject}</div>
                                <div className="text-lg font-medium">{file.firstName}</div>
                                <div className="text-sm text-gray-400 mb-4">
                                    {formatDate(file.uploadedAt)}
                                </div>
                                <button 
                                    onClick={() => handleDelete(file._id)}
                                    className="bg-red-600 text-white px-4 py-2 rounded"
                                >
                                    Delete File
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MyProfile;