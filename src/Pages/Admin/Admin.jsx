import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Admin = () => {
  return (
    <div>
      <main className="flex text-white">
        <Sidebar />
        <div className=" w-full bg-gray-50 text-black p-3 pl-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Admin;
