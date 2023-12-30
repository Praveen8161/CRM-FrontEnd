import NavBar from "../../Components/NavBar";
import Notification from "../../Components/Notification";

const AdminNotify = () => {
  // Role Declaration
  const role = "admin";

  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="md:min-h-screen">
        <NavBar role={role} />
      </div>
      <div className="w-full min-h-screen bg-sky-300">
        <Notification role={role} />
      </div>
    </div>
  );
};

export default AdminNotify;
