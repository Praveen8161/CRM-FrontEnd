import Dashboard from "../../Components/Dashboard";
import NavBar from "../../Components/NavBar";

const ManagerDashboard = () => {
  // Role Declaration
  const role = "manager";

  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="md:min-h-screen">
        <NavBar role={role} />
      </div>
      <div className="w-full min-h-screen bg-sky-300">
        <Dashboard role={role} />
      </div>
    </div>
  );
};

export default ManagerDashboard;
