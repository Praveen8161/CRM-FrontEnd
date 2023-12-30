import Dashboard from "../../Components/Dashboard";
import NavBar from "../../Components/NavBar";

const ManagerDashboard = () => {
  // Role Declaration
  const role = "manager";

  return (
    <div className="flex flex-col w-full max-h-screen md:flex-row scrollbar-hide">
      <div className="md:min-h-screen">
        <NavBar role={role} />
      </div>
      <div className="w-full min-h-screen bg-sky-300 scrollbar-hide">
        <Dashboard role={role} />
      </div>
    </div>
  );
};

export default ManagerDashboard;
