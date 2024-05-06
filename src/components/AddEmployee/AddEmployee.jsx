import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddEmployee = ({ isOpen, onClose }) => {
  const [empData, setEmpData] = useState({
    name: "",
    position: "",
    branch: "",
    phone: "",
    address: "",
    hire_date: "",
    salary: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEmpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddEmp = async () => {
    console.log("form data", empData);

    // if (empData.branch !== "Chattogram" && empData.branch !== "Cox's Bazar") {
    //   toast.error("Please give valid branch name", { duration: 2000 });
    //   return;
    // }

    try {
      const addEmployee = await axios.post(
        "http://localhost:5500/addemployee",
        empData
      );

      console.log(addEmployee.data);
      toast.success(`${addEmployee.data.message}`, { duration: 1500 });
      

      // clear all fields
      setEmpData({
        name: "",
        position: "",
        branch: "",
        phone: "",
        address: "",
        hire_date: "",
        salary: "",
      });
    } catch (error) {
      console.log("ERR ->", error);
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
        <div className="bg-white flex flex-col items-center rounded  p-4 my-5 ">
          <div className="flex items-center text-2xl font-semibold text-teal-600 w-full border-b pb-4">
            <h1>Add Employee</h1>
            <div>
              <button
                onClick={onClose}
                className="bg-red-600 px-3 py-2 font-medium rounded  text-base text-white hover:bg-red-700 ml-[270px]"
              >
                close
              </button>
            </div>
          </div>

          <div className="mt-3 p-1 flex flex-col w-full">
            <div>
              <p className="font-medium mb-1">Employee Name</p>
              <input
                type="text"
                name="name"
                value={empData.name}
                onChange={handleOnChange}
                placeholder="Employee name"
                className="border ps-2 py-1 outline-none w-full mb-4"
              />
              <p className="font-medium mb-1">Position</p>
              <input
                type="text"
                name="position"
                value={empData.position}
                onChange={handleOnChange}
                placeholder="Position"
                className="border ps-2 py-1 outline-none w-full mb-4"
              />
              <p className="font-medium mb-1">Branch</p>
              <select
                name="branch"
                value={empData.branch}
                onChange={handleOnChange}
                className="border ps-2 py-1 outline-none w-full mb-4"
              >
                <option value="">Select an option</option>
                <option value="Chattogram" className="bg-green-100">
                  Chattogram
                </option>
                <option value="Cox's Bazar" className="bg-purple-100">
                  Cox's Bazar
                </option>
              </select>
              <p className="font-medium mb-1">Phone</p>
              <input
                type="text"
                name="phone"
                value={empData.phone}
                onChange={handleOnChange}
                placeholder="Phone"
                className="border ps-2 py-1 outline-none w-full mb-4"
              />
              <p className="font-medium mb-1">Address</p>
              <input
                type="text"
                name="address"
                value={empData.address}
                onChange={handleOnChange}
                placeholder="Address"
                className="border ps-2 py-1 outline-none w-full mb-4"
              />
              <p className="font-medium mb-1">Hire Date</p>
              <input
                type="date"
                name="hire_date"
                value={empData.hire_date}
                onChange={handleOnChange}
                placeholder="Hire date"
                className="border ps-2 pe-2 py-1 outline-none w-full mb-4"
              />
              <p className="font-medium mb-1">Salary</p>
              <input
                type="text"
                name="salary"
                value={empData.salary}
                onChange={handleOnChange}
                placeholder="Salary"
                className="border ps-2 py-1 outline-none w-full mb-4"
              />
            </div>
          </div>
          <button
            onClick={handleAddEmp}
            className="bg-green-600 hover:bg-green-700 w-36 mt-2 py-2 font-medium text-white rounded-md"
          >
            Add Employee
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AddEmployee;
