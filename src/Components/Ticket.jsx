/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CreateTicket from "./CreateTicket";
import { API } from "../helpers/API";

const Ticket = ({ role }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [showRes, setShowres] = useState(false);
  const [resData, setResData] = useState({
    name: "",
    number: "",
    message: "",
    createdAt: "",
    role: "",
  });
  const [ticketData, setTicketData] = useState([]);

  const [mes, setMes] = useState("");
  const [err, setErr] = useState("");

  const URLCreate = `${API}/${role}/ticket/create`;

  function handleTicket(ticData) {
    fetch(URLCreate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticData),
    })
      .then((val) => val.json())
      .then((val) => {
        if (val.acknowledged) {
          setErr("");
          setMes(val.message);
          setShowAdd(false);
          console.log(val.data);
          setTicketData((prev) => [...prev, val.data]);
        } else {
          setMes("");
          setErr(val.error);
        }
      })
      .catch((err) => {
        console.log(err);
        setMes("");
        setErr("Error Creating Ticket");
      });
  }

  const URLGet = `${API}/${role}/ticket/view`;
  useEffect(() => {
    fetch(URLGet, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionToken: localStorage.getItem("CRMSes") }),
    })
      .then((val) => val.json())
      .then((val) => {
        if (val.acknowledged) {
          setTicketData([...val.tickets]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col flex-wrap items-center justify-start w-full h-full gap-3 p-5 sm:gap-6">
      <div className={`w-full ${role != "user" ? "hidden" : ""}`}>
        {showAdd ? (
          <div className="w-full">
            <CreateTicket
              handleTicket={handleTicket}
              showAdd={showAdd}
              setShowAdd={setShowAdd}
              setMes={setMes}
              setErr={setErr}
              mes={mes}
              err={err}
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
              Create Ticket
            </button>
          )}
        </div>
      </div>
      <hr className="w-full h-px bg-gray-900 shadow-md" />
      <p className="w-full text-xl font-semibold text-start">Tickets</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] items-start justify-start w-full gap-8 py-4 sm:flex-row">
        {ticketData.length < 1 ? (
          <div className="font-semibold text-center">No Tickets Found</div>
        ) : (
          ticketData.map((val, idx) => (
            <div
              key={idx}
              className="sm:min-w-[280px] min-w-270px flex flex-col items-start justify-start px-3 py-2 rounded-md  bg-slate-100"
            >
              <p>
                <span className="font-semibold">Ticket Number: </span>
                <span>{val.ticketNumber}</span>
              </p>
              <p>
                <span className="font-semibold">Name: </span>
                <span>{val.ticketName}</span>
              </p>
              <p>
                <span className="font-semibold">Message: </span>
                <span>{val.ticketMessage}</span>
              </p>
              <p>
                <span className="font-semibold">Created At: </span>
                <span>
                  {new Date(val.createdAt).toISOString().split("T")[0]}
                </span>
              </p>
              {role !== "user" ? (
                <button
                  onClick={() => {
                    setShowres(true);
                    setResData({
                      name: val.ticketName,
                      number: val.ticketNumber,
                      message: val.ticketMessage,
                      createdAt: val.createdAt,
                      _id: val._id,
                    });
                  }}
                  className={`px-3 relative py-1 text-white  rounded hover:bg-green-500 active:top-[-2px] ${
                    val.resolvedBy ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {val.resolvedBy ? "Cleared" : "Resolve"}
                </button>
              ) : (
                ""
              )}
            </div>
          ))
        )}

        {showRes ? (
          <Resolve setShowres={setShowres} resData={resData} role={role} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const Resolve = function ({ resData, setShowres, role }) {
  const [comment, setComment] = useState("");
  const URL = `${API}/${role}/ticket/resolve`;
  function handlResolve() {
    if (!comment) {
      alert("Fields are required");
      return;
    }

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionToken: localStorage.getItem("CRMSes"),
        ticketId: resData._id,
        comment: comment,
      }),
    })
      .then((val) => val.json())
      .then((val) => {
        if (val.acknowledged) {
          alert(val.message);
          setShowres(false);
        } else {
          alert(val.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="fixed top-0 flex items-center justify-center w-screen h-screen bg-black/25">
      <div className="min-w-[380px] flex flex-col px-4 py-3 bg-slate-300">
        <div>
          <p className="font-semibold ">Ticket Number</p>
          <p>{resData.number}</p>
        </div>
        <div>
          <p className="font-semibold ">Name</p>
          <p>{resData.name}</p>
        </div>
        <div>
          <p className="font-semibold ">Message</p>
          <p>{resData.message}</p>
        </div>
        <div>
          <p className="font-semibold ">CreatedAt</p>
          <p>{new Date(resData.createdAt).toISOString().split("T")[0]}</p>
        </div>

        <textarea
          type="text"
          placeholder="Ticket Message"
          name="ticketMessage"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none my-2"
        ></textarea>
        <div className="flex flex-row items-center justify-center gap-5">
          <button
            onClick={() => {
              setShowres(false);
            }}
            className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Cancel
          </button>

          <button
            onClick={handlResolve}
            className="px-3 py-1 text-white bg-green-600 rounded hover:bg-green-700"
          >
            Resolve
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
