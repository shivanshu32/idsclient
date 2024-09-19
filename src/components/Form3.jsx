import React, { useState } from "react";
import apiurl from "../util";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Form3 = () => {
  const [formThree, setformThree] = useState({
    fullname: "",
    email: "",
    phone: "",
    designation: "",
    brandname: "",
    brandlink: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Regex pattern for URL validation
  const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+\.[a-zA-Z]+)+([\/a-zA-Z0-9#]+)?$/;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setformThree({
      ...formThree,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formThree.fullname) newErrors.fullname = "Fullname is required";
    if (!formThree.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formThree.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formThree.phone) newErrors.phone = "Phone number is required";
    if (!formThree.brandname) newErrors.brandname = "Brand name is required";
    if (!formThree.brandlink) {
      newErrors.brandlink = "Brand link is required";
    } else if (!urlRegex.test(formThree.brandlink)) {
      newErrors.brandlink = "Invalid URL format. Try www.example.com or http://example.com";
    }
    if (!formThree.designation) newErrors.designation = "Designation is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (!validationErrors) {
      toast.error("Please fix the validation errors.");
      return;
    }

    try {
      const response = await apiurl.post("/ids/register/brands", formThree);
      toast.success(response.data.message || "Registration successful!");
      navigate("/registration-successfull");
    } catch (error) {
      console.error("Failed to register user", error);
      toast.error(error.response?.data?.message || "Failed to register user. Please try again.");
    }
  }

  return (
    <>
      <span className=" md:w-full sm:w-full h-full md:ml-6 md:p-6 pl-6 sm:pl-0 md:pl-0  ">
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full ml-1 md:pl-9 sm:pl-6 "
        >
          <span>
            <label htmlFor="fullname" className="w-full">
              <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1 ">
                Name <sup className="text-pink-600">*</sup>
              </p>
              <input
                type="text"
                required
                name="fullname"
                value={formThree.fullname}
                placeholder="Full Name"
                id="employeeId"
                className="bg-[#D9D9D9] rounded-[0.5rem]  w-[90%] p-[12px] placeholder-black placeholder:font-poppins text-black focus:font-poppins"
                onChange={changeHandler}
              />
                {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
            </label>
          </span>
          <span>
            <label htmlFor="email">
              <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                Email Id<sup className="text-pink-600">*</sup>{" "}
              </p>
              <input
                type="email"
                required
                name="email"
                value={formThree.email}
                placeholder="Email Id"
                id="email"
                className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                onChange={changeHandler}
              />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
            </label>
          </span>
          <span>
            <label htmlFor="brandname">
              <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                Brand Name <sup className="text-pink-600">*</sup>
              </p>
              <input
                type="text"
                required
                name="brandname"
                value={formThree.brandname}
                placeholder="Enter Brand Name"
                id="brandname"
                className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                onChange={changeHandler}
              />
                {errors.brandName && <p className="text-red-500">{errors.brandName}</p>}
            </label>
          </span>
        </form>
      </span>
      <span className=" md:w-full sm:w-full h-full flex flex-col md:p-6  md:ml-6 pl-6 sm:pl-0 md:pl-0 ">
        <form onSubmit={submitHandler} className="flex flex-col w-full ml-1">
          <span>
            <label htmlFor="designation" className="w-full">
              <p className="text-[1rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                Designation <sup className="text-pink-600">*</sup>
              </p>
              <input
                type="text"
                required
                name="designation"
                value={formThree.designation}
                placeholder="Your Designation"
                id="designation"
                className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                onChange={changeHandler}
              />
                {errors.designation && <p className="text-red-500">{errors.designation}</p>}
            </label>
          </span>
          <span>
            <label htmlFor="phone" className="w-full">
              <p className="text-[1rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                Contact Nunmber <sup className="text-pink-600">*</sup>
              </p>
              <input
                type="number"
                required
                name="phone"
                value={formThree.phone}
                placeholder="Enter Contact Number"
                id="phone"
                className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                onChange={changeHandler}
              />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </label>
          </span>
          <span>
            <label htmlFor="brandlink">
              <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                Brand Website/Instagram Link{" "}
                <sup className="text-pink-600">*</sup>
              </p>
              <input
                type="text"
                required
                name="brandlink"
                value={formThree.brandlink}
                placeholder="Link"
                id="brandlink"
                className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                onChange={changeHandler}
              />
                {errors.brandLink && <p className="text-red-500">{errors.brandLink}</p>}
            </label>
          </span>

          <span>
            <button
              type="submit"
              onClick={submitHandler}
              className="text-white  font-medium rounded-lg text-base  bg-secondary  hover:border hover:border-secondary hover:bg-transparent  px-8  py-2 md:mt-[3rem] mt-9 mb-6  md:ml-[-90px]  sm:ml-[-90px]"
            >
              Submit
            </button>
          </span>
        </form>
      </span>
    </>
  );
};

export default Form3;
