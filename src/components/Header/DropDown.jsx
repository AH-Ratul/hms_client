import React from "react";
import { useAuth } from "../../Provider/AuthProvider";

const DropDown = () => {
  const { user, userlogout } = useAuth();

  const handleUserLogout = () => {
    userlogout();
  };
  return (
    <div className="right-0 ml-40 bg-white mt-4 p-5 absolute border w-[220px]">
      {user ? (
        <div className="flex flex-col p-1 border-b pb-4">
          <h1 className="text-base font-semibold text-rose-600">
            {user.username}
          </h1>
          <p className="text-sm mt-1 text-gray-500">{user.email}</p>
        </div>
      ) : null}
      <button
        onClick={handleUserLogout}
        className="mr-5 text-base font-semibold mt-3 text-teal-600 hover:text-teal-400 "
      >
        Sign out
      </button>
    </div>
  );
};

export default DropDown;
