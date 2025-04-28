export default function PharmacyPage() {
    return (
      <div className="p-6">
        <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-6 rounded-2xl mb-6">
          <h1 className="text-2xl font-bold mb-2">Pharmacy Services</h1>
          <p className="text-lg">Get your medications delivered fast</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="pharmacy-card">
            <h3 className="text-lg font-semibold">Prescription Drugs</h3>
            <p className="text-gray-600">Verified prescription medications</p>
          </div>
          <div className="pharmacy-card">
            <h3 className="text-lg font-semibold">OTC Medicines</h3>
            <p className="text-gray-600">Over-the-counter solutions</p>
          </div>
        </div>
      </div>
    );
  }