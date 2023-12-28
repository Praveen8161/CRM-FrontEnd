import { useState } from "react";
import CreateService from "../../Components/CreateService";
import NavBar from "../../Components/NavBar";
import Service from "../../Components/Service";
import { API } from "../../helpers/API";

const AdminService = () => {
  const [showAdd, setShowAdd] = useState(false);
  const role = "admin";
  const URL = `${API}/${role}/service/createservice`;

  function handleService(serviceName) {
    fetch(URL, {
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
        } else {
          alert(val.error);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="md:min-h-screen">
        <NavBar role={role} />
      </div>
      <div className="w-full min-h-screen bg-sky-300">
        <div className={`w-full ${role != "user" ? "hidden" : ""}`}>
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

        <Service role={role} />
      </div>
    </div>
  );
};

export default AdminService;
