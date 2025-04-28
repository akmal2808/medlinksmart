export default function HealthcareMonitoringPage() {
    return (
      <div className="p-6">
        <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-6 rounded-2xl mb-6">
          <h1 className="text-2xl font-bold mb-2">Health Monitoring</h1>
          <p className="text-lg">Track your health metrics in real-time</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="metric-card">
            <h3 className="text-xl font-semibold">Heart Rate</h3>
            <div className="text-3xl font-bold text-teal-600">72 BPM</div>
          </div>
          <div className="metric-card">
            <h3 className="text-xl font-semibold">Blood Pressure</h3>
            <div className="text-3xl font-bold text-teal-600">120/80 mmHg</div>
          </div>
        </div>
      </div>
    );
  }