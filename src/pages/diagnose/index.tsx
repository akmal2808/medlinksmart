  import Navbar from "@/scenes/navbar";
  import { useState, useEffect } from "react";
  import { SelectedPage } from "@/utils/types";
  import { Link } from "react-router-dom";

  const Diagnoses = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
      SelectedPage.Home,
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home);
        } else {
          setIsTopOfPage(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div className="flex flex-col w-full min-h-screen">
        
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        
        <div className="pt-[96px] px-5 md:px-28 flex flex-col gap-10 pb-20">
          
          <div className="flex flex-col md:flex-row gap-10">
            
            <div className="flex flex-col w-full md:w-1/2 border-2 rounded-md border-gray-100 shadow-sm">
              <div className="h-[50px] flex items-center bg-gray-50 border-b-2 border-gray-100">
                <p className="pl-5 text-xl font-semibold">Patient Information</p>
              </div>
              <div className="flex flex-col gap-4 p-5 text-sm md:text-base">
                <p>Miftahul Huda</p>
                <p>23 10 2002</p>
                <p>Perumahan Indra Indah No. 148 Bolon Colomadu</p>
                <p>Mahasiswa</p>
                <p>Islam</p>
              </div>
            </div>

            
            <div className="flex flex-col w-full md:w-1/2 border-2 rounded-md border-gray-100 shadow-sm">
              <div className="h-[50px] flex items-center bg-gray-50 border-b-2 border-gray-100">
                <p className="pl-5 text-xl font-semibold">Current Vital Signs</p>
              </div>
              <div className="flex flex-col sm:flex-row w-full h-full">
                <div className="flex-1 flex flex-col items-center justify-center gap-2 py-6">
                  <p className="text-lg font-medium">Temperature</p>
                  <p className="text-4xl font-bold">25.42</p>
                  <p className="text-sm">C</p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-2 py-6">
                  <p className="text-lg font-medium">Blood Pressure</p>
                  <p className="text-4xl font-bold">119</p>
                  <p className="text-sm">mmHg</p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="flex flex-col w-full border-2 rounded-md border-gray-100 shadow-sm">
            <div className="h-[50px] flex items-center bg-gray-50 border-b-2 border-gray-100">
              <p className="pl-5 text-xl font-semibold">Historical Data</p>
            </div>
            <div className="flex-1 p-5">
              <p className="text-gray-500 italic">No data available yet.</p>
            </div>
          </div>

          
          <Link to="/inputdata" className="self-start text-blue-600 hover:underline hover:text-teal-600">
            Kirim Data
          </Link>
        </div>
      </div>
    );
  };

  export default Diagnoses;
