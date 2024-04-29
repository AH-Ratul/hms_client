import React from "react";
import { NavLink } from "react-router-dom";

const RoomResults = ({ room }) => {
  const {room_id, name, type, image, price } = room;
  return (
    <div className="mt-14 flex">
      <img src={image} alt="" className="w-96" />
      <div className="flex flex-col ml-9 mt-5">
        <h1 className="text-5xl font-bold font-Literata text-[#2a2a2a]">
          {name}
        </h1>
        <p className="text-base py-5">Room Type: {type}</p>
        <p className="text-base">
          Price: <span className="text-yellow-500">{price}</span>
        </p>
        <NavLink to={`/booking/${room_id}/${name}`} className="bg-amber-500 hover:bg-amber-600 py-2 px-16 w-fit mt-8 text-white">Select This Room</NavLink>
      </div>
    </div>
  );
};

export default RoomResults;
