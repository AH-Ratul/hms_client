import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const DeleteRoom = ({ isOpen, onClose }) => {
  const [id, setId] = useState({
    room_id: "",
  });

  const deleteRoom = async (e) => {
    e.preventDefault();

    if (!id) {
      toast.error("Give Id", { duration: 1500 });
      return;
    }

    try {
      const del = await axios.post("http://localhost:5500/delete-room", {
        room_id: id,
      });
      toast.success(`${del.data.message}`, { duration: 1500 });
    } catch (error) {
      console.log(error);
      toast.error("Sorry!! This Room is booked, you cannot Delete", { duration: 2000 });
    }

    setId({
      room_id: "",
    });
  };
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-center items-center min-h-screen absolute bg-rgba2 w-full">
        <div className="bg-white flex flex-col items-center p-4 rounded">
          <div className="flex items-center text-2xl font-semibold border-b pb-4 w-full">
            <h1>Delete Room</h1>
            <div>
              <button
                onClick={onClose}
                className="bg-red-600 px-3 py-2 font-medium rounded  text-base text-white hover:bg-red-500 ml-[270px]"
              >
                Close
              </button>
            </div>
          </div>
          <div className="mt-6 flex items-center pb-8">
            <div className="flex flex-col mr-9">
              <label htmlFor="id" className="font-bold text-xl mb-2">
                Room id
              </label>
              <input
                type="text"
                name="room_id"
                value={id.room_id}
                onChange={(e) => setId(e.target.value)}
                className="border outline-none py-2 ps-2 rounded"
              />
            </div>
            <button
              onClick={deleteRoom}
              className="bg-red-600 hover:bg-red-500 py-2 px-4 text-white font-semibold rounded mt-9"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default DeleteRoom;
