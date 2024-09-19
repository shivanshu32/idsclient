import React, { useState } from "react";
import apiurl from "../util";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Form1 = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    social: "",
    location: "",
    experience: "",
    minspend: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const spendRange = [
    { id: 1, name: "3D Slot 2Lakhs to 3Lakhs" },
    { id: 2, name: "2D Slot 3Lakhs to 5Lakhs" },
    { id: 3, name: "1D Slot 5Lakhs to 10Lakhs" },
  ];

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // URL validation regex (basic format for www or https)
    const urlRegex =
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?(\/[^\s]*)?$/;

    if (!formData.fullname) newErrors.fullname = "Fullname is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.social) {
      newErrors.social = "Social media link is required";
    } else if (!urlRegex.test(formData.social)) {
      newErrors.social = "Invalid URL format try www.example.com or http://example.com";
    }
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.experience) newErrors.experience = "Experience is required";
    if (!formData.minspend) newErrors.minspend = "Minimum spend is required";

    return newErrors;
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await apiurl.post("/ids/register/designers", formData);
      toast.success(response.data.message || "Registration successful!");
      navigate("/registration-successfull");
    } catch (error) {
      console.error("Failed to register user:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to register user. Please try again."
      );
    }
  };

  return (
    <>
      <div className=" flex md:flex-row sm:flex-row flex-col justify-around mt-8 overflow-hidden    ">
        <div className=" w-full h-full  md:p-6 pl-6 md:pl-0 sm:pl-0  ">
          <form className="flex flex-col w-full ml-1 md:pl-9 sm:pl-6">
            <span>
              <label className="w-full">
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1 ">
                  Name <sup className="text-pink-600">*</sup>
                </p>
                <input
                  type="text"
                  required
                  name="fullname"
                  value={formData.fullname}
                  placeholder="Name"
                  id="Enter Your Name"
                  className="bg-[#D9D9D9] rounded-[0.5rem]  w-[90%] p-[12px] placeholder-black placeholder:font-poppins text-black focus:font-poppins"
                  onChange={changeHandler}
                />
                {errors.fullname && <p className = "text-red-500">{errors.fullname}</p>}
              </label>
            </span>
            <span>
              <label>
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                  Email Id<sup className="text-pink-600">*</sup>{" "}
                </p>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  placeholder="Enter your email id"
                  id="designation"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                {errors.email && <p className = "text-red-500">{errors.email}</p>}
              </label>
            </span>
            <span>
              <label>
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                  Location <sup className="text-pink-600">*</sup>
                </p>
                <input
                  type="text"
                  required
                  name="location"
                  value={formData.location}
                  placeholder="Enter your location"
                  id="password"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                {errors.location && <p className = "text-red-500">{errors.location}</p>}
              </label>
              <label>
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                  Minimum Spend <sup className="text-pink-600">*</sup>
                </p>

                <select
                  onChange={changeHandler}
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  name="minspend"
                  value={formData.minspend}
                >
                  <option value="">Select minimum spend</option>
                  {spendRange.map((p, index) => (
                    <option key={`${p.id}-${index}`} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </label>
              {errors.minspend && <p className = "text-red-500">{errors.minspend}</p>}
            </span>
          </form>
        </div>
        <div className=" w-full h-full flex flex-col md:py-6 pl-6 md:pl-0 sm:pl-0  ">
          <form className="flex flex-col w-full ml-1">
            <span>
              <label className="w-full">
                <p className="text-[1rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins mt-5 ml-1">
                  Contact Number <sup className="text-pink-600">*</sup>
                </p>
                <input
                  type="number"
                  required
                  name="phone"
                  value={formData.phone}
                  placeholder="Enter Contact Number"
                  id="name"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                {errors.phone && <p className = "text-red-500">{errors.phone}</p>}
              </label>
            </span>
            <span>
              <label>
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins mt-5 ml-1">
                  Website/Instagram Link <sup className="text-pink-600">*</sup>{" "}
                </p>
                <input
                  type="text"
                  required
                  name="social"
                  value={formData.social}
                  placeholder="Enter the link"
                  id="email"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                {errors.social && <p className = "text-red-500">{errors.social}</p>}
              </label>
            </span>
            <span>
              <label>
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins mt-5 ml-1">
                  Years of Experience <sup className="text-pink-600">*</sup>
                </p>
                <input
                  type="number"
                  required
                  name="experience"
                  value={formData.experience}
                  placeholder="Experience"
                  id="phone"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                {errors.experience && <p className = "text-red-500">{errors.experience}</p>}
              </label>
            </span>

            <span>
              <button
                type="submit"
                onClick={submitHandler}
                className="text-white  font-medium rounded-lg text-base  bg-secondary  hover:border hover:border-secondary hover:bg-transparent  px-8  py-2 md:mt-[9rem] mt-9 mb-6 md:ml-[-90px]  sm:ml-[-90px]"
              >
                Submit
              </button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form1;
