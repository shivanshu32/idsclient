import React, { useState } from "react";
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import apiurl from "../../../util";
import { toast } from "react-toastify";

const onTopStyle = {
  position: 'fixed',
  width: '100%', 
  height: '100%', 
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0,0,0,0.8)', /* Black background with opacity */
  zIndex: '200', /* Specify a stack order in case you're using a different order for other elements */
  cursor: 'pointer' /* Add a pointer on hover */
}

export default function CustomModel(props) {

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   occupation: "",
  //   showid: ""
  // });

  // const changeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name Required'),
  email: Yup.string().email('Invalid email').required('Email Required'),
  phone: Yup.string().required('Please enter your phone number'),
  occupation: Yup.string().required('Please enter your occupation'),
})


  const [firststep, setStep] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [merchanttxnid, setMerchanttxnid] = useState(1);
  const[displayshowprice, setShowPrice] = useState(false)
  //alert(displayshowprice)

  const proceedClick = async() => {
    if(firststep){
      setStep(false)
    }
    else {
      const finalprice = quantity * props.showprice
      const finalmerchanttxnid = merchanttxnid

      const data = {
        totalprice: finalprice * 100,
        merchanttxnid: finalmerchanttxnid,
        quantity: quantity,
        showid: props.showid,
        cost: props.showprice

      }
      //alert(finalprice)
      //alert(finalmerchanttxnid)
      try {
        const response = await apiurl.post("/paynow", data);
        //alert(JSON.stringify(response.data.data.instrumentResponse.redirectInfo.url))

        const redirectURL = response.data.data.instrumentResponse.redirectInfo.url
        //alert(redirectURL)

        window.location.href = redirectURL;
        
        //navigate(redirectURL);

       

        //alert(response.data.message)
        //toast.success(response.data.message || "Registration successful!");
        //navigate("/registration-successfull");
      } catch (error) {
        console.error("Failed to proceed:", error);
        toast.error(
          error.response?.data?.message ||
            "Failed to Proceed. Please try again later."
        );
      }

      
    }
  }

  const closeClick = () => {
    setStep(true)
   // alert('closeCalled')
    setQuantity(1)
    setShowPrice(false)
   props.onClose()
    
  }

  const incQuantity = (quantity,showprice) => {
    const newquantity = quantity + 1
    const newprice = Number(showprice) * newquantity
    //alert(newprice)
    //alert(newquantity)
    setQuantity(newquantity)
    setShowPrice(newprice)

  }

  const decQuantity = (quantity,showprice) => {
    if(quantity != 1)
    {
      const newquantity =   quantity - 1
      const newprice = Number(showprice) * newquantity
      //alert(newprice)
      //  alert(newquantity)
      setQuantity(quantity-1)
      setShowPrice(newprice)

    }
    
  }
  
  //alert(JSON.stringify(open))
  
  return (
    <> 
        <div
        style={onTopStyle}
          className={`${
            props.isOpen ? "flex" : "hidden"
          } lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] justify-center mx-auto bg-[#4C4C4C]  md:px-6 px-4  lg:py-24 md:py-12 py-9 relative`}
        >
          <div className="lg:px-5 md:px-6 px-4 py-5">
            <div className="md:flex block justify-center">
              <div className="bg-white flex justify-end items-center h-[50px] px-4 w-full md:hidden block">
                <svg
                  onClick={closeClick}
                  className="md:hidden block cursor-pointer z-10"
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
                    fill="#1F2937"
                  />
                </svg>
              </div>
              <div className="bg-gray-800 text-white text-center flex flex-col justify-center items-center lg:px-[20px] md:px-[50px] lg:max-w-[405px] max-w-[343px] w-full sm:py-4 md:py-0 md:py-32">
              <p className="lg:text-3xl md:text-3xl text-3xl pb-4 font-semibold">
                  Secure Your Spot
                </p>
                <p>{props.showtitle}</p>
               
                <p className="text-sm pt-4">{props.showdatetime}</p>
              </div>
              <div className="lg:max-w-[373px] md:max-w-[696px] w-full bg-white lg:px-8 md:px-4 px-4 pt-5 md:pb-6 pb-4 relative">
                <svg
                  onClick={closeClick}
                  className="md:block hidden cursor-pointer right-4 top-4 absolute"
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
                    fill="#1F2937"
                  />
                </svg>
                
               
                {/* first step starts*/}
                
                <div  className={`${
            firststep ? "pt-2" : "hidden"} `}>
              <p className="text-2xl text-gray-800 font-semibold text-center pt-4 pb-8">
                  Event Passes for IDS5
        
                </p>
               {/* <p className="text-center text-gray-600 pt-4">
                  Please Provide Accurate Information
              </p> */}

{/* formik starts */}
<Formik
       initialValues={{
         name: '',
         phone: '',
         email: '',
         occupation: ''
       }}
       validationSchema={validationSchema}
       onSubmit= {async(values, { resetForm, setSubmitting }) => {
        values.showid = props.showid
        values.quantity = quantity
        values.price = props.showprice
        proceedClick()


        try {
          const response = await apiurl.post("/ids/register/pass", values);
          setMerchanttxnid(response.data.message)

         

          //alert(response.data.message)
          //toast.success(response.data.message || "Registration successful!");
          //navigate("/registration-successfull");
        } catch (error) {
          console.error("Failed to proceed:", error);
          toast.error(
            error.response?.data?.message ||
              "Failed to Proceed. Please try again later."
          );
        }



       //alert("submitted")
       //alert(JSON.stringify(values))
       resetForm();
         // same shape as initial values
         //console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="name" placeholder="Name" className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3" />
           {errors.name && touched.name ? (
             <div className="text-red-600 text-sm">{errors.name}</div>
           ) : null}

          <div className=" pt-2 w-full">
           <Field name="phone" type="number" placeholder="Mobile" className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3" />
           {errors.phone && touched.phone ? (
             <div className="text-red-600 text-sm">{errors.phone}</div>
           ) : null}
           </div>

           <div className=" pt-2 w-full">
           <Field name="email" placeholder="Email" className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3" type="email" />
           {errors.email && touched.email ? <div className="text-red-600 text-sm">{errors.email}</div> : null}
           </div>

           <div className="pt-2 w-full">
           <Field name="occupation" placeholder="Occupation" className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3" type="text" />
           {errors.occupation && touched.occupation ? <div className="text-red-600 text-sm">{errors.occupation}</div> : null}
           </div>

           <button type="submit" className="bg-gray-800 font-medium text-white lg:max-w-[406px] w-full py-3 hover:bg-gray-700 duration-200  mt-4">Submit</button>
         </Form>
       )}
     </Formik>
{/* formik ends */}


{/* <div className="text-center pt-8 w-full">
                  <input
                    type="text"
                    name
                    id
                    placeholder="Name"
                    className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3"
                  />
                </div> */}
                {/* <div className="text-center pt-2 w-full">
                  <input
                    type="number"
                    name
                    id
                    placeholder="Mobile No."
                    className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3"
                  />
                </div> */}
                {/* <div className="text-center pt-2 w-full">
                  <input
                    type="Email"
                    name
                    id
                    placeholder="Email"
                    className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3"
                  />
                </div> */}
                {/* <div className="text-center pt-2 w-full">
                  <input
                    type="text"
                    name
                    id
                    placeholder="Occupation"
                    className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3"
                  />
                </div> */}

                {/* <div className="text-center pt-4 w-full">
                  <button onClick={proceedClick} className="bg-gray-800 font-medium text-white lg:max-w-[406px] w-full py-3 hover:bg-gray-700 duration-200 md:mt-0 mt-4">
                    Proceed
                  </button>
                </div> */}

            </div>
            
            {/* first step ends */}

            {/* second step starts */}
            <div  className={`${
            firststep ? "hidden" : "pt-2"} `}>
            {/* <p className=" text-gray-600 pt-4">
                 How Many Passes You Need?
                </p> */}
                {/* <Slider /> */}

                <div class="hidden  lg:block md:block  md:px-6">
            <div class="flex justify-between">
               

               
                <p class="text-xl font-medium ml-0 leading-tight text-gray-600 ">Quantity</p>
              
                <p class="text-xl font-medium leading-tight text-gray-600 lg:text-xl">Total</p>
            </div>
        </div>
        <hr class="hidden mt-6 mb-6 border-gray-300 lg:block md:block h-0.5" />


        <div class="flex justify-between">

                {/* counter button starts */}
                <div
                                class="flex items-center justify-center w-20 h-10 p-3 space-x-3 border border-gray-300 ">
                                <button class="outline-none" onClick={() => decQuantity(quantity,props.showprice)}
                                    aria-label="decrease quantity"
                                    className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.625 1.5L3.375 6L8.625 10.5L8.625 1.5Z" fill="#1F2937" />
                                    </svg>

                                </button>
                                <p className="text-base text-gray-800 quantity1 ">{quantity}</p>
                                <button  onClick={() => incQuantity(quantity,props.showprice)}
                                    aria-label="increase quantity"
                                    className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.375 10.5L8.625 6L3.375 1.5L3.375 10.5Z" fill="#1F2937" />
                                    </svg>
                                </button>

                            </div>
                {/* counter button ends */}
                {/* amount starts */}
                <div

          className={`${
            displayshowprice ? "hidden" : "flex" }`}>
                <p class="text-xl font-medium leading-tight text-gray-600 lg:text-xl">₹ {props.showprice}</p>
                </div>

                <div

className={`${
  displayshowprice ? "flex" : "hidden" }`}>
      <p class="text-xl font-medium leading-tight text-gray-600 lg:text-xl">₹ {displayshowprice}</p>
      </div>
                {/* amount ends */}
                </div>

                <div className="text-center pt-4 w-full">
                  <button onClick={proceedClick} className="bg-gray-800 font-medium text-white lg:max-w-[406px] w-full py-3 hover:bg-gray-700 duration-200 md:mt-0 mt-4">
                    Proceed to Pay
                  </button>
                </div>

                <div class="py-4 flex items-center">
                    <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                        <input aria-labelledby="agree"  checked type="checkbox" class="focus:outline-none focus:ring-2 focus:ring-gray-700 checkbox focus:opacity-100 opacity-0 absolute cursor-pointer w-full h-full" />
                        <div class="check-icon hidden bg-blue-500 text-white rounded-sm">
                           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/form_layout-svg1.svg" alt="check-icon" />
                        </div>
                    </div>
                    <p id="agree" tabindex="0" class="focus:outline-none text-sm leading-none ml-2">I agree with contribution towards IDS5. </p>
                </div>

              </div>
            {/* second step ends */}
                
               
            <div  className={`${
            firststep ? "hidden" : "pt-0"} flex justify-center`}>
                <button onClick={()=> setStep(true)}>
                <p className="text-center text-gray-800 pt-6 font-medium text-lg hover:border-b border-gray-800 w-[95px] h-[50px] mx-auto decoration-gray-800 cursor-pointer">
                  Back
                </p>
                </button>
            </div>

               

               
              </div>
            </div>
          </div>
        </div>
      
    </>
   // document.getElementById("portal") 
  );
}
