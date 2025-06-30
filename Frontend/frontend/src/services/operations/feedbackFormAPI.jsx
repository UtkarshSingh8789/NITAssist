import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector.jsx"
import { setLoading } from "../../slices/authSlice.jsx"
import { feedbackFormEndPoints } from "../apis.jsx";
const { SEND_FEEDBACK } = feedbackFormEndPoints
export function sendFeedback(
  Name,
  email,
  contactNo,
  Subject,
  message,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      console.log('where is the error');
      const response = await apiConnector("POST", SEND_FEEDBACK, {
        Name,
        email,
        contactNo,
        Subject,
        message,
      })
       console.log('where is the error 2');
      console.log("Feedback sending API response.......", response);
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Message Sent")
      navigate("/contact");
    }
    catch (error) {
      console.log("Feedback sending API ERROR ...", error.message);
      toast.error("Message Not Sent")
      navigate("/contact");
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}