import React from "react";
import QRScanner from "../../components/scanner";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  const handleLoginSuccess = (userInfo: string) => {
    console.log("Login successful with data:", userInfo);
    // Handle login logic (e.g., storing user info, redirecting, etc.)
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome back!</h1>
      <QRScanner onLoginSuccess={handleLoginSuccess} />
      <Link to="/register">
        <p className="my-4 text-sm underline cursor-pointer hover:text-primary-300">
          Don't have account? Register here
        </p>
      </Link>
    </div>
  );
};

export default App;
