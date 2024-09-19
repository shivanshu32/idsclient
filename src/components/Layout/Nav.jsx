import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { close, logo, menu } from "../../assets/index";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggle, SetToggle] = useState(false);
  const [session, setSession] = useState(false);
  const [isOpen, SetIsOpen] = useState(false);
  const [genxsession, setGenxsession] = useState(false);

  const path = window.location.pathname;

  const closeMenu = () => {
    SetToggle(false);
  };
  return (
    <>
      <nav>
        <div className="absolute right-5 py-9 ">
          <div className=" flex flex-1 justify-end items-center  ">
            <div className="glass w-16 h-16 md:me-9 me-3 z-40 fixed mt-16">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[27px] object-contain  ml-4 mt-5 cursor-pointer  "
                onClick={() => SetToggle(!toggle)}
              />
            </div>
            <div
              className={`${!toggle ? "hidden" : "flex"}
      p-6 fixed top-28 right-6 mx-4 my-2 min-w-[220px]  z-50 sidebar rounded-xl sidebar glass2 primefont h-[27rem] overflow-y-scroll scrollbar-hide `}
            >
              <ul className=" flex flex-col   mt-3  ">
                <Link to="/">
                  <li
                    onClick={closeMenu}
                    className={`  text-white w-28 ps-3 rounded-lg my-2  font-medium cursor-pointer act ${
                      path === "/" && "active"
                    }`}
                  >
                    Home
                  </li>
                </Link>

                <Link to="/about">
                  <li
                    onClick={closeMenu}
                    className={`  text-white w-28 ps-3 rounded-lg my-2  font-medium cursor-pointer act ${
                      path === "/about" && "active"
                    }`}
                  >
                    About Us
                  </li>
                </Link>

                <li
                  onClick={() => setSession((prv) => !prv)}
                  className="cursor-pointer flex items-center  text-white w-36 ps-3 rounded-lg my-2  font-medium animate "
                >
                  IDS Seasons{" "}
                  {!session ? (
                    <span className="ps-2">
                      <IoIosArrowDown />
                    </span>
                  ) : (
                    <span className="ps-2">
                      <IoIosArrowUp />{" "}
                    </span>
                  )}
                </li>

                {session && (
                  <li className="w-32 ps-3 rounded-lg   font-medium animate ">
                    <Link to="/ids/season1">
                      <li
                        onClick={closeMenu}
                        className={`cursor-pointer text-white w-32 ps-3 rounded-lg   font-normal text-[15px] act  ${
                          path === "/ids/season1" && "active"
                        }`}
                      >
                        season 1
                      </li>
                    </Link>
                    <Link to="/ids/season2">
                      <li
                        onClick={closeMenu}
                        className={`cursor-pointer text-white w-32 ps-3 rounded-lg my-2  font-normal text-[15px] act  ${
                          path === "/ids/season2" && "active"
                        }`}
                      >
                        season 2
                      </li>
                    </Link>
                    <Link to="/ids/season3">
                      <li
                        onClick={closeMenu}
                        className={`cursor-pointer text-white w-32 ps-3 rounded-lg my-2  font-normal text-[15px] act  ${
                          path === "/ids/season3" && "active"
                        }`}
                      >
                        season 3
                      </li>
                    </Link>
                    <Link to="/ids/season4">
                      <li
                        onClick={closeMenu}
                        className={`cursor-pointer text-white w-32 ps-3 rounded-lg my-2  font-normal text-[15px]  act ${
                          path === "/ids/season4" && "active"
                        }`}
                      >
                        Session 4
                      </li>
                    </Link>
                    <Link to="/ids/season5">
                      <li
                        onClick={closeMenu}
                        className={`cursor-pointer text-white w-32 ps-3 rounded-lg my-2  font-normal text-[15px]  act ${
                          path === "/ids/season5" && "active"
                        }`}
                      >
                        Session 5
                      </li>
                    </Link>
                  </li>
                )}

                <li
                  onClick={() => setGenxsession((prv) => !prv)}
                  className="cursor-pointer flex items-center  text-white w-36 ps-3 rounded-lg my-2  font-medium"
                >
                  Gen-NEX 1.0{" "}
                  {!genxsession ? (
                    <span className="ps-2">
                      <IoIosArrowDown />
                    </span>
                  ) : (
                    <span className="ps-2">
                      <IoIosArrowUp />{" "}
                    </span>
                  )}
                </li>

                {genxsession && (
                  <li className="  w-32 ps-3 rounded-lg   font-medium">
                    <Link to="/idsgenX/season1">
                      {" "}
                      <li
                        onClick={closeMenu}
                        className={`cursor-pointer text-white w-32 ps-3 rounded-lg   font-normal text-[15px] act ${
                          path === "/idsgenX/season1" && "active"
                        }`}
                      >
                        season 1
                      </li>
                    </Link>
                  </li>
                )}

                <li
                  onClick={() => SetIsOpen((prev) => !prev)}
                  className="cursor-pointer flex items-center  text-white w-32 ps-3 rounded-lg my-2 font-medium"
                >
                  Talent{" "}
                  {!isOpen ? (
                    <span className="ps-2">
                      <IoIosArrowDown />
                    </span>
                  ) : (
                    <span className="ps-2">
                      <IoIosArrowUp />{" "}
                    </span>
                  )}
                </li>

                {isOpen && (
                  <li className="  w-32 ps-3 rounded-lg   font-medium">
                    <Link to="/models">
                      {" "}
                      <li
                        onClick={closeMenu}
                        className={` cursor-pointer text-white w-32 ps-3 rounded-lg   font-normal text-[15px] act  ${
                          path === "/models" && "active"
                        }`}
                      >
                        Models
                      </li>
                    </Link>

                    <Link to="/show-directors">
                      {" "}
                      <li
                        onClick={closeMenu}
                        className={` cursor-pointer text-white w-32 ps-3 rounded-lg my-2  font-normal text-[15px] act  ${
                          path === "/show-directors" && "active"
                        }`}
                      >
                        Show Directors
                      </li>
                    </Link>

                    <Link to="/designer">
                      {" "}
                      <li
                        onClick={closeMenu}
                        className={` cursor-pointer text-white w-32 ps-3 rounded-lg my-2  font-normal text-[15px] act  ${
                          path === "/designer" && "active"
                        }`}
                      >
                        Designers
                      </li>
                    </Link>
                  </li>
                )}

                <Link to="/gallery">
                  {" "}
                  <li
                    onClick={closeMenu}
                    className={` cursor-pointer text-white w-28 ps-3 rounded-lg my-2  font-medium act  ${
                      path === "/gallery" && "active"
                    }`}
                  >
                    Gallery
                  </li>
                </Link>

                <Link to="/partners">
                  {" "}
                  <li
                    onClick={closeMenu}
                    className={`  text-white w-28 ps-3 rounded-lg my-2  font-medium  act ${
                      path === "/partners" && "active"
                    }`}
                  >
                    Partners
                  </li>
                </Link>

                <Link to="/contact">
                  {" "}
                  <li
                    onClick={closeMenu}
                    className={` cursor-pointer mb-20 text-white w-28 ps-3 rounded-lg my-2  font-medium act  ${
                      path === "/contact" && "active"
                    }`}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
