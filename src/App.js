import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Components/Shared/Loader/Loader";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import About from "./Pages/About";
import HomePageOne from "./Pages/HomePageOne";
import HomePageTwo from "./Pages/HomePageTwo";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Loader />
        <Routes>
          <Route exact path="/" element={<HomePageOne />} />
          <Route path="/homeOne" element={<HomePageOne />} />
          <Route path="/homeTwo" element={<HomePageTwo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
