import './App.css';
import Footer from './components/common/Footer.jsx';
import Navbar from './components/common/Navigation.jsx';
import Home from './pages/Home.jsx';
import { Route, Routes, useNavigate} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Desktop from './pages/Desktop.jsx';
import Courses from './pages/Courses.jsx';
import Course from './components/core/Courses/Course.jsx';
import Upload from './pages/Upload.jsx';
import Contact from './pages/Contact.jsx';
import { useDispatch } from 'react-redux';
import OpenRoute from './components/core/Auth/OpenRoute.jsx';
import PrivateRoute from './components/core/Auth/PrivateRoute.jsx';
import Error from './pages/Error.jsx';
import { useEffect } from 'react';
import { getUserDetails } from './services/operations/apiforprofile.jsx';
import SubjectNotes from "../src/components/core/Courses/SubjectNotes.jsx";
import DirectUploads from './components/core/fileUpload/DirectUploads.jsx';
import DriveLinkUploads from './components/core/fileUpload/DriveLinkUploads.jsx';
import MyProfile from './components/core/Dashboard/MyProfile.jsx';
export default function App() {
  // const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      console.log("print token in app.js ",token);
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        }> </Route>
        <Route path='/signup' element={
          <OpenRoute>
          <Signup />
        </OpenRoute>
        }></Route>
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Desktop />
          </PrivateRoute>
        }>
        </Route>
        <Route path="/dashboard/my-profile" element={
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        } />
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/courses/:Department' element={
          <PrivateRoute>
            <Course />
          </PrivateRoute>
        }></Route>
        <Route path='/courses/:Department/subjectNotes/:subjectName' element={
          <PrivateRoute>
            <SubjectNotes/>
          </PrivateRoute>
        }></Route>
        <Route path='/upload' element={
          <PrivateRoute>
            <Upload />
          </PrivateRoute>
        }></Route>
        <Route path='/upload/uploadLocalfile' element={
          <PrivateRoute>
            <DirectUploads />
          </PrivateRoute>
        }></Route>
        <Route path='/upload/uploadUsingDriveLink' element={
          <PrivateRoute>
            <DriveLinkUploads/>
          </PrivateRoute>
        }></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}
