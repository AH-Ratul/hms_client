import React, { useEffect, useState } from "react";
import { MdBedroomChild } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import AddRoom from "./AddRoom";
import axios from "axios";
import Loader from "../Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import DeleteRoom from "../Delete/DeleteRoom";

const Rooms = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openDelete = () => {
    setIsDeleteOpen(true);
  };
  const closeDelete = () => {
    setIsDeleteOpen(false);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await axios.get("http://localhost:5500/getRoom");

        setData(getData.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="flex justify-between border-b border-b-teal-500 pb-2">
        <div>
          <h2 className="flex items-center text-2xl text-teal-600">
            <MdBedroomChild />
            <p className="ml-1  font-semibold">Rooms</p>
          </h2>
        </div>
        <div className="flex items-center">
          <button
            onClick={openModal}
            className="flex items-center bg-green-600 hover:bg-green-700 py-2 px-2 text-xs font-bold text-white rounded"
          >
            <IoAddCircleOutline className="mr-1 text-xl" />
            Add New Room
          </button>
          <AddRoom isOpen={isOpen} onClose={closeModal} />
          <div>
            <button
              onClick={openDelete}
              className="flex items-center bg-red-600 hover:bg-red-500 py-2 px-2 text-sm font-bold text-white rounded ml-3"
            >
              <FontAwesomeIcon icon={faTrashCan} className="mr-1 text-base" />
              Delete Room
            </button>
            <DeleteRoom isOpen={isDeleteOpen} onClose={closeDelete} />
          </div>
        </div>
      </div>
      <div className="mt-5  ">
        <table className="table-auto border-collapse border border-green-400 w-full">
          <thead className="bg-teal-400 text-orange-600">
            <tr>
              <th className="border p-2">Id</th>
              <th className="border ">Room Name</th>
              <th className="border ">Room Type</th>
              <th className="border ">Description</th>
              <th className="border ">Capacity</th>
              <th className="border ">Price</th>
            </tr>
          </thead>
          <tbody className="text-center text-base bg-slate-300 border">
            {data.map((item) => (
              <tr key={item.room_id}>
                <td className="border py-1">{item.room_id}</td>
                <td className="border">{item.name}</td>
                <td className="border">{item.type}</td>
                <td className="border w-[500px]">{item.description}</td>
                <td className="border">{item.capacity}</td>
                <td className="border">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rooms;
