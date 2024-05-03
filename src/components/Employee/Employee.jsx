import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import AddEmployee from "../AddEmployee/AddEmployee";
import Loader from "../Loader/Loader";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const Employee = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // get data from server -------------------
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getdata1 = data.results1;
  const getdata2 = data.results2;
  //console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getEmp = await axios.get("http://localhost:5500/getEmployee");

        setData(getEmp.data);
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
            <p className="ml-1 font-semibold">
              <FontAwesomeIcon icon={faUserTie} className="pr-2" />
              Employees
            </p>
          </h2>
        </div>
        <div>
          <button
            onClick={openModal}
            className="flex items-center bg-green-600 hover:bg-green-700 py-2 px-2 text-xs font-bold text-white rounded"
          >
            <IoAddCircleOutline className="mr-1 text-xl" />
            Add Employee
          </button>
          <AddEmployee isOpen={isOpen} onClose={closeModal} />
        </div>
      </div>
      <div className="mt-3">
        <h1 className="mb-3 text-2xl font-Literata text-green-500">
          Branch: Chattogram
        </h1>
        <table className="table-auto border-collapse border border-green-400 w-full">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="border px-2 py-1">Id</th>
              <th className="border ">Employee Name</th>
              <th className="border ">Position</th>
              <th className="border ">Branch</th>
              <th className="border ">Phone</th>
              <th className="border ">Address</th>
              <th className="border ">Hire Date</th>
              <th className="border ">Salary</th>
            </tr>
          </thead>
          <tbody className="text-center text-base bg-slate-300 border">
            {getdata1.map((emp, index) => (
              <tr key={index}>
                <td className="border py-1">{emp.id}</td>
                <td className="border">{emp.name}</td>
                <td className="border">{emp.position}</td>
                <td className="border">{emp.branch}</td>
                <td className="border">{emp.phone}</td>
                <td className="border">{emp.address}</td>
                <td className="border">{emp.hire_date}</td>
                <td className="border">{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 border-t border-lime-500">
        <h1 className="mb-3 text-2xl font-Literata text-red-500">
          Branch: Cox's Bazar
        </h1>
        <table className="table-auto border-collapse border border-green-400 w-full">
          <thead className="bg-purple-700 text-white">
            <tr>
              <th className="border px-2 py-1">Id</th>
              <th className="border ">Employee Name</th>
              <th className="border ">Position</th>
              <th className="border ">Branch</th>
              <th className="border ">Phone</th>
              <th className="border ">Address</th>
              <th className="border ">Hire Date</th>
              <th className="border ">Salary</th>
            </tr>
          </thead>
          <tbody className="text-center text-base bg-slate-300 border">
            {getdata2.map((emp, index) => (
              <tr key={index}>
                <td className="border py-1">{emp.id}</td>
                <td className="border">{emp.name}</td>
                <td className="border">{emp.position}</td>
                <td className="border">{emp.branch}</td>
                <td className="border">{emp.phone}</td>
                <td className="border">{emp.address}</td>
                <td className="border">{emp.hire_date}</td>
                <td className="border">{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
