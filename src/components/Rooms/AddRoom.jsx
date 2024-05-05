import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdBedroomChild } from "react-icons/md";

const AddRoom = ({ isOpen, onClose }) => {
  const [roomData, setRoomData] = useState({
    name: "",
    type: "",
    description: "",
    capacity: "",
    price: "",
    image: null,
  });

  // handling image file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setRoomData({ ...roomData, image: file });
  };

  const onRoomChange = (e) => {
    const { name, value } = e.target;
    setRoomData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddRoom = async (e) => {
    e.preventDefault();

    //console.log(roomData);

    if (!roomData.image) {
      toast.error("No file selected", { duration: 1500 });
      return;
    }

    try {
      const formdata = new FormData();
      formdata.append("image", roomData.image);
      // handling image upload
      const imgresponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_APIKEY
        }`,
        formdata
      );

      //console.log(imgresponse)
      if (imgresponse.status === 200) {
        const imgData = imgresponse.data.data.url;

        const dataToSave = {
          name: roomData.name,
          type: roomData.type,
          description: roomData.description,
          capacity: roomData.capacity,
          price: roomData.price,
          image: imgData,
        };

        const addroom = await axios.post(
          "http://localhost:5500/addroom",
          dataToSave
        );
        //console.log(addroom.data);
        toast.success(`${addroom.data.message}`, { duration: 1500 });

        // Clear all input fields
        setRoomData({
          name: "",
          type: "",
          description: "",
          capacity: "",
          price: "",
          image: null,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(`Error`, { duration: 1500 });
    }
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex  items-center justify-center min-h-screen absolute bg-rgba2 w-full ">
        <div className="bg-white flex flex-col items-center  rounded-lg p-4 w-[800px]">
          <div className="flex items-center text-2xl font-semibold text-teal-600 w-full border-b pb-4">
            <MdBedroomChild className="mr-2" />
            <h1>Add Room</h1>
            <div>
              <button
                onClick={onClose}
                className="bg-red-600 px-3 py-2 font-medium rounded-md  text-base text-white hover:bg-red-700 ml-[550px]"
              >
                close
              </button>
            </div>
          </div>

          <div className="mt-9 p-1 flex flex-col  w-full">
            <div className="flex  items-center ">
              <p className="font-medium">Room Name</p>
              <input
                type="text"
                name="name"
                value={roomData.name}
                onChange={onRoomChange}
                placeholder="Room"
                className="border ps-1 py-1 w-64 ml-2 outline-none"
              />
              <p className="font-medium ml-9">Room Type</p>
              <select
                name="type"
                value={roomData.type}
                onChange={onRoomChange}
                className="border py-1 px-2 outline-none ml-2"
              >
                <option value="">Select an option</option>
                <option value="Single" className="bg-green-100">Single</option>
                <option value="Double" className="bg-purple-100">Double</option>
                <option value="Suite" className="bg-blue-100">Suite</option>
                <option value="Deluxe" className="bg-red-100">Deluxe</option>
              </select>
            </div>
            <div className="py-2">
              <p className="font-medium mb-2">Description</p>
              <textarea
                name="description"
                value={roomData.description}
                onChange={onRoomChange}
                cols="30"
                rows="4"
                className="border p-2 outline-none w-full"
              ></textarea>
            </div>
            <div className="flex items-center py-2">
              <p className="font-medium">Capacity</p>
              <input
                type="text"
                name="capacity"
                value={roomData.capacity}
                onChange={onRoomChange}
                placeholder="Capacity"
                className="border ps-1 py-1 w-64 ml-2 outline-none"
              />
              <p className="font-medium ml-9">Price</p>
              <input
                type="text"
                name="price"
                value={roomData.price}
                onChange={onRoomChange}
                placeholder="Price"
                className="border ps-1 py-1 w-64 ml-2 outline-none"
              />

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="ml-2 "
              />
            </div>
          </div>
          <button
            onClick={handleAddRoom}
            className="bg-green-600 hover:bg-green-700 w-28 mt-9 py-2 font-medium text-white rounded-md"
          >
            Add Room
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AddRoom;
