import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const CartPage = () => {
  const location = useLocation();
  const roomdata = location?.state?.postdata;
  //console.log(roomdata);
  const navigate = useNavigate();

  // handle state for payment method
  const [payment, setPayment] = useState("");

  const handleOnChange = (e) => {
    setPayment(e.target.value);
  };

  // calculate total night
  const calculateNight = (check_in, check_out) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * miliseconds
    const startDate = new Date(check_in);
    const endDate = new Date(check_out);
    const nightCount = Math.round(Math.abs((startDate - endDate) / oneDay));
    return nightCount;
  };
  // calculate total price
  const total = (nightCount, pricePerNight) => {
    return nightCount * pricePerNight;
  };

  // calculate total with tax
  const totalWithTax = (nightCount, pricePerNight) => {
    const tax = 15;
    const beforeTax = nightCount * pricePerNight;
    const withTax = beforeTax + tax;
    return withTax;
  };

  //
  const price_per_night = parseInt(roomdata.price); // parse string data to integer
  const nights = calculateNight(roomdata.check_in, roomdata.check_out);
  const grosstotal = total(
    calculateNight(roomdata.check_in, roomdata.check_out),
    price_per_night
  );
  // net total
  const netTotal = totalWithTax(
    calculateNight(roomdata.check_in, roomdata.check_out),
    price_per_night
  );

  const handleCheckOut = async (e) => {
    e.preventDefault();

    if (payment !== "offline") {
      toast.error("Please select Offline method!!!", { duration: 2000 });
      return;
    }

    const data = {
      room_id: roomdata.room_id,
      room_name: roomdata.room_name,
      room_type: roomdata.room_type,
      nights: nights,
      total_amount: netTotal,
      payment_method: payment,
      check_in: roomdata.check_in,
      check_out: roomdata.check_out,
      first_name: roomdata.first_name,
      last_name: roomdata.last_name,
      address: roomdata.address,
      city: roomdata.city,
      phone: roomdata.phone,
      email: roomdata.email,
      adults: roomdata.adults,
      kids: roomdata.kids,
    };

    //console.log(data);

    try {
      const postBookingData = await axios.post(
        "http://localhost:5500/booking",
        data
      );
      console.log(postBookingData);
      const bookData = postBookingData.data;
      navigate(
        `/booking/${roomdata.room_id}/${roomdata.room_name}/cart/checkout`,
        { state: { data } }
      );

      if (bookData) {
        toast.success(`${bookData.message}`, { duration: 1500 });
      } else {
        toast.error(`${bookData.error}`, { duration: 1500 });
      }
    } catch (error) {
      console.log("error", error);
      toast.error("An Error Occurred", { duration: 1500 });
    }
  };

  return (
    <div className="mt-36 absolute ml-20">
      <h1 className="font-Literata text-4xl font-bold">Checkout</h1>
      <h2 className="font-bold font-serif mt-8 text-2xl">Booking Rooms</h2>
      <div>
        <table className="table-auto border-collapse border w-full mt-6">
          <thead className="text-base">
            <tr>
              <th className="border-r py-6 px-9 w-44">Room</th>
              <th className="border-r px-5 w-fit">Type</th>
              <th className="border-r px-20">Checkin - Checkout</th>
              <th className="border-r px-3">Night</th>
              <th className="px-3">Gross Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t text-center ">
              <td className="border-r px-3 py-4">{roomdata.room_name}</td>
              <td className="border-r px-1 py-4">{roomdata.room_type}</td>
              <td className="border-r px-3 py-4">
                ({roomdata.check_in}) - ({roomdata.check_out})
              </td>
              <td className="border-r px-1 py-4">{nights}</td>
              <td className="border-r  py-4">
                <FontAwesomeIcon icon={faBangladeshiTakaSign} /> {grosstotal}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="border border-t-0 flex justify-between">
          <h1 className="py-3 ml-5 ">Tax</h1>
          <p className="border-l py-3 px-6 w-[114px] text-center">
            <FontAwesomeIcon icon={faBangladeshiTakaSign} /> 15
          </p>
        </div>
        <div className="border border-t-0 flex justify-between">
          <h1 className="py-3 ml-5 ">Total</h1>
          <p className="border-l py-3 px-6 w-[114px] text-center flex items-center">
            <FontAwesomeIcon icon={faBangladeshiTakaSign} className="mr-1" />{" "}
            {netTotal}
          </p>
        </div>
      </div>
      <div className="border mt-9 p-5">
        <h1 className="font-bold font-Literata text-xl">Payment Method</h1>
        <div className="mt-3 text-base">
          <input
            type="radio"
            name="payment"
            value="offline"
            checked={payment === "offline"}
            onChange={handleOnChange}
          />
          <label htmlFor="offline" className="ml-2">
            Offline Payment (Pay on Arrival)
          </label>
        </div>
        <div className="mt-3 text-base">
          <input type="radio" name="payment" value="mobile" />
          <label htmlFor="offline" className="ml-2">
            Online (Mobile Banking)
          </label>
        </div>
        <div className="mt-3 text-base">
          <input type="radio" name="payment" value="card" />
          <label htmlFor="offline" className="ml-2">
            Card
          </label>
        </div>
      </div>
      <button
        onClick={handleCheckOut}
        className="bg-teal-500 hover:bg-teal-400 py-2 px-4 mt-9 text-white"
      >
        CHECK OUT
      </button>
    </div>
  );
};

export default CartPage;
