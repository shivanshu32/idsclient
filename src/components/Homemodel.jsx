import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, passback } from "../assets/index";

const onTopStyle = {
    position: 'fixed',
    width: '100%', 
    height: '100%', 
    top: '10',
    left: '0',
    right: '0',
    bottom: '0',
    //backgroundColor: 'rgba(0,0,0,0.8)', /* Black background with opacity */
    zIndex: '200', /* Specify a stack order in case you're using a different order for other elements */
    cursor: 'pointer' /* Add a pointer on hover */
  }

export default function Index() {
  const [show, setshow_modal_XIV] = useState(true);
  return (
    <>
   <div style={onTopStyle} className="pt-24" >
          
          <div
            className={`${
              show ? "" : "hidden"
            }  w-full mx-auto     relative`} 
          >
            <div>
              <svg
                onClick={() => setshow_modal_XIV(false)}
                className="cursor-pointer absolute right-40 top-4 z-10"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                  fill="#ffffff"
                />
              </svg>

                {/* third epass starts */}
                <div className="mx-auto   flex justify-center items-center flex-col " >
                <div className="flex justify-start bg-gray-50 items-stretch flex-row border" >
                    <div className="flex items-center bg-black justify-end border-r border-dashed">
                        <p className="hidden lg:block transform flex  flex-shrink-0 -rotate-90 text-6xl font-semibold  text-yellow-500">#IDS</p>

                        <p className="hidden xs:block lg:hidden xl:hidden transform flex  flex-shrink-0 -rotate-90 text-xl font-semibold  text-yellow-500">ENTRY FOR 1</p>
                        {/* <p className="transform flex w-[100px] flex-shrink-0 -rotate-90 text-2xl font-semibold  text-white">09 / 11 / 2024</p> */}
                        
                    </div>
                    {/* <div className="flex items-center bg-gray-800 justify-end">
                        <p className="transform flex flex-shrink-0 -rotate-90 text-xl font-semibold  text-white">09 / 11 / 2024</p>
                        
                    </div> */}
    {/* part two starts */}
                    <div className="flex justify-center items-start flex-col">
                    <div className="container h-full">
                <div className="relative h-full">
                    <img className="md:block bg-black object-center object-fill w-full h-full md:h-full" src={passback} alt="Background-img" />
                    {/* <img className="md:hidden object-center object-fill w-full h-48 md:h-full" src="https://i.ibb.co/61GhRKg/Rectangle-32.png" alt="background-img" /> */}
                    <div className="absolute w-full flex flex-col justify-center h-full inset-0  md:px-10 ">
                        {/* <h1 className="text-xl md:text-3xl lg:text-4xl leading-5 md:leading-7 lg:leading-9 font-semibold text-white">Game Console</h1>
                        <p className="w-11/12 text-base md:text-xl lg:text-2xl leading-6 md:leading-5 font-normal lg:leading-6 text-white mt-2">Explore our newest game console collection</p> */}
                   
                
                  {/* social media start */}
                  <div className="flex items-center justify-between mt-2">
                            {/* <p className="text-xl leading-tight text-white">04&nbsp;/&nbsp;23</p> */}
                            <div className="flex justify-center items-center ">
                             
                            </div>
                            {/* <div className="flex items-center  ">
                                <span className="text-red-500 mt-4">
                            <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-map-pin" width={20} height={20} viewBox="0 0 40 40" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path
                        d="M27.2914 5.41641C29.2236 5.42218 31.0751 6.19231 32.4414 7.55861C33.8077 8.92491 34.5778 10.7764 34.5836 12.7086V27.2914C34.5778 29.2236 33.8077 31.0751 32.4414 32.4414C31.0751 33.8077 29.2236 34.5778 27.2914 34.5836H12.7086C10.7764 34.5778 8.92491 33.8077 7.55861 32.4414C6.19231 31.0751 5.42218 29.2236 5.41641 27.2914V12.7086C5.42218 10.7764 6.19231 8.92491 7.55861 7.55861C8.92491 6.19231 10.7764 5.42218 12.7086 5.41641H27.2914ZM27.2914 2.5H12.7086C7.09375 2.5 2.5 7.09375 2.5 12.7086V27.2914C2.5 32.9062 7.09375 37.5 12.7086 37.5H27.2914C32.9062 37.5 37.5 32.9062 37.5 27.2914V12.7086C37.5 7.09375 32.9062 2.5 27.2914 2.5Z"
                        fill="#1E293B"
                      />
                      <path
                        d="M29.479 12.707C29.0464 12.707 28.6234 12.5787 28.2637 12.3384C27.904 12.098 27.6236 11.7564 27.458 11.3566C27.2925 10.9569 27.2491 10.5171 27.3335 10.0928C27.4179 9.66844 27.6263 9.27866 27.9322 8.97274C28.2381 8.66681 28.6279 8.45847 29.0522 8.37406C29.4766 8.28966 29.9164 8.33298 30.3161 8.49855C30.7158 8.66411 31.0575 8.94449 31.2978 9.30422C31.5382 9.66395 31.6665 10.0869 31.6665 10.5195C31.6671 10.807 31.611 11.0917 31.5013 11.3574C31.3915 11.6231 31.2304 11.8645 31.0272 12.0677C30.8239 12.271 30.5825 12.4321 30.3169 12.5418C30.0512 12.6515 29.7664 12.7076 29.479 12.707Z"
                        fill="#1E293B"
                      />
                      <path
                        d="M20 14.1664C21.1538 14.1664 22.2816 14.5085 23.241 15.1495C24.2003 15.7905 24.948 16.7016 25.3895 17.7676C25.8311 18.8335 25.9466 20.0065 25.7215 21.1381C25.4964 22.2697 24.9408 23.3091 24.125 24.125C23.3091 24.9408 22.2697 25.4964 21.1381 25.7215C20.0065 25.9466 18.8335 25.8311 17.7676 25.3895C16.7016 24.948 15.7905 24.2003 15.1495 23.241C14.5085 22.2816 14.1664 21.1538 14.1664 20C14.1681 18.4533 14.7832 16.9705 15.8769 15.8769C16.9705 14.7832 18.4533 14.1681 20 14.1664ZM20 11.25C18.2694 11.25 16.5777 11.7632 15.1388 12.7246C13.6998 13.6861 12.5783 15.0527 11.9161 16.6515C11.2538 18.2504 11.0805 20.0097 11.4181 21.707C11.7558 23.4044 12.5891 24.9635 13.8128 26.1872C15.0365 27.4109 16.5956 28.2443 18.293 28.5819C19.9903 28.9195 21.7496 28.7462 23.3485 28.084C24.9473 27.4217 26.3139 26.3002 27.2753 24.8612C28.2368 23.4223 28.75 21.7306 28.75 20C28.75 17.6794 27.8281 15.4538 26.1872 13.8128C24.5462 12.1719 22.3206 11.25 20 11.25Z"
                        fill="#1E293B"
                      />
                    </svg>
                    </span>
                               <p className="xs:text-xs xs:mr-2 md:mr-0 md:text-sm ml-2 font-semibold leading-3 text-white">indiadesignershow</p>
                            </div> */}
                            
                </div>
    
                {/* social media ends */}
    
                {/* logo starts */}
                    <div className="flex justify-center items-center pt-4">
                  <img
                    src={logo}
                    alt="menu"
                    className="xs:w-[120px] sm:w-[120px] md:w-[120px]  lg:w-[200px]  object-contain cursor-pointer  "
                  />
                </div>
                {/* logo ends */}
    
                {/* season 5 */}
                <div className="flex justify-center items-center">
                
                <div>
                 <p className="lg:text-4xl xs:text-xl pt-4 font-semibold leading-4 text-yellow-500 ">SEASON 5</p>
                  </div>
    
                </div>
                {/* season 5 */}

                     {/* locations starts */}
                     <div className="flex justify-center items-center lg:mt-8 xs:mt-0">
                            {/* <span className="mr-1  text-red-500 dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={11} r={3} />
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                        </svg>
                                    </span> */}
                             
                            <p className="lg:text-xl xs:text-xs  font-medium leading-3 text-white ">8th-9th November 2024</p>
    </div> 
                {/* location ends */}
    
                 {/* locations starts */}
                 <div className="flex justify-center items-center lg:mt-8 xs:mt-0">
                            {/* <span className="mr-1  text-red-500 dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={11} r={3} />
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                        </svg>
                                    </span> */}
                             
                            <p className="lg:text-xl xs:text-xs  font-medium leading-3 text-white ">Major Dhyan Chand Stadium, India Gate, New Delhi</p>
    </div> 
                {/* location ends */}
    
                
                  {/* hashtag and date start */}
                  <div className="flex items-center justify-center lg:mt-8 xs:mt-0">
                            {/* <p className="text-xl leading-tight text-white">04&nbsp;/&nbsp;23</p> */}
                            <div className="flex justify-center items-center ">
                               {/* date starts */}
                 <div className="flex justify-center items-center ">
                                {/* <div className="flex items-center pr-2">
                                    <div className="w-5 h-5 bg-red-600 rounded-full z-10" />
                                    <div className="w-5 h-5 bg-yellow-500 -ml-2 z-0 rounded-full" />
                                </div> */}
                                 {/* <span className="mr-1  text-red-500 dark:text-gray-400">
                            <svg className="icon icon-tabler icon-tabler-map-pin"
                     width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V19.5C2.25 20.7426 3.25736 21.75 4.5 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V6C21.75 4.75736 20.7426 3.75 19.5 3.75Z"
                        stroke="currentColor"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.875 12C14.4963 12 15 11.4963 15 10.875C15 10.2537 14.4963 9.75 13.875 9.75C13.2537 9.75 12.75 10.2537 12.75 10.875C12.75 11.4963 13.2537 12 13.875 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M17.625 12C18.2463 12 18.75 11.4963 18.75 10.875C18.75 10.2537 18.2463 9.75 17.625 9.75C17.0037 9.75 16.5 10.2537 16.5 10.875C16.5 11.4963 17.0037 12 17.625 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.875 15.75C14.4963 15.75 15 15.2463 15 14.625C15 14.0037 14.4963 13.5 13.875 13.5C13.2537 13.5 12.75 14.0037 12.75 14.625C12.75 15.2463 13.2537 15.75 13.875 15.75Z"
                        fill="currentColor"
                      />
                      <path
                        d="M17.625 15.75C18.2463 15.75 18.75 15.2463 18.75 14.625C18.75 14.0037 18.2463 13.5 17.625 13.5C17.0037 13.5 16.5 14.0037 16.5 14.625C16.5 15.2463 17.0037 15.75 17.625 15.75Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.375 15.75C6.99632 15.75 7.5 15.2463 7.5 14.625C7.5 14.0037 6.99632 13.5 6.375 13.5C5.75368 13.5 5.25 14.0037 5.25 14.625C5.25 15.2463 5.75368 15.75 6.375 15.75Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.125 15.75C10.7463 15.75 11.25 15.2463 11.25 14.625C11.25 14.0037 10.7463 13.5 10.125 13.5C9.50368 13.5 9 14.0037 9 14.625C9 15.2463 9.50368 15.75 10.125 15.75Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.375 19.5C6.99632 19.5 7.5 18.9963 7.5 18.375C7.5 17.7537 6.99632 17.25 6.375 17.25C5.75368 17.25 5.25 17.7537 5.25 18.375C5.25 18.9963 5.75368 19.5 6.375 19.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.125 19.5C10.7463 19.5 11.25 18.9963 11.25 18.375C11.25 17.7537 10.7463 17.25 10.125 17.25C9.50368 17.25 9 17.7537 9 18.375C9 18.9963 9.50368 19.5 10.125 19.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M13.875 19.5C14.4963 19.5 15 18.9963 15 18.375C15 17.7537 14.4963 17.25 13.875 17.25C13.2537 17.25 12.75 17.7537 12.75 18.375C12.75 18.9963 13.2537 19.5 13.875 19.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6 2.25V3.75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 2.25V3.75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.75 7.5H2.25"
                        stroke="currentColor"
                        strokeLinejoin="round"
                      />
                    </svg>
                                    </span> */}
                                    <Link to="/ids/season5" >
                                     <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm">Grab Your Passes</button>
                                     </Link>
                                     {/* Code block for primary button ends */}
                                {/* <p className="sm:text-xl md:text-2xl  leading-3 text-white ">
                                   
                                   show name */}
                               {/* { returnshowname(props.doc1.finalshowid) } */}
                                {/* </p>   */}
                            </div>
                            {/* date ends */}
                            </div>
                            {/* <div className="flex items-center  "> */}
                                {/* <div className="flex items-center pr-2">
                                    <div className="w-5 h-5 bg-red-600 rounded-full z-10" />
                                    <div className="w-5 h-5 bg-yellow-500 -ml-2 z-0 rounded-full" />
                                </div> */}
                               {/* <p className="text-6xl font-semibold leading-3 text-white">#IDS</p> */}
                            {/* </div> */}
                            
                </div>
    
                {/* hashtag and date end */}
    
                  {/* date starts */}
                  <div className="flex justify-end items-center mt-4">
                                {/* <div className="flex items-center pr-2">
                                    <div className="w-5 h-5 bg-red-600 rounded-full z-10" />
                                    <div className="w-5 h-5 bg-yellow-500 -ml-2 z-0 rounded-full" />
                                </div> */}
                                {/* <span className="text-red-500">
                                <svg className="icon icon-tabler icon-tabler-map-pin" width={20} height={20} viewBox="0 0 48 48" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.0317 44.437L24.9567 44.4248C24.9672 44.4329 24.9796 44.4383 24.9927 44.4404C25.0058 44.4425 25.0192 44.4413 25.0317 44.437Z" fill="#4B5563" />
                            <path
                                d="M42.0845 17.6044C42.0631 17.4913 42.0045 17.3885 41.9181 17.3125C41.8316 17.2365 41.7223 17.1915 41.6073 17.1847C41.4924 17.1779 41.3785 17.2097 41.2837 17.275C41.1889 17.3404 41.1187 17.4355 41.0841 17.5453C41.0511 17.6496 40.9858 17.7407 40.8977 17.8055C40.8096 17.8704 40.7032 17.9056 40.5938 17.9062H39.1435C39.0497 17.9063 38.9576 17.8807 38.8773 17.8322L36.7791 16.5741C36.6988 16.5255 36.6067 16.4999 36.5129 16.5H33.1566C33.0545 16.4999 32.9546 16.5302 32.8698 16.5872L28.7307 19.3462C28.6592 19.3939 28.6006 19.4586 28.5603 19.5346C28.5201 19.6105 28.4994 19.6953 28.5001 19.7812V23.6944C28.5 23.7881 28.5254 23.8802 28.5736 23.9606C28.6218 24.0411 28.6911 24.1068 28.7738 24.1509L34.201 27.0478C34.2826 27.0917 34.3509 27.1565 34.399 27.2356C34.4472 27.3147 34.4733 27.4052 34.4748 27.4978L34.5001 29.7C34.5015 29.7911 34.527 29.8803 34.5739 29.9585C34.6208 30.0367 34.6875 30.1011 34.7673 30.1453L36.9479 31.3519C37.0287 31.3967 37.096 31.4624 37.143 31.542C37.19 31.6216 37.2149 31.7122 37.2151 31.8047V36.3609C37.2151 36.4605 37.2438 36.5579 37.2979 36.6416C37.3519 36.7252 37.4289 36.7915 37.5196 36.8325C37.6104 36.8734 37.711 36.8874 37.8095 36.8726C37.908 36.8578 38.0001 36.8149 38.0748 36.749C38.9541 35.9747 40.2151 34.844 40.3829 34.5853C40.6604 34.1559 40.9207 33.7162 41.1638 33.2662C41.6673 32.3338 42.0937 31.3619 42.4388 30.36C43.6276 26.9184 42.6882 20.7319 42.0845 17.6044Z"
                                fill="currentColor"
                            />
                            <path
                                d="M26.8499 28.388L21.1002 24.0755C21.0353 24.0268 20.9564 24.0005 20.8752 24.0005H18.1471C18.1004 24.0006 18.0542 23.9914 18.0111 23.9735C17.968 23.9557 17.9288 23.9295 17.8959 23.8964L16.6096 22.6102C16.5748 22.5754 16.5334 22.5478 16.4879 22.529C16.4424 22.5101 16.3936 22.5005 16.3443 22.5005H11.3577C11.2875 22.5005 11.2188 22.4797 11.1603 22.4406C11.1019 22.4016 11.0564 22.3461 11.0295 22.2812C11.0026 22.2162 10.9955 22.1448 11.0093 22.0759C11.023 22.0069 11.0568 21.9436 11.1065 21.8939L11.8959 21.1046C11.9288 21.0715 11.968 21.0453 12.0111 21.0275C12.0542 21.0096 12.1005 21.0005 12.1471 21.0005H15.1818C15.3453 21.0005 15.5042 20.9471 15.6345 20.8485C15.7648 20.7498 15.8593 20.6113 15.9037 20.4539L16.5496 18.1571C16.5634 18.1077 16.5871 18.0617 16.6194 18.0219C16.6516 17.982 16.6917 17.9492 16.7371 17.9255L19.3124 16.5999C19.3704 16.5699 19.419 16.5246 19.4529 16.4689C19.4868 16.4132 19.5047 16.3492 19.5046 16.2839V15.1121C19.5047 15.0394 19.527 14.9684 19.5684 14.9086L20.9371 12.938C20.9782 12.8788 21.0364 12.8336 21.104 12.8086L23.0193 12.0896C23.0871 12.0642 23.1454 12.0187 23.1867 11.9592C23.2279 11.8998 23.2499 11.8291 23.2499 11.7568V10.688C23.2499 10.6294 23.2355 10.5717 23.2078 10.52C23.1802 10.4684 23.1402 10.4243 23.0915 10.3918L21.1715 9.11488C21.1187 9.08018 21.0578 9.06 20.9947 9.05637C20.9317 9.05275 20.8688 9.06582 20.8124 9.09426L18.1987 10.4011C18.1389 10.4307 18.072 10.4427 18.0056 10.4359C17.9393 10.4291 17.8762 10.4037 17.8237 10.3627L16.5843 9.38301C16.542 9.34899 16.5081 9.30577 16.485 9.25663C16.462 9.20749 16.4505 9.15373 16.4514 9.09946C16.4523 9.0452 16.4656 8.99186 16.4902 8.94351C16.5149 8.89517 16.5503 8.85309 16.5937 8.82051L17.6006 8.07895C17.6461 8.04551 17.6831 8.00166 17.7082 7.95105C17.7334 7.90044 17.7461 7.84454 17.7453 7.78802C17.7445 7.7315 17.7301 7.67599 17.7035 7.62614C17.6768 7.57629 17.6387 7.53353 17.5921 7.50145L16.0237 6.40738C15.9694 6.36916 15.9054 6.34695 15.8391 6.34331C15.7728 6.33966 15.7068 6.35472 15.6487 6.38676C15.0815 6.69707 13.4174 7.61582 12.8268 8.02926C10.0941 9.94563 7.89488 12.5269 6.43682 15.5293C6.26619 15.8818 6.05526 16.2408 6.03463 16.628C6.01401 17.0152 5.71026 17.8796 5.5837 18.2293C5.56662 18.2765 5.5598 18.3269 5.56368 18.377C5.56756 18.4271 5.58205 18.4758 5.60619 18.5199L8.95213 24.668C8.98224 24.7239 9.02695 24.7705 9.0815 24.803L12.6018 26.9161C12.6475 26.9433 12.6864 26.9805 12.7158 27.0248C12.7452 27.0691 12.7642 27.1194 12.7715 27.1721L13.4765 32.2852C13.4834 32.3342 13.5004 32.3812 13.5263 32.4234C13.5523 32.4655 13.5867 32.5017 13.6274 32.5299L16.3743 34.418C16.4539 34.4727 16.5093 34.556 16.529 34.6505L17.9859 41.5693C17.994 41.6099 18.0096 41.6487 18.0318 41.6836C18.1687 41.9049 18.7143 42.7149 19.3724 42.8349C19.3115 42.8518 19.2571 42.8902 19.1962 42.908C19.3543 42.9358 19.5107 42.9721 19.6649 43.0168C19.8524 43.0674 20.0399 43.1105 20.2274 43.1508C20.5209 43.2089 20.5499 43.2539 20.6905 42.9933C20.878 42.6446 21.0927 42.5246 21.253 42.4814C21.3192 42.4662 21.3797 42.4326 21.4277 42.3845C21.4756 42.3364 21.509 42.2758 21.524 42.2096L22.468 37.8333C22.4879 37.7416 22.5414 37.6606 22.618 37.6064L26.8368 34.6158C26.8858 34.5811 26.9258 34.5352 26.9534 34.4818C26.9809 34.4285 26.9953 34.3693 26.9952 34.3093V28.688C26.9958 28.6302 26.9829 28.573 26.9577 28.521C26.9325 28.4689 26.8956 28.4234 26.8499 28.388Z"
                                fill="currentColor"
                            />
                            <path d="M24.5625 4.5C24.5625 4.5 24.2203 4.51969 24.1509 4.52156C23.6428 4.53656 23.1359 4.57156 22.6303 4.62656C20.7871 4.82652 18.9819 5.28901 17.2697 6C17.4975 6.1575 17.1056 6.30188 17.1056 6.30188L17.7187 7.5H21L23.25 8.625L25.2187 7.5L24.5625 4.5Z" fill="#4B5563" />
                            <path
                                d="M33.2087 11.2563L34.719 9.94383C34.7663 9.9028 34.8025 9.85058 34.8245 9.79195C34.8464 9.73331 34.8533 9.67012 34.8445 9.60814C34.8358 9.54616 34.8116 9.48736 34.7743 9.4371C34.737 9.38684 34.6877 9.34671 34.6309 9.32039L32.8674 8.50196C32.7779 8.46017 32.6754 8.45544 32.5824 8.48879C32.4893 8.52215 32.4132 8.5909 32.3706 8.68008L31.644 10.1998C31.6045 10.2828 31.5968 10.3776 31.6226 10.4659C31.6484 10.5542 31.7057 10.63 31.7837 10.6788L32.7643 11.292C32.8325 11.3343 32.9124 11.3538 32.9924 11.3473C33.0724 11.3409 33.1482 11.309 33.2087 11.2563Z"
                                fill="currentColor"
                            />
                            <path
                                d="M40.2793 13.1882L39.7327 12.3445C39.7243 12.3314 39.7168 12.3182 39.7093 12.3042C39.6108 12.1026 38.7962 10.4573 38.1155 9.81886C37.6046 9.33605 37.4593 9.47479 37.419 9.58167C37.3959 9.64078 37.3574 9.69259 37.3074 9.73167L34.6037 11.917C34.5371 11.9708 34.454 12.0003 34.3684 12.0004H32.9687C32.9194 12.0004 32.8706 12.01 32.8251 12.0289C32.7796 12.0477 32.7382 12.0753 32.7034 12.1101L31.5784 13.2351C31.5435 13.2699 31.5158 13.3113 31.497 13.3568C31.4781 13.4023 31.4684 13.4511 31.4684 13.5004C31.4684 13.5497 31.4781 13.5985 31.497 13.644C31.5158 13.6895 31.5435 13.7309 31.5784 13.7657L32.7034 14.8907C32.7382 14.9255 32.7796 14.9531 32.8251 14.972C32.8706 14.9908 32.9194 15.0004 32.9687 15.0004H40.0158C40.0665 15.0005 40.1166 14.9902 40.1631 14.9704C40.2097 14.9506 40.2518 14.9215 40.2868 14.885C40.3218 14.8485 40.3491 14.8052 40.367 14.7579C40.3849 14.7105 40.393 14.66 40.3908 14.6095L40.3393 13.3767C40.3365 13.3096 40.3158 13.2445 40.2793 13.1882Z"
                                fill="currentColor"
                            />
                            <path
                                d="M24 6.75C27.9909 6.74967 31.8584 8.13314 34.9436 10.6647C38.0289 13.1962 40.1408 16.7192 40.9197 20.6334C41.6986 24.5475 41.0962 28.6107 39.2152 32.1305C37.3341 35.6503 34.2909 38.4089 30.6039 39.9365C26.9169 41.464 22.8143 41.6658 18.9951 40.5076C15.176 39.3493 11.8766 36.9027 9.6592 33.5845C7.44177 30.2663 6.44346 26.282 6.83439 22.3103C7.22532 18.3386 8.9813 14.6253 11.8031 11.8031C13.401 10.1961 15.3017 8.92208 17.3953 8.0547C19.489 7.18733 21.7338 6.74387 24 6.75ZM24 3C12.4031 3 3 12.4031 3 24C3 35.5969 12.4031 45 24 45C35.5969 45 45 35.5969 45 24C45 12.4031 35.5969 3 24 3Z"
                                fill="currentColor"
                            />
                        </svg>
                                </span> */}
                                
                                {/* <p className="text-sm ml-2 font-semibold leading-3 text-white ">www.indiadesignershow.com</p>   */}
                            </div>
                            {/* date ends */}
    
                
    
                
                   
                    </div>
                </div>
            </div>
                    </div>
    {/* part two ends */}
    
                   

                    

                </div>
                
            </div>
                {/* third epass ends */}
            
              
            </div>
           
          </div>
       </div>
    </>
  );
}
