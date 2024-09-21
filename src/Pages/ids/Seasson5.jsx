import React from "react";
import { seFivedesk, sefivemo, sefivevidtab } from "../../assets";
import { Link } from "react-router-dom";
import VideoComponent from "../../components/Components";

const Seasson5 = () => {
  return (
    <>
        <span className="relative flex justify-center">
       
       <VideoComponent deskvid={seFivedesk} mobvid={sefivemo} tabvid={sefivevidtab} />
      
     </span>
    <div className="pt-20">
      <p className="text-secondary text-center underline font-Lato text-[28px] font-semibold">INDIA DESIGNER SHOW SEASON 5 </p>
      <p className="text-white text-xl text-center pt-3 font-Lato "> <b>Date</b> 8th-9th November 2024</p>
      <p className="text-white text-xl text-center pt-3 font-Lato "><b>Venue</b> Major Dhyanchand Stadium India Gate </p>
      {/* <span className = "flex   items-center justify-center gap-6 mt-12 ">
      <Link to = "/contact" className="flex justify-center">
            <span className="bg-secondary text-white px-6 py-2 rounded-md ">
          Join us
            </span>
          </Link>
          <span className="bg-secondary text-white px-6 py-2 rounded-md ">
          Pay Now
            </span>
          </span> */}
    </div>

    {/* test starts */}
 
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* inner starts */}
             
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="flex flex-col-reverse lg:flex-row w-full bg-white dark:bg-gray-800 shadow rounded">
                <div className="w-full lg:w-full">
                    <div className="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6">
                        {/* <div className="flex justify-between items-center lg:items-start flex-row-reverse lg:flex-col">
                            <h4 className="text-base text-indigo-700 dark:text-indigo-600 tracking-normal leading-4">First Show 3:00pm - 3:30pm</h4>
                            <h4 className="lg:mt-3 text-gray-600 dark:text-gray-400 text-base font-normal">9 November 2024, Saturday</h4>
                        </div> */}
                        <h2 className="text-gray-800 dark:text-gray-100 mt-4  tracking-normal text-xl lg:text-2xl font-bold">First Show - 3:00pm to 3:30pm</h2>
                        <p className="text-sm leading-3 text-gray-500 dark:text-gray-400 pt-2">9 November 2024, Saturday</p> <br />

                        <div className="flex lg:items-center items-start flex-col lg:flex-row pb-8">
                            <div className="flex items-center">
                                <div className="border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                    <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card8.jpg" alt="avatar" />
                                </div>
                                <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                    <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card9.jpg" alt="avatar" />
                                </div>
                                <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                    <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card10.jpg" alt="avatar" />
                                </div>
                                <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                    <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card11.jpg" alt="avatar" />
                                </div>
                                <div className="-ml-2 border-2 border-white dark:border-gray-700 shadow rounded-full w-6 h-6">
                                    <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card12.jpg" alt="avatar" />
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-xs font-normal ml-1">500+ Attendees</p>
                            </div>
                            <div className="mt-4 lg:mt-0 ml-0 lg:ml-12 flex items-end">
                                <span className="mr-1 text-gray-600 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={11} r={3} />
                                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                    </svg>
                                </span>
                                <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal text-center">Major Dhyan Chand Stadium</p>
                            </div>
                        </div>

                        <p className="mb-6 font-normal text-gray-600 dark:text-gray-400 text-sm tracking-normal w-11/12 lg:w-9/12">
                        Unlock the ultimate experience at the India Designer Show! <br /><br />With your exclusive pass: <br /> 

✨ Enjoy premium access to Show Area <br />
✨ Terms & Conditions Applicable 

{/* Don’t miss out on this once-in-a-lifetime opportunity! <br /> <br />
Get your pass now and step into the world of high fashion! */}
                        </p>

                        <div className=" py-2">
                            {/* <p className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">First Show - 3:00pm to 3:30pm</p>
                            <p className="text-sm leading-3 text-gray-500 dark:text-gray-400 pt-2">9 November 2024, Saturday</p>  */}



                            

                            {/* test starts */}
                            <div className="md:flex items-center justify-between">
                        <div className="flex ">
                            <div className="flex-col items-center ">
                            <p className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">First Show - 3:00pm to 3:30pm</p>
                            <p className="text-sm leading-3 text-gray-500 dark:text-gray-400 pt-2">9 November 2024, Saturday</p> 

                                
                            </div>
                        </div>

                        <div className="flex items-center xl:mt-0 mt-4">
                
                            <button className="bg-gray-700 text-sm text-white ml-3 px-4 py-2 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                                    <circle cx="5.25033" cy="4.08333" r="2.33333" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M1.75 12.25V11.0833C1.75 9.79467 2.79467 8.75 4.08333 8.75H6.41667C7.70533 8.75 8.75 9.79467 8.75 11.0833V12.25" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M9.33301 6.04166C9.1259 6.04166 8.95801 6.20956 8.95801 6.41666C8.95801 6.62377 9.1259 6.79166 9.33301 6.79166V6.04166ZM12.833 6.79166C13.0401 6.79166 13.208 6.62377 13.208 6.41666C13.208 6.20956 13.0401 6.04166 12.833 6.04166V6.79166ZM11.458 4.66666C11.458 4.45956 11.2901 4.29166 11.083 4.29166C10.8759 4.29166 10.708 4.45956 10.708 4.66666H11.458ZM10.708 8.16666C10.708 8.37377 10.8759 8.54166 11.083 8.54166C11.2901 8.54166 11.458 8.37377 11.458 8.16666H10.708ZM9.33301 6.79166H12.833V6.04166H9.33301V6.79166ZM10.708 4.66666V8.16666H11.458V4.66666H10.708Z"
                                        fill="white"
                                    />
                                </svg>
                                <span className="ml-2">Book a Seat</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        {/* <p className="text-sm leading-7 mt-5 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et quidem faciunt, ut de voluptate ponit, quod summum bonum sit aut rerum et quidem, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et quidem faciunt, ut de voluptate ponit, quod summum bonum sit aut.</p> */}
                    </div>
                
                            {/* test ends */}
                            
                            {/* <p className="text-xl font-semibold leading-tight text-indigo-700 dark:text-gray-100 pt-6 pt-3">₹ 600</p>
                            <div className="pt-4">
                                <button className="py-2 px-4 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white">Book Now</button>
                            </div> */}
                        </div>

                       

                        
                    </div>
                   
                </div>
                {/* <div className="relative w-full h-64 lg:h-auto lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block">
                    <img className="w-full h-full absolute inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_27.png" alt="banner" />
                </div> */}

                <style>
                    {` .checkbox:checked {
                                    border: none;
                                }
                                .checkbox:checked + .check-icon {
                                    display: flex;
                                }`}
                </style>
            </div>
            {/* Card code block end */}
   
                {/* inner ends */}
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 " >
                {/* second inner starts  */}
               
            
                {/* second inner ends */}
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
            </div>
    
    {/* test ends */}
    </>
  );
};

export default Seasson5;
