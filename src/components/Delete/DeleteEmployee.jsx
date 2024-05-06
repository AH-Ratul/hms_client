import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const DeleteEmployee = ({ isOpen, onClose }) => {
  const [empId, setEmpId] = useState({
    id: "",
  });

  const deleteEmployee = async (e) => {
    e.preventDefault();
    console.log(empId);

    if (!empId) {
      toast.error("Give Id", { duration: 1500 });
      return;
    }

    try {
      const del = await axios.post("http://localhost:5500/delete-employee", {
        id: empId,
      });
      toast.success(`${del.data.message}`, { duration: 1500 });
    } catch (error) {
      console.log(error);
      toast.error("Error Occured", { duration: 1500 });
    }

    setEmpId({
      id: "",
    });
  };
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-center items-center min-h-screen absolute bg-rgba2 w-full">
        <div className="bg-white flex flex-col items-center p-4 rounded">
          <div className="flex items-center text-2xl font-semibold border-b pb-4 w-full">
            <h1>Delete Employee</h1>
            <div>
              <button
                onClick={onClose}
                className="bg-red-600 px-3 py-2 font-medium rounded  text-base text-white hover:bg-red-500 ml-[270px]"
              >
                Close
              </button>
            </div>
          </div>
          <div className="mt-6 flex items-center pb-8">
            <div className="flex flex-col mr-9">
              <label htmlFor="id" className="font-bold text-xl mb-2">
                Employee id
              </label>
              <input
                type="text"
                name="id"
                value={empId.id}
                onChange={(e) => setEmpId(e.target.value)}
                className="border outline-none py-2 ps-2 rounded"
              />
            </div>
            <button
              onClick={deleteEmployee}
              className="bg-red-600 hover:bg-red-500 py-2 px-4 text-white font-semibold rounded mt-9"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default DeleteEmployee;
