import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import DriveWithUsPage from "./pages/DriveWithUsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/drive-with-us" element={<DriveWithUsPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}
