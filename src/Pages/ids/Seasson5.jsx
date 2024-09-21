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
                        <p className="mb-6 font-normal text-gray-600 dark:text-gray-400 text-sm tracking-normal w-11/12 lg:w-9/12">
                        Unlock the ultimate VIP experience at the India Designer Show! <br /><br />With your exclusive pass, enjoy premium access to: <br /> 

✨ Front-row seats <br />
✨ Meet & greet with fashion icons and influencers <br />
✨ Complimentary refreshments in the VIP lounge <br /> <br />

Don’t miss out on this once-in-a-lifetime opportunity! <br /> <br />
Get your pass now and step into the world of high fashion!
                        </p>

                        <div className=" py-5">
                            <p className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">First Show - 3:00pm to 3:30pm</p>
                            <p className="text-sm leading-3 text-gray-500 dark:text-gray-400 pt-2">9 November 2024, Saturday</p> 
                            
                            <p className="text-xl font-semibold leading-tight text-indigo-700 dark:text-gray-100 pt-6 pt-3">₹ 600</p>
                            <div className="pt-4">
                                <button className="py-2 px-4 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white">Book Now</button>
                            </div>
                        </div>

                        <div className="flex lg:items-center items-start flex-col lg:flex-row">
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
                                <p className="text-gray-600 dark:text-gray-400 text-xs font-normal ml-1">+12 Attendees</p>
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
                    </div>
                    <div className="px-5 lg:px-5 md:px-10 py-3 lg:py-4 flex flex-row items-center justify-between border-t border-gray-300">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                    <input defaultChecked type="radio" name="radio" className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                                    <div className="check-icon hidden border-4 border-black dark:border-gray-700 rounded-full w-full h-full z-1" />
                                </div>
                                <p className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Going</p>
                            </div>
                            <div className="flex items-center ml-6">
                                <div className="bg-white rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                    <input type="radio" name="radio" className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                                    <div className="check-icon hidden border-4 border-black dark:border-gray-700 rounded-full w-full h-full z-1" />
                                </div>
                                <p className="ml-3 text-base leading-4 font-normal text-gray-800 dark:text-gray-100">Not Going</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-gray-600 dark:text-gray-400 hover:text-gray-700 cursor-pointer mr-4">
                                <svg className="feather feather-bookmark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <div className="text-indigo-700 dark:text-indigo-600 hover:text-indigo-600 cursor-pointer">
                                <svg className="feather feather-share-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx={18} cy={5} r={3} />
                                    <circle cx={6} cy={12} r={3} />
                                    <circle cx={18} cy={19} r={3} />
                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                </svg>
                            </div>
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
