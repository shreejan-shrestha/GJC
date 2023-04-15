import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import HousingListing from "./components/pages/HousingListing";
import LandListing from "./components/pages/LandListing";
import ApartmentListing from "./components/pages/ApartmentListing";
import NotFound from "./components/pages/NotFound";
import ContactUs from "./components/pages/ContactUs";
import Navbar from "./components/subcomponents/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/housing" element={<HousingListing />} />
          <Route path="/land" element={<LandListing />} />
          <Route path="/apartments" element={<ApartmentListing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
