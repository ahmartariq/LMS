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
        <Route path="/" element={<RequireAuth><App /> </RequireAuth>} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="student-listing" element={<StudentListing />} /> */}
        <Route path="program-details/:id" element={<ProgramDetails />} />
        <Route path="course-details/:course" element={<CourseDetails />} />
        <Route path="module-details/:module" element={<ModuleDetails />}>
          <Route index path="questions" element={<Questions />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="files" element={<Files />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);