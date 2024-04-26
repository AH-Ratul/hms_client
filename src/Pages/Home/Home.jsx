import React, { useEffect, useState } from "react";
import Feature1 from "../../components/Feature1/Feature1";
import RoomCart from "../../components/Rooms/RoomCart";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

// function to load rooms 
export const loadRooms = async () => {
  const fetchedData = await axios.get('http://localhost:5500/getRoom')
  return fetchedData;
};

const Home = () => {
  // 
  const roomdata = useLoaderData();
  const sliceRoom = roomdata.data.slice(0,3);
  //console.log(sliceRoom)


  return (
    <div className="h-screen relative bg-cover bg-center w-full bg-[url('../../../public/img/beach3.jpg')]">
      <div className=" text-center items-center bg-rgba1 h-screen">
        <div className="pt-52">
          <h5 className="text-2xl font-semibold text-white">Enjoy Your</h5>
          <h1 className="text-[75px] font-bold text-white">Dream Vacation</h1>
        </div>
      </div>
      <div>
        <Feature1 />
      </div>
      <div className="mt-[150px] absolute left-20">
        <div>
          <h1 className=" font-semibold text-5xl text-gray-700 ">Our Rooms</h1>
          <div className="border-b-2  border-b-orange-600 mt-4 w-28" />
        </div>
        <div className="mt-9 flex flex-wrap mb-3 gap-5">
          {sliceRoom.map((rooms) => (
            <RoomCart key={rooms.room_id} rooms={rooms}></RoomCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
