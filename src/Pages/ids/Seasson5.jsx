import React, {useState} from "react";
import { passbacksquare, seFivedesk, sefivemo, sefivevidtab, passback, passgoldback } from "../../assets";
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
      <p className="text-white text-xl text-center pt-3 font-Lato "> <b>Date</b> 22nd December 2024</p>
      <p className="text-white text-xl text-center pt-3 font-Lato "> <b>Venue</b> Major Dhyanchand Stadium, India Gate, Delhi. </p>
      <p className="text-white text-xl text-center pt-3 font-Lato "> <b>Entry</b> From Gate No 3 & 4 </p>
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
                {/* <div className="rounded border-gray-300  dark:border-gray-700 relative " > */}

                 
                {/* inner starts */}
             
            {/* Card is full width. Use in 12 col grid for best view. */}
           {/* <Card title="Day 1 | Award Show" dateis="21st December 2024 | Saturday" onOpen={openModel} showid="shw1" showprice="999" backg={passback} /> */}
            {/* Card code block end */}
   
                {/* inner ends */}
                {/* </div> */}

                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* inner starts */}
             
           
              <Card title="VIP Pass | Whole Event" dateis="22nd December 2024 | All Day" onOpen={openModel}  showid="shw9" showprice="14999"  backg={passgoldback} />
          
   
                {/* inner ends */}
                </div>

                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* second inner starts  */}
              
            
              <Card title="1st Show | Rosy Ahluwalia | Grand Opening " dateis="22nd December 2024 | Sunday | 6:00pm" onOpen={openModel} showid="shw2" showprice="599"  backg={passback} />
            
                {/* second inner ends */}
                </div>
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-gray-700 " >
                     {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
           
              <Card title="2nd Show | Sumitra Bafna" dateis="22nd December 2024 | Sunday | 7:00pm" onOpen={openModel} showid="shw3" showprice="599"  backg={passback} />
            {/* Card code block end */}
                </div>

                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* inner starts */}
             
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
          
             <Card title="3rd Show | Silai By Bharti Mittal" dateis="22nd December 2024 | Sunday | 8:00pm" onOpen={openModel} showid="shw4" showprice="599"  backg={passback} />
            {/* Card code block end */}
   
                {/* inner ends */}
                </div>

                <div className="rounded border-gray-300  dark:border-gray-700  " >
                {/* inner starts */}
             
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <Card title="Grand Finale | Meeami Fashion" dateis="22nd December 2024 | Sunday | 9:00pm" onOpen={openModel }  showid="shw5" showprice="599"  backg={passback} />
         
            {/* Card code block end */}
   
                {/* inner ends */}
                </div>

                {/* <div className="rounded border-gray-300  dark:border-gray-700  " > */}
                {/* inner starts */}
             
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            
            {/* <Card title="Day 2 | 2D Show" dateis="22nd December 2024 | Sunday | 8:00pm to 9:00pm" onOpen={openModel} showid="shw6" showprice="599"  backg={passback} /> */}
            {/* Card code block end */}
   
                {/* inner ends */}
                {/* </div> */}

                {/* <div className="rounded border-gray-300  dark:border-gray-700  " > */}
                {/* inner starts */}
             
          
                {/* <Card title="Day 2 | Grand Finale" dateis="22nd December 2024 | Sunday | 10:00pm" onOpen={openModel } showid="shw7" showprice="1499"  backg={passback} /> */}
   
                {/* inner ends */}
                {/* </div> */}
                {/* <div className="rounded border-gray-300  dark:border-gray-700  " > */}
                {/* inner starts */}
             
         
           
           {/* <Card title="General Pass | Whole Event" dateis="22nd December 2024 | All Day" onOpen={openModel} showid="shw8" showprice="3999"  backg={passback}  /> */}
   
                {/* inner ends */}
                {/* </div> */}
                
            </div>
    
    {/* test ends */}
    
     <CustomModel isOpen={show} onClose={()=> setshow_modal_XII(false) } showtitle={showTitle} showprice={showPrice} showid={showId} showdatetime={showDateTime} />

         </>

  );
};

export default Seasson5;
