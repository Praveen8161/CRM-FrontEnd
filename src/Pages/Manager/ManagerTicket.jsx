import NavBar from "../../Components/NavBar";
import Ticket from "../../Components/Ticket";

const ManagerTicket = () => {
  const role = "manager";

  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="md:min-h-screen">
        <NavBar role={role} />
      </div>
      <div className="w-full min-h-screen bg-sky-300">
        <Ticket />
      </div>
    </div>
  );
};

export default ManagerTicket;