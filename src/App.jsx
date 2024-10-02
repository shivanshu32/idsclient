import { Route, Routes } from "react-router-dom";
import { Home, Error, About } from "./Pages/index";
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";
import Models from "./Pages/Talent/Models";
import ShowDirectors from "./Pages/Talent/ShowDirectors";
import Designers from "./Pages/Talent/Designers";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Partner from "./Pages/Partner";
import Seasson1 from "./Pages/ids/Seasson1";
import Sesson2 from "./Pages/ids/Sesson2";
import Sesson3 from "./Pages/ids/Sesson3";
import Sesson4 from "./Pages/ids/Sesson4";
import GenSesson1 from "./Pages/IDSgenx/GenSesson1";
import { useEffect } from "react";
// import {ReactComponent as ArrowSVG } from "../Arrow.svg"
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Thankyou from "./components/Thankyou";
import Seasson5 from "./Pages/ids/Seasson5";
import RefundPolicy from "./components/RefundPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import PaymentStatus from "./Pages/PaymentStatus";
import EPass from "./Pages/EPass";
function App() {

  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />

      <div className="bg-primary primefont   overflow-hidden smooth">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ids/season1" element={<Seasson1 />} />
          <Route path="/ids/season2" element={<Sesson2 />} />
          <Route path="/ids/season3" element={<Sesson3 />} />
          <Route path="/ids/season4" element={<Sesson4 />} />
          <Route path="/ids/season5" element={<Seasson5 />} />

          <Route path="/idsgenX/season1" element={<GenSesson1 />} />
          <Route path="/models" element={<Models />} />
          <Route path="/show-directors" element={<ShowDirectors />} />
          <Route path="/designer" element={<Designers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partners" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />

          <Route path="/registration-successfull" element={<Thankyou />} />
          <Route path="/paymentstatus/:status/:merchanttxnid" element={<PaymentStatus />} />
          <Route path="/epass/:txnid" element={<EPass />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <ScrollToTop
          smooth
          color="#ffff"
          // component={<ArrowSVG/>}
          style={{
            backgroundColor: "#BF8C4D",
            borderRadius: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    </>
  );
}

export default App;
