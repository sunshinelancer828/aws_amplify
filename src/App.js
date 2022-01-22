import { Register } from './pages/Register'
import {Login} from './pages/Login'
import './App.css'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./Components/ProtectedRoute"
import { Dashboard } from './pages/Dashboard'
import { Document } from './pages/Document'
import {Team} from './pages/Team'
import {Task} from './pages/Task'
import {Faq} from './pages/Faq'
import {Chart} from './pages/Chart'
import {Report} from './pages/Report'
import {Meeting} from './pages/Meeting'
import {Other} from './pages/Other'
import {Settings} from './pages/Settings'
import { AddMember } from './pages/AddMember'
import { NewMeeting } from './Components/Meeting/NewMeeting'
import {Confirmation} from './Components/Auth/Confirmation'
import ForgetPassword from './Components/Auth/ForgetPassword'
import {Welcome} from './pages/Welcome'
import {Wait} from './pages/Wait'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Amplify.configure(awsconfig);

function App() {
  return (
      <>
        <ToastContainer autoClose={3000} />
        <Router>
          <Routes>
            <Route path="/register/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/confirmation" element={<Confirmation/>}/>
            <Route path="/forgotpassword" element={<ForgetPassword/>}/>
            <Route path="/wait" element={<Wait/>}/>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/welcome" element={<ProtectedRoute><Welcome/></ProtectedRoute>}/>
            <Route path="/meeting" element={<ProtectedRoute><Meeting/></ProtectedRoute>}/>
            <Route path="/meeting/new" element={<ProtectedRoute><NewMeeting/></ProtectedRoute>}/>
            <Route path="/tasks" element={<ProtectedRoute><Task/></ProtectedRoute>}/>
            <Route path="/documentcenter" element={<ProtectedRoute><Document/></ProtectedRoute>}/>
            <Route path="/faq" element={<ProtectedRoute><Faq/></ProtectedRoute>}/>
            <Route path="/charts" element={<ProtectedRoute><Chart/></ProtectedRoute>}/>
            <Route path="/report" element={<ProtectedRoute><Report/></ProtectedRoute>}/>
            <Route path="/team" element={<ProtectedRoute><Team/></ProtectedRoute>}/>
            <Route path="/member" element={<ProtectedRoute><AddMember/></ProtectedRoute>}/>
            <Route path="/404" element={<ProtectedRoute><Other/></ProtectedRoute>}/>
            <Route path="/settings" element={<ProtectedRoute><Settings/></ProtectedRoute>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
