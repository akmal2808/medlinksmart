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
import HealthcareMonitoringPage from './pages/dashboard/HealthcareMonitoring';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/diagnose" element={<Diagnoses />} />
        <Route path="/inputdata" element={<InputData />} />
        <Route  element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/appointment" element={<AppointmentPage/>}/>
          <Route path="/Doctors" element={<DoctorsPage/>}/>
          <Route path="/pages/dashboard" element={<LaboratoryPage/>}/>
          <Route path="/pages/dashboard" element={<HealthcareMonitoringPage/>}/>
          <Route path="/pages/dashboard" element={<HealthcarePage/>}/>



        </Route>
      </Routes>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'doctors', element: <DoctorsPage /> },
      { path: 'healthcare', element: <HealthcarePage /> },
      { path: 'laboratory', element: <LaboratoryPage /> },
      { path: 'healthcare-monitoring', element: <HealthcareMonitoringPage /> },
    ]
  }
]);

export default App;
