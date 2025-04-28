import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { createBrowserRouter,Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Diagnoses from "./pages/diagnose";
import InputData from "./pages/inputData";
import MainLayout from "./pages/main/layout/MainLayout";
import DashboardPage from "./pages/main/dashboard";
import AppointmentPage from "./pages/main/appointment";
import DoctorsPage from "./pages/main/Doctors";
import HealthcarePage from './pages/dashboard/healthcare';
import LaboratoryPage from './pages/dashboard/laboratory';
import HealthcareMonitoringPage from './pages/main/HealthcareMonitoring';
import PharmacyPage from "./pages/main/pharmacy";
import MRIPage from "./pages/main/mri";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/diagnose" element={<Diagnoses />} />
        <Route path="/inputdata" element={<InputData />} />

        <Route element={<MainLayout isRightbarVisible={true} />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/healthcare" element={<HealthcarePage />} />
          <Route path="/laboratory" element={<LaboratoryPage />} />
          <Route path="/pharmacy" element={<PharmacyPage />} />
          <Route path="/mri" element={<MRIPage />} />
          <Route path="/healthcare-monitoring" element={<HealthcareMonitoringPage />} />
        </Route>
      </Routes>
    </>
  );
}

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout />,
//     children: [
//       { index: true, element: <DashboardPage /> },
//       { path: 'doctors', element: <DoctorsPage /> },
//       { path: 'healthcare', element: <HealthcarePage /> },
//       { path: 'laboratory', element: <LaboratoryPage /> },
//       { path: 'healthcare-monitoring', element: <HealthcareMonitoringPage /> },
//     ]
//   }
// ]);

export default App;
