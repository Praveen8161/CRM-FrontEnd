/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { API } from "../helpers/API";
import PieChart from "./PieChart";

const Dashboard = ({ role }) => {
  const URL = `${API}/${role}/data/alldata`;
  const [allData, setAllData] = useState({
    totalTickets: 0,
    resolvedTicket: 0,
    totalService: 0,
    currSer: 0,
    totalUser: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionToken: localStorage.getItem("CRMSes") }),
    })
      .then((val) => val.json())
      .then((val) => {
        console.log(val);
        if (val.acknowledged) {
          setAllData((prev) => ({
            ...prev,
            ...val.data,
          }));
        }

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        Loading...
      </div>
    );
  }
  return (
    <div className="w-full h-full max-h-[100vh] overflow-y-auto">
      <div className="lg:min-h-[50vh] md:min-h-[30vh] min-h-[20vh] flex flex-col justify-center items-center w-full bg-black text-black object-cover relative">
        <img
          src="/images/worldMap.svg"
          alt="buildings"
          className="  max-h-[50vh] filter contrast-150 w-full h-full object-fill"
        />
        <div className="absolute w-full h-full bg-black/40"></div>
        <div className="absolute left-[50%] translate-x-[-50%] max-w-[400px] translate-y-[-50%] top-[50%] flex flex-col justify-center items-center text-white  px-3 py-2 rounded-lg">
          <h1 className="mb-2 text-xl font-bold md:text-3xl lg:text-5xl">
            Hello there
          </h1>

          <p className="hidden mb-2 text-sm sm:text-md sm:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis, blanditiis temporibus asperiores labore dicta ea
            maiores. In illum blanditiis earum?
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-3 px-3 mt-6 text-xl font-semibold md:py-3 md:flex md:flex-row">
        <div className="w-full md:w-3/5 min-h-[30vh]">
          <PieChart allData={allData} role={role} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
