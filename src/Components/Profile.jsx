/* eslint-disable react/prop-types */
import { useState } from "react";

const Profile = ({ updateProfile, mes, err, setErr, setMes }) => {
  const [userData, setUserData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phoneNumber: "",
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
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClick() {
    reset();
    let chk = checkData(userData);
    if (chk) return;
    setMes("Updating Profile ...");
    updateProfile(userData);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6">
      <p className="text-2xl font-bold">Profile</p>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="sm:w-72 w-60 ">
          <p className="font-semibold">Email:</p>
          <input
            type="text"
            placeholder="Email"
            name="email"
            disabled
            className="bg-gray-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="sm:w-72 w-60 ">
          <p className="font-semibold">First Name:</p>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            value={userData.first_name}
            onChange={(e) => handleChange(e)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="sm:w-72 w-60 ">
          <p className="font-semibold">Last Name:</p>
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            value={userData.last_name}
            onChange={(e) => handleChange(e)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="sm:w-72 w-60 ">
          <p className="font-semibold">Phone Number:</p>
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={(e) => handleChange(e)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        {mes ? (
          <div className="text-xs font-medium text-green-500">{mes}</div>
        ) : err ? (
          <div className="text-xs font-medium text-red-500">{err}</div>
        ) : (
          ""
        )}
        <a
          onClick={handleClick}
          href="#_"
          className="relative inline-flex items-center justify-start px-4 py-1 overflow-hidden font-medium transition-all bg-blue-700 rounded hover:bg-white group active:top-[1.5px]"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-green-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-black">
            Save
          </span>
        </a>
      </div>
    </div>
  );
};

export default Profile;
