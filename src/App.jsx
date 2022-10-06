import { useState } from "react";
import Destination from "./components/Destination";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Tours from "./components/Tours";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <br id="services" />
      <Services />
      <br id="destination" />
      <Destination />
      <br id="offers" />
      <Offer />
      <br id="tour" />

      <Tours />
      <br id="blog" />

      <Testimonial />
      <br />
      <DownloadApp />
      <br />
      <Footer />
      <br />
      <br />
    </div>
  );
}

export default App;
