import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../../components/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import DeleteBooking from "../../../components/Delete/DeleteBooking";

const BookingDetails = () => {
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);

  // hadling modal state
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    handlePathChange()
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingData = await axios.get(
          "http://localhost:5500/booking-details"
        );

        setGetData(bookingData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const data = getData.data;
  //console.log(getData)

  if (loading) {
    <Loader />;
  }
  return (
    <div>
      <div className="flex justify-between border-b border-b-teal-500 pb-2">
        <div>
          <h2 className="flex items-center text-2xl text-teal-600">
            <p className="ml-1 font-semibold flex">
              <img
                src="../../../../public/img/booking.png"
                alt=""
                className="w-10 pr-3"
              />
              Booking-Details
            </p>
          </h2>
        </div>
        <button onClick={openModal} className="flex items-center bg-red-600 hover:bg-red-500 py-2 px-2 text-sm font-bold text-white rounded">
          <FontAwesomeIcon icon={faTrashCan} className="mr-1 text-base" />
          Delete
        </button>
        <DeleteBooking isOpen={isOpen} onClose={closeModal} />
      </div>
      <div className="mt-5  ">
        <table className="table-auto border-collapse border border-green-400 w-full">
          <thead className="bg-purple-700 text-[14px] text-white">
            <tr>
              <th className="border px-1 py-1">Booking-id</th>
              <th className="border ">Room-id</th>
              <th className="border ">Room Name</th>
              <th className="border ">Room Type</th>
              <th className="border ">First Name</th>
              <th className="border ">Last Name</th>
              <th className="border ">Address</th>
              <th className="border ">City</th>
              <th className="border ">Phone</th>
              <th className="border ">Email</th>
              <th className="border ">Check-in</th>
              <th className="border ">Check-out</th>
              <th className="border ">Adults</th>
              <th className="border ">Kids</th>
            </tr>
          </thead>
          <tbody className="text-center text-[13px] bg-slate-300 border">
            {data &&
              data.map((item) => (
                <tr key={item.booking_id}>
                  <td className="border py-1">{item.booking_id}</td>
                  <td className="border">{item.room_id}</td>
                  <td className="border">{item.room_name}</td>
                  <td className="border">{item.room_type}</td>
                  <td className="border">{item.first_name}</td>
                  <td className="border">{item.last_name}</td>
                  <td className="border">{item.address}</td>
                  <td className="border">{item.city}</td>
                  <td className="border">{item.phone}</td>
                  <td className="border">{item.email}</td>
                  <td className="border">{item.check_in}</td>
                  <td className="border">{item.check_out}</td>
                  <td className="border">{item.adults}</td>
                  <td className="border">{item.kids}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingDetails;
