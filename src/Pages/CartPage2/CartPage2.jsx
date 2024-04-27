import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const CartPage2 = () => {
  const location = useLocation();
  const data = location?.state?.data;
  //console.log(data);

  return (
    <div className="mt-32 absolute ml-20">
      <h1 className="font-Literata text-4xl font-bold">
        Thank You for Your Booking !!!
      </h1>
      <p className="mt-9 text-lg text-sky-500">
        Thank you! Your booking has been placed. We will contact you to confirm
        about the booking soon.
      </p>

      <div className="mt-14">
        <h2 className="font-bold font- text-2xl">Booking Items</h2>
        <div>
          <table className="table-auto border-collapse border w-full mt-6">
            <thead className="text-base">
              <tr>
                <th className="border-r py-6 px-9 w-44">Room</th>
                <th className="border-r px-5 w-fit">Type</th>
                <th className="border-r px-20">Checkin - Checkout</th>
                <th className="border-r px-3">Night</th>
                <th className="px-3">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t text-center ">
                <td className="border-r px-3 py-4">{data.room_name}</td>
                <td className="border-r px-1 py-4">{data.room_type}</td>
                <td className="border-r px-3 py-4">
                  ({data.check_in}) - ({data.check_out})
                </td>
                <td className="border-r px-1 py-4">{data.nights}</td>
                <td className="border-r  py-4">
                  <FontAwesomeIcon icon={faBangladeshiTakaSign} />{" "}
                  {data.total_amount}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6 flex py-3 px-3 border w-[500px] ">
            <p className="font-bold">First Name:</p>
            <p className="ml-20 border-l pl-5">{data.first_name}</p>
          </div>
          <div className="border-t-0 flex py-3 px-3 border w-[500px] ">
            <p className="font-bold">Last Name:</p>
            <p className="ml-20 border-l pl-5">{data.last_name}</p>
          </div>
          <div className="border-t-0 flex py-3 px-3 border w-[500px] ">
            <p className="font-bold">Phone:</p>
            <p className="ml-[116px] border-l pl-5">{data.phone}</p>
          </div>
          <div className="border-t-0 flex py-3 px-3 border w-[500px] ">
            <p className="font-bold">Email:</p>
            <p className="ml-[123px] border-l pl-5">{data.email}</p>
          </div>
          <div className="border-t-0 flex py-3 px-3 border w-[500px] ">
            <p className="font-bold">Address:</p>
            <p className="ml-[103px] border-l pl-5">
              {data.address}, {data.city}
            </p>
          </div>
          <div className="border-t-0 flex py-3 px-3 border w-[500px] ">
            <p className="font-bold">Persons:</p>
            <p className="ml-[106px] border-l pl-5">
              {data.adults} adults, {data.kids} kids
            </p>
          </div>
        </div>
        <span className="mt-20 absolute underline text-xl text-red-500">
          <Link to="/">Go to Home</Link>
        </span>
      </div>
    </div>
  );
};

export default CartPage2;
