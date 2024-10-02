import React, { useEffect, useRef, useState } from "react";
import axios from "axios";



import queryString from 'query-string';
import { Link, useParams } from "react-router-dom";
import Ticket from './ids/components/ticket'

export default function IndexPage() {
  const thisarr = [1,2,3,4,5]
  const [thisdata, setData] = useState(thisarr);

  const [displaypass, setDisplaypass]  = useState(false);

  let { txnid } = useParams();

  //alert(txnid)


  useEffect(() => {
    
    // const response = await fetch(`http://localhost:8800/getpassdetails/${txnid}/`);

  
    const fetchData = async () => {
      try {
       // const response = await axios.get(`http://localhost:8800/getpassdetails?txnid=${txnid}`);
        const response = await axios.get(`https://idsserver-app-tk64n.ondigitalocean.app/getpassdetails?txnid=${txnid}`);
        
        console.log("response is")
        setData(response.data);
        
       // setDisplaypass
       // console.log(response.data);
        return response.data

        // alert(thisdata)
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };
    
    fetchData()
    .then((data)=>{

      setDisplaypass(true)
      console.log("in fetch data")
      console.log(data)
      setData(data)
    })

     
    // const fetchData = async () => {
    //   const urlis = `http://localhost:8800/getpassdetails?txnid=${txnid}`
   
    //   const response = await fetch(urlis);
    //   const newData = response;

    //   console.log("server response is")
    //   console.log(newData)
    //   alert(JSON.stringify(newData))

    //   setData(newData);
    // };

    // fetchData();


  }, []);



  //console.log("data is")
  //console.log(data)



 

    // for(const d in data){
    //   console.log("d is")
    //   console.log(d)
    // }

    return (
         // for(const d in data){
    //   console.log("d is")
    //   console.log(d)
    // }
    <>    
     
<div>
     {
     
     thisdata.map(element => {
    
      return <Ticket doc1={element} />
     
     })
    
    }
</div>

    </>

   
    );
  
  



  //alert(txnid)


    
}
