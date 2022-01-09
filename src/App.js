import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Components/Shared/Loader/Loader";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import About from "./Pages/About";
import HomePageOne from "./Pages/HomePageOne";
import HomePageTwo from "./Pages/HomePageTwo";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services/Services";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import News from "./Pages/News/News";
import NewsDetails from "./Pages/News/NewsDetails";
import Faq from "./Pages/Faq";
import Careers from "./Pages/Careers";
import Team from "./Pages/Team";
import TeamDetails from "./Pages/TeamDetails";
import WhyChooseUs from "./Pages/WhyChooseUs";
import Portfolio from "./Pages/Portfolio";
import PortfolioDetails from "./Pages/PortfolioDetails";

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
          <Route path="/serviceDetails" element={<ServiceDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsDetails" element={<NewsDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/teamDetails" element={<TeamDetails />} />
          <Route path="/chooseUs" element={<WhyChooseUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolioDetails" element={<PortfolioDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
