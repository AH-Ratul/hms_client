import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

// function to handle fetching room by id
export const loadRoom = async ({ params }) => {
  // fetch room by id for selected room
  //console.log(params);
  const data = await axios.get(`http://localhost:5500/getRoom?id=${params.id}`);
  return data;
};

// handle booking
const Booking = () => {
  const getdata = useLoaderData();
  if (!getdata || !getdata.data || !getdata.data[0]) {
    // If not defined, return loading state or error message
    return <div>Loading...</div>; // or display an error message
  }

  const newdata = getdata.data[0];
  //console.log(data)
  const [bookData, setBookData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    phone: "",
    email: "",
    check_in: "",
    check_out: "",
    adults: "",
    kids: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  // validate fields
  const validateForm = () => {
    if (
      !bookData.firstname ||
      !bookData.lastname ||
      !bookData.address ||
      !bookData.city ||
      !bookData.phone ||
      !bookData.email ||
      !bookData.check_in ||
      !bookData.check_out ||
      !bookData.adults ||
      !bookData.kids
    ) {
      toast.error("All fields are required.", {
        duration: 1500,
      });
      return false;
    }
    return true;
  };

  const handleBook = async (e) => {
    e.preventDefault();

    const postdata = {
      room_id: newdata.room_id,
      room_name: newdata.name,
      room_type: newdata.type,
      first_name: bookData.firstname,
      last_name: bookData.lastname,
      address: bookData.address,
      city: bookData.city,
      phone: bookData.phone,
      email: bookData.email,
      check_in: bookData.check_in,
      check_out: bookData.check_out,
      adults: bookData.adults,
      kids: bookData.kids,
    };
    //console.log(postdata);

    // validate before submission
    if (!validateForm()) {
      return;
    }

    try {
      const postBookingData = await axios.post(
        "http://localhost:5500/booking",
        postdata
      );

      if (postBookingData) {
        toast.success(`${postBookingData.data.message}`, { duration: 1500 });
      } else {
        toast.error(`${postBookingData.data.error}`, { duration: 1500 });
      }
    } catch (error) {
      console.log("error", error);
      toast.error("An Error Occurred", { duration: 1500 });
    }

    setBookData({
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      phone: "",
      email: "",
      check_in: "",
      check_out: "",
      adults: "",
      kids: "",
    });
  };
  return (
    <div className="mt-28 absolute ">
      <div className="border rounded-md mr-72 ml-72 shadow-md">
        <div>
          <img
            src={newdata.image}
            alt=""
            className="h-[400px] w-[700px] rounded-t-md"
          />
        </div>
        <div className="p-3">
          <h1 className="text-xl font-semibold text-center">{newdata.name}</h1>
          <div className="mt-7 pl-7 pr-7">
            <div className="flex gap-7 mt-3 mb-5">
              <div className="flex flex-col w-full">
                <label htmlFor="First Name" className="mb-1 font-semibold">
                  First Name <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={bookData.firstname}
                  onChange={handleOnChange}
                  placeholder="First Name"
                  className="outline-none border py-2 ps-3 pe-2 w-full rounded placeholder:text-slate-600"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="check-out" className="mb-1 font-semibold">
                  Last Name <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={bookData.lastname}
                  onChange={handleOnChange}
                  placeholder="Last Name"
                  className="outline-none border py-2 ps-3 pe-2 w-full rounded placeholder:text-slate-600"
                />
              </div>
            </div>
            <div className="flex gap-7 mt-3 mb-5">
              <div className="flex flex-col w-full">
                <label htmlFor="First Name" className="mb-1 font-semibold">
                  Address <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={bookData.address}
                  onChange={handleOnChange}
                  placeholder="Ex: building-no, road-no etc"
                  className="outline-none border py-2 ps-3 pe-2 w-full rounded placeholder:text-slate-600 placeholder:text-sm"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="check-out" className="mb-1 font-semibold">
                  City <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={bookData.city}
                  onChange={handleOnChange}
                  placeholder="City"
                  className="outline-none border py-2 ps-3 pe-2 w-full rounded placeholder:text-slate-600 placeholder:text-sm"
                />
              </div>
            </div>
            <div className="flex gap-7 mt-3 mb-5">
              <div className="flex flex-col w-full">
                <label htmlFor="First Name" className="mb-1 font-semibold">
                  Phone <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={bookData.phone}
                  onChange={handleOnChange}
                  placeholder="Phone"
                  className="outline-none border py-2 ps-3 pe-2 w-full rounded placeholder:text-slate-600"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="check-out" className="mb-1 font-semibold">
                  Email <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={bookData.email}
                  onChange={handleOnChange}
                  placeholder="Email"
                  className="outline-none border py-2 ps-3 pe-2 w-full rounded placeholder:text-slate-600"
                />
              </div>
            </div>
            <div className="flex gap-7 mt-3 mb-5">
              <div className="flex flex-col w-full">
                <label htmlFor="check-in" className="mb-1 font-semibold">
                  Check-In <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="date"
                  name="check_in"
                  value={bookData.check_in}
                  onChange={handleOnChange}
                  className="outline-none border py-2 ps-3 pe-2 w-full rounded placeholder:text-slate-600"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="check-out" className="mb-1 font-semibold">
                  Check-Out <span className="text-red-500 ">*</span>
                </label>
                <input
                  type="date"
                  name="check_out"
                  value={bookData.check_out}
                  onChange={handleOnChange}
                  className="outline-none border py-2 ps-3 pe-2 w-full rounded placeholder:text-slate-600"
                />
              </div>
            </div>
            <div className="flex gap-7 mt-3 mb-5">
              <div className="flex flex-col w-full">
                <label htmlFor="check-in" className="mb-1 font-semibold">
                  Number of adults <span className="text-red-500 ">*</span>
                </label>
                <select
                  name="adults"
                  value={bookData.adults}
                  onChange={handleOnChange}
                  className="border rounded outline-none px-2 py-2 ps-3"
                >
                  <option value="">Select adults</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="check-in" className="mb-1 font-semibold">
                  Number of Kids <span className="text-red-500 ">*</span>
                </label>
                <select
                  name="kids"
                  value={bookData.kids}
                  onChange={handleOnChange}
                  className="border rounded outline-none px-2 py-2 ps-3"
                >
                  <option value="">Select Kids</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-6 ml-10 mr-10 mt-9 text-center">
          <button
            onClick={handleBook}
            className="bg-blue-950 hover:bg-blue-900 text-center text-white py-3 px-28 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Booking;
