import React from "react";
import { useLocation } from "react-router-dom";
import RoomResults from "../../components/RoomsResults/RoomResults";

const SearchRooms = () => {
  const location = useLocation();
  //console.log(location?.state?.rooms);
  const availableRooms = location?.state?.rooms;

  return (
    <>
      <div className="absolute mt-20 w-full">
        <div className="bg-teal-200">
          <h1 className="text-center font-Literata font-bold text-4xl py-7 text-[#DE3163]">
            Search Rooms
          </h1>
        </div>
        <div className="ml-36 mt-5">
          <h1 className="font-Literata font-bold text-3xl mb-4">
            Check Availability
          </h1>
          <div>
            <input
              type="date"
              className="outline-none border py-2 ps-3 pe-2 mr-8  rounded placeholder:text-slate-600"
            />
            <input
              type="date"
              className="outline-none border py-2 ps-3 pe-2 mr-8  rounded placeholder:text-slate-600"
            />
            <button className=" bg-teal-500 hover:bg-teal-600 font-Literata text-lg py-2 px-4 text-white">
              Check Availability
            </button>
          </div>
          <div>
            {availableRooms.map((room) => (
              <RoomResults key={room.room_id} room={room}></RoomResults>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchRooms;
