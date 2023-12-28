/* eslint-disable react/prop-types */
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiActivity } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ role }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  function handleLogout() {
    localStorage.removeItem("CRMSes");
    if (role === "user") {
      navigate("/", { replace: true });
    } else {
      navigate(`/${role}`, { replace: true });
    }
  }

  return (
    <div className="h-full bg-blue-500">
      <div className="flex justify-end px-1 py-1 sm:px-3 md:hidden">
        <div onClick={() => setShow((prev) => !prev)}>
          <RiMenu3Fill size={30} />
        </div>
        <ul
          className={`absolute flex flex-col gap-8 bg-blue-500  w-56 pl-4 pt-4 h-screen ${
            show
              ? "top-[38px] left-0 delay-150 transition-all"
              : "left-[-900px]"
          } `}
        >
          <li
            onClick={() => navigate(`/${role}/dashboard`)}
            className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center"
          >
            <span>
              <MdOutlineDashboardCustomize size={25} />
            </span>
            <span>Dashboard</span>
          </li>
          <li
            onClick={() => navigate(`/${role}/profile`)}
            className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center"
          >
            <span>
              <FaRegUserCircle size={25} />
            </span>
            <span>Profile</span>
          </li>
          <li
            onClick={() => navigate(`/${role}/ticket`)}
            className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center"
          >
            <span>
              <IoTicketOutline size={25} />
            </span>
            <span>Tickets</span>
          </li>
          <li
            onClick={() => navigate(`/${role}/service`)}
            className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center"
          >
            <span>
              <GrServices size={25} />
            </span>
            <span>Services</span>
          </li>
          <li
            onClick={() => navigate(`/${role}/notification`)}
            className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center"
          >
            <span>
              <IoMdNotificationsOutline size={25} />
            </span>
            <span>Notification</span>
          </li>
          <li
            onClick={() => navigate(`/${role}/activity`)}
            className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center"
          >
            <span>
              <FiActivity size={25} />
            </span>
            <span>Activity</span>
          </li>
          <li
            onClick={handleLogout}
            className="flex flex-row w-full h-16 gap-2 min-h-max cursor-pointer active:top-[2px] relative items-center"
          >
            <span>
              <RiLogoutCircleLine size={25} />
            </span>
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div
        className={`md:flex-col h-full py-5 pl-5 md:flex hidden md:justify-between bg-blue-500 overflow-x-hidden text-lg font-medium ${
          show ? "w-60 pr-2" : "w-16"
        } `}
      >
        <div>
          <div
            onClick={() => setShow((prev) => !prev)}
            className={`flex mb-5 cursor-pointer ${show ? " justify-end" : ""}`}
          >
            {show ? (
              <div className="flex flex-row justify-between w-full">
                <p>
                  Hi <span>{"first_name"}</span>
                </p>
                <RiMenuFoldLine size={30} />
              </div>
            ) : (
              <RiMenuUnfoldLine size={30} />
            )}
          </div>
          <ul className="flex flex-col w-full gap-8">
            <li
              onClick={() => navigate(`/${role}/dashboard`)}
              className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center"
            >
              <span className="hover:top-[-2px] hover:relative">
                <MdOutlineDashboardCustomize size={25} />
              </span>
              <span
                className={` ${
                  show
                    ? "opacity-100 translate-x-0 delay-100 transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Dashboard
              </span>
            </li>
            <li
              onClick={() => navigate(`/${role}/profile`)}
              className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center"
            >
              <span className="hover:top-[-2px] hover:relative">
                <FaRegUserCircle size={25} />
              </span>
              <span
                className={`${
                  show
                    ? "opacity-100 translate-x-0 delay-[200ms] transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Profile
              </span>
            </li>
            <li
              onClick={() => navigate(`/${role}/ticket`)}
              className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center"
            >
              <span className="hover:top-[-2px] hover:relative">
                <IoTicketOutline size={25} />
              </span>
              <span
                className={`${
                  show
                    ? "opacity-100 translate-x-0 delay-[300ms] transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Tickets
              </span>
            </li>
            <li
              onClick={() => navigate(`/${role}/service`)}
              className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center"
            >
              <span className="hover:top-[-2px] hover:relative">
                <GrServices size={25} />
              </span>
              <span
                className={`${
                  show
                    ? "opacity-100 translate-x-0 delay-[400ms] transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Services
              </span>
            </li>
            <li
              onClick={() => navigate(`/${role}/notification`)}
              className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center"
            >
              <span className="hover:top-[-2px] hover:relative">
                <IoMdNotificationsOutline size={25} />
              </span>
              <span
                className={`${
                  show
                    ? "opacity-100 translate-x-0 delay-[500ms] transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Notification
              </span>
            </li>
            <li
              onClick={() => navigate(`/${role}/activity`)}
              className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center"
            >
              <span className="hover:top-[-2px] hover:relative">
                <FiActivity size={25} />
              </span>
              <span
                className={`${
                  show
                    ? "opacity-100 translate-x-0 delay-[600ms] transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Activity
              </span>
            </li>
          </ul>
        </div>

        <div>
          <button
            onClick={handleLogout}
            className="flex flex-row w-full h-16 gap-2 min-h-max cursor-pointer active:top-[2px] relative items-center"
          >
            <span className="hover:top-[-2px] hover:relative">
              <RiLogoutCircleLine size={25} />
            </span>
            <span
              className={`${
                show
                  ? "opacity-100 translate-x-0 delay-[700ms] transition-all"
                  : "opacity-0 translate-x-16"
              }`}
            >
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
{
  /* <div className="w-72">
          <ul className="flex flex-col w-full gap-8">
            <li className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center">
              <span>
                <MdOutlineDashboardCustomize size={25} />
              </span>
              <span
                className={` ${
                  show
                    ? "opacity-100 translate-x-0 delay-100 transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Dashboard
              </span>
            </li>
            <li className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center">
              <span>
                <FaRegUserCircle size={25} />
              </span>
              <span
                className={`${
                  show
                    ? "opacity-100 translate-x-0 delay-[200ms] transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Profile
              </span>
            </li>
            <li className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center">
              <span>
                <IoTicketOutline size={25} />
              </span>
              <span
                className={`${
                  show
                    ? "opacity-100 translate-x-0 delay-[300ms] transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Tickets
              </span>
            </li>
            <li className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center">
              <span>
                <GrServices size={25} />
              </span>
              <span
                className={`${
                  show
                    ? "opacity-100 translate-x-0 delay-[400ms] transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Services
              </span>
            </li>
            <li className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center">
              <span>
                <IoMdNotificationsOutline size={25} />
              </span>
              <span
                className={`${
                  show
                    ? "opacity-100 translate-x-0 delay-[500ms] transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Notification
              </span>
            </li>
            <li className="relative flex flex-row gap-2 cursor-pointer active:top-[2px] items-center">
              <span>
                <FiActivity size={25} />
              </span>
              <span
                className={`${
                  show
                    ? "opacity-100 translate-x-0 delay-[600ms] transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Activity
              </span>
            </li>
            <li className="flex flex-row w-full gap-2 min-h-max cursor-pointer active:top-[2px] relative items-center">
              <span>
                <RiLogoutCircleLine size={25} />
              </span>
              <span
                className={`${
                  show
                    ? "opacity-100 translate-x-0 delay-[700ms] transition-all"
                    : "opacity-0 translate-x-16"
                }`}
              >
                Logout
              </span>
            </li>
          </ul>
        </div> */
}
