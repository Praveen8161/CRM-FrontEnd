import Dashboard from "../../Components/Dashboard";
import NavBar from "../../Components/NavBar";

const UserDashboard = () => {
  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="md:min-h-screen">
        <NavBar />
      </div>
      <div className="w-full min-h-screen bg-sky-300">
        <Dashboard />
      </div>
    </div>
  );
};

export default UserDashboard;
