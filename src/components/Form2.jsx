import React, { useState } from "react";
import apiurl from "../util";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  const [formTwo, setformTwo] = useState({
    fullname: "",
    email: "",
    phone: "",
    height: "",
    experience: "",
    location: "",
    designation: "",
    social: "",
    age: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Regex patterns for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const socialRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+\.[a-zA-Z]+)+([\/a-zA-Z0-9#]+)?$/;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setformTwo({
      ...formTwo,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
  
    if (!formTwo.fullname) newErrors.fullname = "Fullname is required";
    if (!formTwo.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formTwo.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formTwo.phone) newErrors.phone = "Phone is required";
    if (!formTwo.social) {
      newErrors.social = "Social media link is required";
    } else if (!socialRegex.test(formTwo.social)) {
      newErrors.social = "Invalid URL format. Try www.example.com or http://example.com";
    }
    if (!formTwo.location) newErrors.location = "Location is required";
    if (!formTwo.experience) newErrors.experience = "Experience is required";
    if (!formTwo.height) newErrors.height = "Height is required";
    if (!formTwo.age) newErrors.age = "Age is required";
    if (!formTwo.designation) newErrors.designation = "Designation is required";
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
  
    const isValid = validateForm();
    if (!isValid) {
      toast.error("Please fix the validation errors.");
      return;
    }
  
    try {
      const response = await apiurl.post("/ids/register/models", formTwo);
      toast.success(response.data.message || "Registration successful!");
      navigate("/registration-successfull");
    } catch (error) {
      console.error("Failed to register user:", error);
      toast.error(error.response?.data?.message || "Failed to register user. Please try again.");
    }
  };
  

  return (
    <>
      <span className=" flex md:flex-row flex-col sm:flex-row justify-around mt-8 overflow-hidden  ">
        <span className=" md:w-full sm:w-full h-full md:ml-6 md:p-6 pl-6 sm:pl-0 md:pl-0  ">
          <form
            onSubmit={submitHandler}
            className="flex flex-col w-full ml-1 md:pl-9 sm:pl-6 sm:pb-9"
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
                  value={formTwo.fullname}
                  placeholder="Name"
                  id="employeeId"
                  className="bg-[#D9D9D9] rounded-[0.5rem]  w-[90%] p-[12px] placeholder-black placeholder:font-poppins text-black focus:font-poppins"
                  onChange={changeHandler}
                />
                  {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
              </label>
            </span>
            <span>
              <label htmlFor="height">
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                  Height<sup className="text-pink-600">*</sup>{" "}
                </p>
                <input
                  type="text"
                  required
                  name="height"
                  value={formTwo.height}
                  placeholder="Height"
                  id="designation"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                    {errors.height && <p className="text-red-500">{errors.height}</p>}
              </label>
            </span>
            <span>
              <label htmlFor="email">
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                  Email Id<sup className="text-pink-600">*</sup>
                </p>
                <input
                  type="email"
                  required
                  name="email"
                  value={formTwo.email}
                  placeholder="Email Id"
                  id="password"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
              </label>
          
            </span>

            <span>
              <label htmlFor="experience">
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                  Years of Experience <sup className="text-pink-600">*</sup>{" "}
                </p>
                <input
                  type="number"
                  required
                  name="experience"
                  value={formTwo.experience}
                  placeholder="Years of Experience"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                    {errors.experience && <p className="text-red-500">{errors.experience}</p>}
              </label>
            </span>

            <span>
              <label htmlFor="designation">
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                  Freelancer/Agency <sup className="text-pink-600">*</sup>{" "}
                </p>
                <input
                  type="text"
                  required
                  name="designation"
                  value={formTwo.designation}
                  placeholder="Enter Freelancer/Agency"
                  id="email"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                    {errors.designation && <p className="text-red-500">{errors.designation}</p>}

              </label>
            </span>
          </form>
        </span>
        <span className=" md:w-full sm:w-full h-full md:ml-6 md:p-6 pl-6 sm:pl-0 md:pl-0   ">
          <form
            onSubmit={submitHandler}
            className="flex flex-col w-full ml-1 sm:pb-9"
          >
            <span>
              <label htmlFor="age" className="w-full">
                <p className="text-[1rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                  Age <sup className="text-pink-600">*</sup>
                </p>
                <input
                  type="number"
                  required
                  name="age"
                  value={formTwo.age}
                  placeholder="Age"
                  id="name"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                    {errors.age && <p className="text-red-500">{errors.age}</p>}

              </label>
            </span>
            <span>
              <label htmlFor="social">
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                  Instagram ID <sup className="text-pink-600">*</sup>{" "}
                </p>
                <input
                  type="text"
                  required
                  name="social"
                  value={formTwo.social}
                  placeholder="Instagram ID."
                  id="instaid"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                    {errors.social && <p className="text-red-500">{errors.social}</p>}
              </label>
            </span>
            <span>
              <label htmlFor="phone">
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                  Contact Number <sup className="text-pink-600">*</sup>
                </p>
                <input
                  type="number"
                  required
                  name="phone"
                  value={formTwo.phone}
                  placeholder="Enter Contact Number"
                  id="phone"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                    {errors.phone && <p className="text-red-500">{errors.phone}</p>}

              </label>
            </span>

            <span>
              <label htmlFor="location">
                <p className="text-[1 rem] text-[#F1F2FF] mb-1 leading-[1.375rem]  font-poppins m-5 ml-1">
                  Location <sup className="text-pink-600">*</sup>{" "}
                </p>
                <input
                  type="text"
                  required
                  name="location"
                  value={formTwo.location}
                  placeholder="Location"
                  id="location"
                  className="bg-[#D9D9D9] rounded-[0.5rem] text-black  w-[90%] p-[12px] placeholder-black placeholder:font-poppins"
                  onChange={changeHandler}
                />
                    {errors.location && <p className="text-red-500">{errors.location}</p>}

              </label>
            </span>
            <span>
              <button
                onClick={submitHandler}
                className="text-white  font-medium rounded-lg text-base  bg-secondary  hover:border hover:border-secondary hover:bg-transparent  px-8  py-2 md:mt-[9rem] mt-9 sm:mt-[9rem] md:mb-0 mb-9 sm:mb-0 sm:-ml-[90px] md:ml-[-90px]"
              >
                Submit
              </button>
            </span>
          </form>
        </span>
      </span>
    </>
  );
};

export default Form2;
