import { IoTicketOutline } from "react-icons/io5";
import { GrServices } from "react-icons/gr";

const Dashboard = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center gap-3 px-3 py-3 text-xl font-semibold md:justify-around md:flex md:flex-row">
        <div className=" bg-yellow-400 md:max-w-[380px] max-w-[400px] min-w-[250px] sm:min-w-[300px] rounded-md py-3 px-2 flex flex-col gap-4">
          <h1 className="flex flex-row items-center justify-center gap-2 flex-nowrap ">
            <span>
              <IoTicketOutline size={25} />
            </span>
            <span>Tickets</span>
          </h1>
          <div className="flex flex-row gap-2">
            <span>Total Tickets:</span>
            <span className="font-normal">30</span>
          </div>
          <div className="flex flex-row gap-2">
            <span>Resolved Tickets:</span>
            <span className="font-normal">25</span>
          </div>
        </div>
        <div className=" md:max-w-[380px] min-w-[250px] sm:min-w-[300px] max-w-[400px] rounded-md py-3 px-2 flex flex-col gap-4 bg-yellow-400">
          <h1 className="flex flex-row items-center justify-center gap-2 flex-nowrap">
            <span>
              <GrServices size={25} />
            </span>
            <span>Services</span>
          </h1>
          <div className="flex flex-row gap-2">
            <span>Total Services:</span>
            <span className="font-normal">30</span>
          </div>
          <div className="flex flex-row gap-2">
            <span>Current Services:</span>
            <span className="font-normal">25</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
