import NavBar from "../../Components/NavBar";
import Profile from "../../Components/Profile";

const AdminProfile = () => {
  const role = "admin";

  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="md:min-h-screen">
        <NavBar role={role} />
      </div>
      <div className="w-full min-h-screen bg-sky-300">
        <Profile />
      </div>
    </div>
  );
};

export default AdminProfile;
