import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";
import profile from "../../../public/img/profile.png";
import woman from "../../../public/img/woman.png";
import UseToggle from "../../Hooks/UseToggle";
import DropDown from "./DropDown";

const Header = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen, ref] = UseToggle(false);

  // change nav bar background on scroll
  // const [navbar, setNavbar] = useState(0);
  // const changeBG = () => {
  //   window.scrollY >= 145 ? setNavbar(true) : setNavbar(false);
  // };
  // window.addEventListener("scroll", changeBG);

  return (
    <div>
      <header className="flex justify-between items-center fixed z-10 w-full bg-white shadow-sm py-5 pl-16 pr-16 ">
        <div>
          <h1 className="text-3xl text-black/90 font-bold">Paradise Inn</h1>
        </div>
        <div className=" flex items-center text-lg ">
          <NavLink to="/" className="hover:text-teal-600">
            Home
          </NavLink>
          <NavLink to="/all-rooms" className=" ml-5 hover:text-teal-600">
            Rooms
          </NavLink>
          <NavLink className="mr-28 ml-5 hover:text-teal-600">Contact</NavLink>
          {user ? (
            <>
              <div
                ref={ref}
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer relative border p-1 hover:border-teal-400 rounded-full"
              >
                {user.gender === "Male" ? (
                  <img src={profile} alt="p" className="w-9" />
                ) : (
                  <img src={woman} alt="w" className="w-9" />
                )}
                {isOpen && <DropDown></DropDown>}
              </div>
            </>
          ) : (
            <div>
              <NavLink to="/sign-in" className="mr-5 hover:text-teal-700 ">
                Sign In
              </NavLink>
              <NavLink
                to="/sign-up"
                className="text-white px-2 rounded bg-teal-500 hover:bg-teal-600 py-2"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
