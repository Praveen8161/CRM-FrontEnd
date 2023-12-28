import NavBar from "../../Components/NavBar";
import Notification from "../../Components/Notification";

const UserNotify = () => {
  const role = "user";
  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="md:min-h-screen">
        <NavBar role={role} />
      </div>
      <div className="w-full min-h-screen bg-sky-300">
        <Notification />
      </div>
    </div>
  );
};

export default UserNotify;
