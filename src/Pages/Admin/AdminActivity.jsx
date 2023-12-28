import Activity from "../../Components/Activity";
import NavBar from "../../Components/NavBar";

const AdminActivity = () => {
  const role = "admin";
  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="md:min-h-screen">
        <NavBar role={role} />
      </div>
      <div className="w-full min-h-screen bg-sky-300">
        <Activity />
      </div>
    </div>
  );
};

export default AdminActivity;
