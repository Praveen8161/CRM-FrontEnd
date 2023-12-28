/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { API } from "../helpers/API";

/* eslint-disable react/prop-types */
const Service = ({ role }) => {
  const [allSer, setAllSer] = useState([]);
  const [currSer, setCurrSer] = useState([]);
  const [userSer, setUserSer] = useState([]);

  const URL = `${API}/${role}/service/getservices`;
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
        if (val.acknowledged) {
          if (val.userService && val.userService.length > 0) {
            setUserSer(val.userService);
            val.userService.forEach((val) => {
              setCurrSer((prev) => [...prev, val._id]);
            });
          }
          setAllSer(val.allServices);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col flex-wrap items-center justify-start w-full h-full gap-3 py-5 sm:gap-6">
      <div
        className={`w-full sm:grid sm:grid-cols-[repeat(auto-fit),minmax(300px,1fr)] flex flex-col justify-center items-center ${
          role !== "user" ? "hidden" : ""
        }`}
      >
        {userSer.length < 1 ? (
          <div className="font-semibold text-center">No Services Added</div>
        ) : (
          userSer.map((val, idx) => (
            <div key={idx}>
              <p>
                <span>Name: </span>
                <span>{val.serviceName}</span>
              </p>
              <p>
                <span>Created on: </span>
                <span>
                  {
                    new Date(val.createdAt)
                      .toISOString()
                      .replace("T", " ")
                      .split(".")[0]
                  }
                </span>
              </p>
            </div>
          ))
        )}
      </div>

      <hr />
      <div
        className={`w-full sm:grid sm:grid-cols-[repeat(auto-fit),minmax(300px,1fr)] flex flex-col justify-center items-center ${
          role !== "user" ? "hidden" : ""
        }`}
      >
        {allSer.length < 1 ? (
          <div className="font-semibold text-center">No Services Added</div>
        ) : (
          allSer
            .filter((val) => {
              return !currSer.includes(val._id);
            })
            .map((val, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start justify-start px-3 py-4"
              >
                <p>
                  <span className="font-semibold">Name: </span>
                  <span>{val.serviceName}</span>
                </p>
                <p>
                  <span className="font-semibold">Created on: </span>
                  <span>
                    {
                      new Date(val.createdAt)
                        .toISOString()
                        .replace("T", " ")
                        .split(".")[0]
                    }
                  </span>
                </p>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Service;
