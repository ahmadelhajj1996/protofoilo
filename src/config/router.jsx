import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
 
const AppRoutes = () => {
  return (
    <Routes>
  
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects  />} />
          <Route path="/skills" element={<Skills  />} />
          <Route path="/contact" element={<Contact  />} />

 
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default AppRoutes;
