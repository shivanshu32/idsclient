import React, {useState} from "react";
import { seFivedesk, sefivemo, sefivevidtab } from "../../assets";
import { Link } from "react-router-dom";
import VideoComponent from "../../components/Components";
import Card from "./components/card";
import CustomModel from "./components/custommodel";


const Seasson5 = () => {


    const [show, setshow_modal_XII] = useState(false);
    const [showTitle, setshow_title] = useState("NA")
    const [showDateTime, setshow_datetime] = useState("NA")
    const [showPrice, setShowPrice] = useState(233)
    const [showId, setShowID] = useState("NA")

    const openModel = (title, dateis, showprice, showid) => {

        //alert(showprice)
       
        setshow_modal_XII(true)
        setshow_title(title)
        setshow_datetime(dateis)
        setShowPrice(showprice)
        setShowID(showid)

    }
   // alert(show)
    
  return (
    <>
        <span className="relative flex justify-center">
       
       <VideoComponent deskvid={seFivedesk} mobvid={sefivemo} tabvid={sefivevidtab} />
      
     </span>
    <div className="pt-20">
      <p className="text-secondary text-center underline font-Lato text-[28px] font-semibold">INDIA DESIGNER SHOW SEASON 5 </p>
      <p className="text-white text-xl text-center pt-3 font-Lato "> <b>Date</b> 8th-9th November 2024</p>
      <p className="text-white text-xl text-center pt-3 font-Lato "> <b>Venue</b> Major Dhyanchand Stadium India Gate </p>
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
 
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* inner starts */}
             
            {/* Card is full width. Use in 12 col grid for best view. */}
           <Card title="Day 1 | 1st Show | Grand Opening" dateis="8th November 2024 | Friday | 6:00pm to 6:30pm" onOpen={openModel} showid="shw1" showprice="599" />
            {/* Card code block end */}
   
                {/* inner ends */}
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* second inner starts  */}
              
            
              <Card title="Day 1 | 2nd Show | Closing " dateis="8th November 2024 | Friday | 8:00pm to 9:30pm" onOpen={openModel} showid="shw2" showprice="999" />
            
                {/* second inner ends */}
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-gray-700 " >
                     {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
           
            <Card title="Day 2 | Grand Opening" dateis="9th November 2024 | Saturday | 3:00pm to 3:30pm" onOpen={openModel} showid="shw3" showprice="599" />
            {/* Card code block end */}
                </div>

                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* inner starts */}
             
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
          
          <Card title="Day 2 | 2nd Show" dateis="9th November 2024 | Saturday | 4:00pm to 5:00pm" onOpen={openModel} showid="shw4" showprice="599" />
            {/* Card code block end */}
   
                {/* inner ends */}
                </div>

                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* inner starts */}
             
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <Card title="Day 2 | 3rd Show" dateis="9th November 2024 | Saturday | 6:00pm to 6:30pm" onOpen={openModel }  showid="shw5" showprice="599" />
         
            {/* Card code block end */}
   
                {/* inner ends */}
                </div>

                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* inner starts */}
             
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            
            <Card title="Day 2 | 4th Show" dateis="9th November 2024 | Saturday | 7:00pm to 7:30pm" onOpen={openModel} showid="shw6" showprice="599" />
            {/* Card code block end */}
   
                {/* inner ends */}
                </div>

                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* inner starts */}
             
          
                <Card title="Day 2 | 5th Show" dateis="9th November 2024 | Saturday | 8:00pm to 8:30pm" onOpen={openModel } showid="shw7" showprice="599" />
   
                {/* inner ends */}
                </div>
                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* inner starts */}
             
         
           
           <Card title="Day 2 | Grand Finale" dateis="9th November 2024 | Saturday | 9:30pm to 10:30pm" onOpen={openModel} showid="shw8" showprice="999"  />
   
                {/* inner ends */}
                </div>
                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* inner starts */}
             
           
           <Card title="VIP Pass | Whole Event" dateis="9th November 2024 | All Day" onOpen={openModel}  showid="shw9" showprice="19999" />
          
   
                {/* inner ends */}
                </div>
            </div>
    
    {/* test ends */}
    
     <CustomModel isOpen={show} onClose={()=> setshow_modal_XII(false) } showtitle={showTitle} showprice={showPrice} showid={showId} showdatetime={showDateTime} />

         </>

  );
};

export default Seasson5;
