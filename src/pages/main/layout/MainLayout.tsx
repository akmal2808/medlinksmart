import { Outlet, NavLink } from "react-router";

import logo from "../../../assets/Logo/medlink.png"





const MainLayout: React.FC = () => {
    return (
        <div className="flex h-screen text-black">
          {/* Sidebar */}
          <aside className="w-[250px] bg-white p-5 flex flex-col justify-between border-r border-gray-300">
            <div>
              <div className="flex justify-center items-center mb-5">
                <NavLink to={"/"}>

                    <img src={logo} alt="Logo" className="w-24 h-28 object-contain" />
                </NavLink>
              </div>
              <nav className="flex flex-col">
                <a href="#" className="flex items-center gap-2 p-2 mb-2 text-gray-400 hover:bg-teal-500 hover:text-white rounded transition ease-in-out duration-300">
                  <i className="bi bi-house-door"></i>
                  <span>Dashboard</span>
                </a>
                <a href="/appointment" className="flex items-center gap-2 p-2 mb-2 text-gray-400 hover:bg-teal-500 hover:text-white rounded transition ease-in-out duration-300">
                  <i className="bi bi-clipboard-check-fill"></i>
                  <span>Appointment</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-2 mb-2 text-gray-400 hover:bg-teal-500 hover:text-white rounded transition ease-in-out duration-300">
                  <i className="bi bi-person-standing"></i>
                  <span>Doctor</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-2 mb-2 text-gray-400 hover:bg-teal-500 hover:text-white rounded transition ease-in-out duration-300">
                  <i className="bi bi-chat-right-text"></i>
                  <span>Message</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-2 mb-2 text-gray-400 hover:bg-teal-500 hover:text-white rounded transition ease-in-out duration-300">
                  <i className="bi bi-wallet"></i>
                  <span>Payment</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-2 mb-2 text-gray-400 hover:bg-teal-500 hover:text-white rounded transition ease-in-out duration-300">
                  <i className="bi bi-gear-wide"></i>
                  <span>Settings</span>
                </a>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-2 p-2 text-gray-400 hover:bg-teal-500 hover:text-white rounded transition ease-in-out duration-300">
                <i className="bi bi-person-fill"></i>
                <span>My Account</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-2 text-gray-400 hover:bg-teal-500 hover:text-white rounded transition ease-in-out duration-300">
                <i className="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-2 text-gray-400 hover:bg-teal-500 hover:text-white rounded transition ease-in-out duration-300">
                <i className="bi bi-question-circle-fill"></i>
                <span>Help</span>
              </a>
            </div>
          </aside>
    
          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto text-black">
            <Outlet />
          </main>
    
          {/* Rightbar */}
          <aside className="w-[300px] p-5 bg-white border-l border-gray-300">
            <div className="mb-5">
              <h4 className="font-semibold text-lg mb-4">Patient Schedule</h4>
              <div className="flex gap-2">
                <div className="flex-1 bg-teal-500 text-white rounded-lg p-3 text-center">
                  <div>2024 December</div>
                  <div className="text-2xl font-bold">20</div>
                  <div>Surgery</div>
                </div>
                <div className="flex-1 bg-gray-100 text-gray-700 rounded-lg p-3 text-center">
                  <div>2024 December</div>
                  <div className="text-2xl font-bold">22</div>
                  <div>Therapy</div>
                </div>
              </div>
            </div>
    
            <div className="mb-5">
              <h4 className="font-semibold text-lg mb-4">Appointment</h4>
              <div className="space-y-2">
                <div className="bg-teal-100 text-gray-800 p-3 rounded-lg">
                  <strong>Lifestyle Counseling</strong><br />
                  Dr. Claudia Alves
                </div>
                <div className="bg-teal-100 text-gray-800 p-3 rounded-lg">
                  <strong>Rehabilitation</strong><br />
                  Dr. Claudia Alves
                </div>
                <div className="bg-teal-100 text-gray-800 p-3 rounded-lg">
                  <strong>Preventive Care</strong><br />
                  Dr. Claudia Alves
                </div>
              </div>
            </div>
    
            <div>
              <h4 className="font-semibold text-lg mb-4">Message</h4>
              <div className="p-3 bg-gradient-to-b from-teal-300 to-teal-700 text-white rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <img src="doctor-avatar.png" alt="Dr. Alfredo Torres" className="w-8 h-8 rounded-full" />
                  <div>
                    <strong>Dr. Alfredo Torres</strong><br />
                    <small className="text-white text-opacity-80">1 Minute Ago</small>
                  </div>
                </div>
                <p>You automatically lose the chances you don’t take.</p>
              </div>
            </div>
          </aside>
        </div>
      );
}

const navClass = ({ isActive }: any) =>
    `flex items-center gap-2 p-2 mb-2 rounded-lg ${
      isActive ? 'bg-teal-500 text-white' : 'text-gray-500 hover:bg-teal-500 hover:text-white transition'
    }`;

export default MainLayout;
