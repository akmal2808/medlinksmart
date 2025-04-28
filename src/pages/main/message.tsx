const MessagesPage: React.FC = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Messages</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold">Dr. Michael Chen</h3>
              <p className="text-gray-600">Your test results look good...</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold">Nurse Practitioner Amy</h3>
              <p className="text-gray-600">Don't forget your appointment...</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MessagesPage;