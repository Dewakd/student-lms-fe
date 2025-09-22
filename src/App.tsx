import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import Students from "@/pages/Students";
import Lecturers from "@/pages/Lecturers";
import Enrollment from "@/pages/Enrollment";
import Courses from "@/pages/Courses";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/lecturers" element={<Lecturers />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Layout>
    </Router>
  );
}
