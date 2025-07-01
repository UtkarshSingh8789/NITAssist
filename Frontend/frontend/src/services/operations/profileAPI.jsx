import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector.jsx";
import { ProfileEndPoints,fileUploadEndpoints } from "../apis.jsx";
import { setUser } from "../../slices/profileSlice.jsx";
import { logout } from "./authAPI.jsx";
const {DELETE_NOTE} = fileUploadEndpoints
const {GET_USER_DETAILS}  = ProfileEndPoints
export function getUserDetails(token, navigate) {
  return async (dispatch) => {
      const toastId = toast.loading("Loading...");
      console.log("print token in getuserdetails api", token);
      const config = {
        // this end point getUserDetails is protected and require authentication to return the correctly ogged in user details;
        // to prove you are logged in, you must send your JWT TOKEN WITH YOUR REQUEST;
          headers: {
              Authorization: `Bearer ${token}`,
            },
        };
        console.log("Final config for API call:", config);
        try {
          const response = await apiConnector("GET", GET_USER_DETAILS, null, config);
          console.log("Get User Details Api Response ......", response);
          if (!response.data.success) {
              throw new Error(response.data.message);
          }
          const userImage = response.data.data.image
              ? response.data.data.image
              : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`;
          dispatch(setUser({ ...response.data.data, image: userImage }));
        } catch (error) {
        logout();
          console.log("GET_USER_DETAILS API ERROR............", error);
          toast.error("Could Not Get User Details");
        }
      toast.dismiss(toastId);
    };
}
export async function deleteFile(noteId){
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("DELETE", DELETE_NOTE, null,{
            params: { noteId: noteId },
            // Query parameters are key-value pairs appended to the end of a URL to pass additional information to the server during a GET, DELETE, or other HTTP request.
        });
        if (!response.data.success) {
            console.log('Failed to delete file:', response.data.message);
        }
    } catch (error) {
        console.log('Error deleting file:', error.message);
        toast.error("Could Not Get Uploaded Files");
    }
    toast.dismiss(toastId);
};