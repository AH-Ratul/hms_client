import React, { useEffect, useState } from "react";
import Feature1 from "../../components/Feature1/Feature1";
import RoomCart from "../../components/Rooms/RoomCart";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

// function to load rooms
export const loadRooms = async () => {
  const fetchedData = await axios.get("http://localhost:5500/getRoom");
  return fetchedData;
};

const Home = () => {
  const [checkData, setCheckData] = useState({
    check_inn: "",
    check_Out: "",
  });

  const OnChange = (e) => {
    const { name, value } = e.target;
    setCheckData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //
  const roomdata = useLoaderData();
  const sliceRoom = roomdata.data.slice(0, 3);
  //console.log(sliceRoom)


  const handleCheckAvailability = (e) => {
    e.preventDefault();
    console.log(checkData)

    setCheckData({
      check_inn: '',
      check_Out: ''
    })
  }

  return (
    <div className="h-screen relative bg-cover bg-center w-full bg-[url('../../../public/img/beach3.jpg')]">
      <div className=" text-center items-center bg-rgba1 h-screen">
        <div className="pt-52">
          <h5 className="text-2xl font-semibold text-white">Enjoy Your</h5>
          <h1 className="text-[75px] font-bold text-white">Dream Vacation</h1>
        </div>
      </div>
      <div className="text-center bg-[#F8F9F9] mr-60 ml-60 py-7 shadow-md rounded-xl -mt-14 absolute w-[800px]">
        <h1 className="text-3xl font-bold font-serif mb-6">
          Check Availability
        </h1>
        <div>
          <input
            type="date"
            name= 'check_inn'
            value={checkData.check_inn}
            onChange={OnChange}
            placeholder="Check-in"
            className="outline-none border py-2 ps-3 pe-2 mr-8  rounded placeholder:text-slate-600"
          />
          <input
            type="date"
            name="check_Out"
            value={checkData.check_Out}
            onChange={OnChange}
            className="outline-none border py-2 ps-3 pe-2  rounded placeholder:text-slate-600"
          />
          <button onClick={handleCheckAvailability} className="ml-8 bg-teal-500 hover:bg-teal-600 font-Literata text-lg py-2 px-4 text-white">
            Check Availability
          </button>
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
