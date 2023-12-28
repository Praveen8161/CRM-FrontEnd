/* eslint-disable react/prop-types */
import { useState } from "react";

const CreateTicket = ({
  setShowAdd,
  setMes,
  mes,
  err,
  setErr,
  handleTicket,
}) => {
  const [ticData, setTicData] = useState({
    ticketName: "",
    ticketMessage: "",
  });

  function reset() {
    setMes("");
    setErr("");
  }

  function checkData(uD) {
    for (let i in uD) {
      if (!uD[i]) {
        setErr("Fields are required");
        return true;
      }
    }
  }

  function handleChange(e) {
    reset();
    setTicData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClick() {
    reset();
    let chk = checkData(ticData);
    if (chk) return;
    setMes("Creating Ticket ...");
    handleTicket(ticData);
  }

  return (
    <div className="flex flex-col w-full gap-5 px-3 mx-auto xl:w-2/6 lg:w-3/6 md:w-3/6 sm:w-4/6 xs:w-5/6 xs:max-w-[400px] sm:max-w-none">
      <h1 className="font-bold text-center font-xs">Create a Ticket</h1>

      <input
        type="text"
        placeholder="Ticket Name"
        name="ticketName"
        value={ticData.ticketName}
        onChange={(e) => handleChange(e)}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
      />

      <textarea
        type="text"
        placeholder="Ticket Message"
        name="ticketMessage"
        value={ticData.ticketMessage}
        onChange={(e) => handleChange(e)}
        className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
      >
        {" "}
      </textarea>

      {mes ? (
        <div className="text-xs font-medium text-center text-green-800">
          {mes}
        </div>
      ) : err ? (
        <div className="text-xs font-medium text-center text-red-800">
          {err}
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-row items-center justify-center gap-5">
        <button
          onClick={() => {
            reset();
            setShowAdd(false);
          }}
          className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Cancel
        </button>

        <button
          onClick={handleClick}
          className="px-3 py-1 text-white bg-green-400 rounded hover:bg-green-700"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateTicket;
