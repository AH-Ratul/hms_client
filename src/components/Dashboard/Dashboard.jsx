import axios from "axios";
import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

export const loadTotal = async () => {
  const totalData = await axios.get("http://localhost:5500/total-booking");
  return totalData;
};

const Dashboard = () => {
  const total = useLoaderData();
  const data = total.data;

  return (
    <div>
      <h1 className="flex items-center text-2xl text-teal-600 border-b border-b-teal-500 pb-2">
        <AiFillDashboard />
        <p className="ml-1  font-semibold">Dashboard</p>
      </h1>
      <div className="flex flex-wrap gap-7 mt-7 font-bold text-white/80">
        <div className="rounded w-[25%] leading-relaxed shadow-lg p-5 text-3xl bg-green-700">
          <h2>Total Room </h2>
          <span>{data.totalRoom}</span>
        </div>
        <div className="rounded w-[25%] leading-relaxed shadow-lg p-5 text-3xl bg-blue-700">
          <p>Total Employee</p>
          <span>{data.totalEmployee}</span>
        </div>
        <div className="rounded w-[25%] leading-relaxed shadow-lg p-5 text-3xl bg-orange-600">
          <h2>Total Booking </h2>
          <span>{data.totalBooking}</span>
        </div>
       
      </div>
    </div>
  );
};

export default Dashboard;
