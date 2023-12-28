/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { API } from "../helpers/API";
import CreateNotify from "./CreateNotify";

const Notification = ({ role }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [notify, setNotify] = useState([]);
  const URLCreate = `${API}/${role}/notify/createnotify`;
  const URLGet = `${API}/${role}/notify/allnotify`;

  // Update the read status for the User
  function handleRead(id) {
    try {
      if (role !== "user") return;
      const updated = notify.map((val) => {
        if (val._id === id && !val.notification.readStatus) {
          val.notification.readStatus = true;
        }
        return val;
      });
      setNotify(updated);
    } catch (err) {
      console.log(err);
    }
  }

  // Delete the notification from user database
  function handleDelete(id) {
    console.log(id);
    const updated = notify.filter((val) => {
      if (val._id === id) {
        console.log(val._id === id);
        return false;
      }
      return true;
    });
    setNotify(updated);
  }

  function handleNotify(notData) {
    fetch(URLCreate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...notData,
        sessionToken: localStorage.getItem("CRMSes"),
      }),
    })
      .then((val) => val.json())
      .then((val) => {
        if (val.acknowledged) {
          setNotify((prev) => [...prev, val.data]);
          alert("Notification Sent Successfully");
          setShowAdd(false);
        } else {
          alert(val.error);
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }

  useEffect(() => {
    fetch(URLGet, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionToken: localStorage.getItem("CRMSes"),
      }),
    })
      .then((val) => val.json())
      .then((val) => {
        if (val.acknowledged) {
          setNotify([...val.notifications]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col flex-wrap items-center justify-start w-full h-full gap-3 p-5 sm:gap-6">
      <div className={`w-full ${role === "user" ? "hidden" : ""}`}>
        {showAdd ? (
          <div className="w-full">
            <CreateNotify
              handleNotify={handleNotify}
              showAdd={showAdd}
              setShowAdd={setShowAdd}
            />
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-row justify-center px-8">
          {showAdd ? (
            ""
          ) : (
            <button
              onClick={() => {
                setShowAdd(true);
              }}
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Create Notification
            </button>
          )}
        </div>
      </div>
      <div className="w-full">
        {notify.length < 1 ? (
          <div className="font-semibold">No Notification found</div>
        ) : (
          <div className="mx-5 space-y-2">
            {notify.reverse().map((val, idx) => (
              <div
                onClick={() => handleRead(val._id)}
                key={idx}
                className="flex flex-col gap-2 p-5 text-white bg-teal-700 rounded-lg group"
                tabIndex="1"
              >
                <div className="flex items-center justify-between cursor-pointer">
                  <span> {val.notificationName} </span>
                  <div className="flex flex-row gap-12 flex-nowrap">
                    <div
                      onClick={() => handleDelete(val._id)}
                      className={`w-3 h-2 transition-all duration-500 group-focus:translate-y-[-5px] ${
                        role !== "user" ? "hidden" : ""
                      } `}
                    >
                      <MdDelete />
                    </div>
                    <div className="w-3 h-2 transition-all duration-500 group-focus:-rotate-180">
                      <IoIosArrowDown />
                    </div>
                  </div>
                </div>
                <div className="items-center invisible h-auto transition-all opacity-0 max-h-0 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                  <p>{val.message}</p>
                  <p>{new Date(val.createdAt).toISOString().split("T")[0]}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
