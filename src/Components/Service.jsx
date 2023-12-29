/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { API } from "../helpers/API";
import CreateService from "./CreateService";

/* eslint-disable react/prop-types */
const Service = ({ role, handleSerDel }) => {
  const [allSer, setAllSer] = useState([]);
  const [currSer, setCurrSer] = useState([]);

  const [showAdd, setShowAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
          if (val.userSer && val.userSer.length > 0) {
            val.userSer.forEach((data) => {
              setCurrSer((prev) => [...prev, data._id]);
            });
          }
          setAllSer(val.allServices);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const URLAdd = `${API}/${role}/service/createservice`;

  // Add new Service only Admin
  function handleService(serviceName) {
    if (!serviceName) {
      alert("Fields are required");
      return;
    }
    fetch(URLAdd, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionToken: localStorage.getItem("CRMSes"),
        serviceName,
      }),
    })
      .then((val) => val.json())
      .then((val) => {
        if (val.acknowledged) {
          alert(val.message);
          setShowAdd(false);
          setAllSer((prev) => [...prev, val.data]);
        } else {
          alert(val.error);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  // Add Services to user
  function handleNewUserSer(id) {
    let URL = `${API}/user/service/changeservice`;
    fetch(URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionToken: localStorage.getItem("CRMSes"),
        services: [...currSer, id],
      }),
    })
      .then((val) => val.json())
      .then((val) => {
        if (val.acknowledged) {
          alert(val.message);
          setCurrSer(val.data);
        } else {
          alert(val.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Remove Services from user
  function handleDelUserSer(id) {
    if (currSer.length < 1) {
      alert("No service available");
      return;
    }

    const updatedSer = currSer.filter((data) => {
      return data !== id;
    });

    setCurrSer(() => updatedSer);
    let URL = `${API}/user/service/changeservice`;
    fetch(URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionToken: localStorage.getItem("CRMSes"),
        services: updatedSer.length > 0 ? updatedSer : [],
      }),
    })
      .then((val) => val.json())
      .then((val) => {
        if (val.acknowledged) {
          alert(val.message);
        } else {
          alert(val.error);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Service delete only by Admin
  async function handleDelete(id) {
    const result = await handleSerDel(id);

    if (result) {
      const updated = allSer.filter((data) => {
        return data._id !== id;
      });
      setAllSer(updated);
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex scrollbar-hide flex-col max-h-[100vh] overflow-y-auto items-center justify-start w-full h-full gap-3 py-5 sm:gap-6">
      {/* Create service only by Admin */}
      <div className={`w-full ${role != "admin" ? "hidden" : ""}`}>
        {showAdd ? (
          <div className="w-full">
            <CreateService
              handleService={handleService}
              setShowAdd={setShowAdd}
            />
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-row justify-end px-8">
          {showAdd ? (
            ""
          ) : (
            <button
              onClick={() => {
                setShowAdd(true);
              }}
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Create Service
            </button>
          )}
        </div>
      </div>

      <hr className="h-px" />
      {/* All Services */}
      <div
        className={`w-full sm:grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] text-slate-100 flex flex-col px-5 gap-5 place-items-center `}
      >
        {allSer.length < 1 ? (
          <div className="font-semibold text-center">No Services Added</div>
        ) : (
          allSer.map((val) => (
            <div
              key={val._id}
              className={`flex flex-col items-start justify-start w-full gap-5 px-3 py-4 rounded-md max-w-[400px]
                ${currSer.includes(val._id) ? "bg-green-500" : "bg-blue-800"}
                `}
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

              {role === "user" ? (
                currSer.includes(val._id) ? (
                  <p>
                    <span
                      onClick={() => handleDelUserSer(val._id)}
                      className="px-3 py-2 font-semibold bg-red-600 rounded-md relative active:top-[2px] cursor-pointer"
                    >
                      Stop Service
                    </span>
                  </p>
                ) : (
                  <p>
                    <span
                      onClick={() => handleNewUserSer(val._id)}
                      className="px-3 py-2 font-semibold bg-green-600 rounded-md relative active:top-[2px] cursor-pointer"
                    >
                      Use Service
                    </span>
                  </p>
                )
              ) : (
                ""
              )}

              {role !== "user" ? (
                <>
                  <p>
                    <span>Current Users: </span>
                    <span>{val.currentUser.length || 0}</span>
                  </p>
                  <p>
                    <span>Old Users: </span>
                    <span>{val.oldUser.length || 0}</span>
                  </p>
                </>
              ) : (
                ""
              )}
              {role === "admin" ? (
                <button
                  onClick={() => handleDelete(val._id)}
                  className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700 relative top-[-2px]"
                >
                  Delete
                </button>
              ) : (
                ""
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Service;
