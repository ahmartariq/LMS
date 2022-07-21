import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ProgramDetails } from "./Pages/ProgramDetails";
// import { StudentListing } from "./Pages/StudentListing";
import { Login } from "./Pages/Login";
import { App } from "./Pages/App";
import { CourseDetails } from "./Pages/CourseDetails";
import { ModuleDetails } from "./Pages/ModuleDetails";
import { Questions } from "./Pages/Questions";
import { Feedback } from "./Pages/Feedback";
import { Files } from "./Pages/Files";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Pages/Auth/Auth";
import { RequireAuth } from "./Pages/Auth/RequireAuth";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth> <App /> </RequireAuth>} />
        <Route path="login" element={<Login />} />
        {/* <Route path="student-listing" element={<StudentListing />} /> */}
        <Route path="program-details/:id" element={<RequireAuth> <ProgramDetails /> </RequireAuth> }/>
        <Route path="course-details/:course" element={<RequireAuth> <CourseDetails /> </RequireAuth> }/>
        <Route path="module-details/:module" element={<RequireAuth> <ModuleDetails /> </RequireAuth>}>
          <Route index path="questions" element={<RequireAuth>  <Questions /> </RequireAuth>} />
          <Route path="feedback" element={<RequireAuth> <Feedback /> </RequireAuth>} />
          <Route path="files" element={<RequireAuth> <Files /> </RequireAuth>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);