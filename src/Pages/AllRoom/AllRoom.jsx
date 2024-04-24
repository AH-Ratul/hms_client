import React from "react";
import { useLoaderData } from "react-router-dom";
import RoomCart from "../../components/Rooms/RoomCart";

const AllRoom = () => {
  const allroom = useLoaderData();
  const allrooms = allroom.data;

  return (
    <div className="mt-28 absolute">
      <div className="flex flex-wrap gap-5 ml-20 ">
        {allrooms.map((rooms) => (
          <RoomCart key={rooms.room_id} rooms={rooms}></RoomCart>
        ))}
      </div>
    </div>
  );
};

export default AllRoom;
