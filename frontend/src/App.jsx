import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Home from "./Components/HomePage/Home";
import Footer from "./Components/Common/Footer";
import ContactPage from "./Components/Pages/ContactPage";
import DoctorsPage from "./Components/Pages/DoctorsPage";
import AboutPage from "./Components/Pages/AboutPage";
import SigninPage from "./Components/Pages/SigninPage";
import SignupPage from "./Components/Pages/SignupPage";
import DepartmentsPage from "./Components/Pages/DepartmentsPage";
import NewsPage from "./Components/Pages/NewsPage";
import DoctorDetailsPage from "./Components/Pages/DoctorDetailsPage";
import Doctors from "./Components/HomePage/Doctors";
import Appointments from "./Components/Pages/Appointments";

const MainLayout = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />
      {children}
      <Footer />

    </div>
  )
}

const AuthLayout = ({ children }) => {
  return <>{children}</>;
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/doctors" element={<MainLayout><Doctors /></MainLayout>} />
        <Route path="/doctors/:id" element={<MainLayout><DoctorDetailsPage /></MainLayout>} />
        <Route path="/doctors/departments" element={<MainLayout><DoctorsPage /></MainLayout>} />
        <Route path="/appointment/:id" element={<MainLayout><DoctorDetailsPage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
         <Route path="/appointments" element={<MainLayout><Appointments /></MainLayout>} />
        <Route path="/signin" element={<AuthLayout><SigninPage /></AuthLayout>} />
        <Route path="/signup" element={<AuthLayout><SignupPage /></AuthLayout>} />
        <Route path="/departments" element={<MainLayout><DepartmentsPage /></MainLayout>} />
        <Route path="/news" element={<MainLayout><NewsPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  )
}