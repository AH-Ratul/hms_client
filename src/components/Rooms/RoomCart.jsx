import {
  faBangladeshiTakaSign,
  faMugSaucer,
  faTv,
  faUtensils,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const RoomCart = ({ rooms }) => {
  const {room_id, name, type, description, price, image } = rooms;

  return (
    <div>
      <div className="border hover:shadow-xl rounded-md flex flex-col w-96 ">
        <img src={image} alt="img" className="w-full rounded-t-md" />
        <div className="p-3 pb-5 px-6 mt-4">
          <h1 className="font-bold text-3xl">{name}</h1>
          <p className="font-semibold text-teal-500 mt-2  pb-2">{type}</p>
          <p className="py-2 text-sm text-gray-700">{description}</p>
          <div className="border-b  pb-6 mt-5">
            <ul className="flex items-center text-gray-400 ">
              <li className="mr-4 border-r pr-4">
                <FontAwesomeIcon icon={faMugSaucer} />
              </li>
              <li className="mr-4 border-r pr-4">
                <FontAwesomeIcon icon={faWifi} />
              </li>
              <li className="mr-4 border-r pr-4">
                <FontAwesomeIcon icon={faUtensils} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTv} />
              </li>
            </ul>
          </div>
          <p className="py-4  ">
            Price:{" "}
            <span className="text-2xl font-bold ">
              <FontAwesomeIcon icon={faBangladeshiTakaSign} />
              {price}
            </span>
            /night
          </p>
          <NavLink to={`/booking/${room_id}/${name}`} className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-36 mt-3 font-medium text-lg">
            Book
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RoomCart;
