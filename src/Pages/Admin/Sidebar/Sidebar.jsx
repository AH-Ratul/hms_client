import React from "react";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Provider/AuthProvider";

const Sidebar = () => {
  const { admin, adminLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    adminLogout();
    navigate("/admin-login");
  };
  return (
    <div>
      <div className="w-60 h-screen pt-5 text-white/70 pl-6 bg-gray-800">
        <h1 className="text-2xl  font-semibold ">ADMIN PANEL</h1>
        <div className="flex flex-col mt-5 pl-0 text-lg font-semibold">
          <NavLink to="/admin" className="py-2 pl-2 hover:bg-gray-700">
            Dashboard
          </NavLink>
          <NavLink to="/rooms" className="py-2 pl-2 hover:bg-gray-700">
            All Rooms
          </NavLink>
          <NavLink to="/employee" className="py-2 pl-2  hover:bg-gray-700">
            Employees
          </NavLink>
          <NavLink to='/booking-details' className="py-2 pl-2 hover:bg-gray-700">Bookings</NavLink>
          
        </div>
        {admin ? (
          <button
            onClick={handleLogout}
            className="bg-gray-600 rounded-md font-semibold px-8 py-2 flex items-center text-center text-red-300 text-base mt-52 "
          >
            Sign Out
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="pl-2 text-base"
            />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
