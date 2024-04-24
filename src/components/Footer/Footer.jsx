import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="top-[1980px] relative bg-black  pl-12 pr-12 pb-9 h-screen">
      <div className="flex items-center justify-between pt-28 ">
        <div>
          <h1 className="text-2xl text-white/80 font-serif">Contact Us</h1>
          <ul className="pt-11 text-[#838383] items-center ">
            <li className="border-b border-b-[#252525] pb-5 ">
              <FontAwesomeIcon
                icon={faClock}
                className="pr-2 text-lg
              "
              />
              10:00 AM - 09:00 PM
            </li>
            <li className="border-b border-b-[#252525] py-5 ">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="pr-2 text-lg
              "
              />{" "}
              paradiseinn@email.com
            </li>
            <li className="pt-5">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="pr-2 text-lg
              "
              />{" "}
              +880 1323 - 456789
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl text-white/80 font-serif">Support</h1>
          <ul className="pt-16 text-[#838383]">
            <li className="pb-4">
              <Link>Help Center</Link>
            </li>
            <li className="py-4">
              <Link>Cancellation Options</Link>
            </li>
            <li className="pt-4">
              <Link>Safety Information</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl text-white/80 font-serif">Quick Links</h1>
          <ul className="pt-16 text-[#838383]">
            <li className="pb-4">
              <Link>Our Story</Link>
            </li>
            <li className="py-4">
              <Link>Facilites</Link>
            </li>
            <li className="pt-4">
              <Link>Events</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl text-white/80 font-serif">Newsletter</h1>
          <div className="flex flex-col pt-12">
            <p className="pb-4 text-[#838383]">Get Our Newsletter</p>
            <input
              type="email"
              placeholder="Your email here"
              className=" bg-[#ffffff1f] w-72 py-4 ps-3 placeholder-[#838383] text-sm text-[#838383] outline-none"
            />
            <button className="bg-teal-500 py-3 mt-3 w-36 font-semibold font-serif text-white">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-28 border-t border-t-[#252525]">
        <p className="mt-12 text-[#838383]">&copy; All Right Reserved | 2024</p>
      </div>
    </div>
  );
};

export default Footer;
