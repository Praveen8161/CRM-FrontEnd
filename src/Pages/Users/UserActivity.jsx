import Activity from "../../Components/Activity";
import NavBar from "../../Components/NavBar";

const UserActivity = () => {
  //Role declaration
  const role = "user";

  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="md:min-h-screen">
        <NavBar role={role} />
      </div>
      <div className="w-full min-h-screen bg-sky-300">
        <Activity role={role} />
      </div>
    </div>
  );
};

export default UserActivity;
