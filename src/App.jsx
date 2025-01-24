import "./App.css";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Navbarmain from "./Components/navbarmain/Navbarmain";
import Homepages from "./page/home/Homepages";
import Aboutpages from "./page/aboutpages/Aboutpages";
// import Bridepages from "./Components/pages/bridepages/bridepages";
import Groompages from "./page/groompages/Groompages";
import ProfileComponent from "./Components/bride/profilecomponent/Profilecomponent";
import Groombiodata from "./Components/groom/groombiodata/Groombiodata";
import Contactpages from "./page/contactpages/Contactpages";
import Footer from "./Components/footers/footer/Footer";
import Login from "./Components/logins/login/Login";
import Blogpages from "./page/blogpages/Blogpages";
import Blogmaincard from "./Components/blog/blogmaincard/Blogmaincard";
import Scrolltotop from "./Components/scrolltotop/Scrolltotop";
import Newspages from "./page/newspages/Newspages";
import Step from "./Components/logins/register/step/Step";
import Navbar from "./Components/navbar/Navbar";
import Newpage from "./Components/newscard/newlist/Newlist";
import Newcardpage from "./Components/newscard/nescardpage/Nescardpage";
import Eventspages from "./page/eventspages/Eventspages";
import Eventscard from "./Components/events/eventcard/Eventscard";
import Eventdetail from './Components/events/eventsdetail/Eventsdetail';
import GroomProfile from './Components/groom/groomprofile/Groomprofile';
import Vendorpages from "./page/vendorpages/Vendorpages";
import { FaBridge } from "react-icons/fa6";
import Bridepages from "./page/bridepages/Bridepages";
import VendorDetail from "./Components/venders/Vendordetail/Vendordetail";
import MemberPage from "./page/memberpages/Memberpages";
import MemberDetail from "./Components/member/memberdetail/Memberdetail";

function AppContent() {
  const location = useLocation();

  // Check if the current page is the homepage
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Navbar isHomePage={isHomePage} />
      <Scrolltotop />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<Aboutpages />} />
        <Route path="/bride" element={<Bridepages />} />
        <Route path="/groom" element={< Groompages/>} />
        <Route path="/profile/:index" element={<ProfileComponent />} />
        <Route path="/profilegroom/:index" element={<Groombiodata />} />
        <Route path="/contact" element={<Contactpages />} />
        <Route path="/groom/:index" element={<Groombiodata />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blogpages />} />
        <Route path="/blog/:id" element={<Blogmaincard />} />
        {/* <Route path="/news" element={<Newspages />} /> */}
        <Route path="/register" element={<Step />} />
        <Route path="/events" element={<Eventspages />} />
        <Route path="/event-detail/:id" element={<Eventdetail />} />
        <Route path="/events" element={<Eventscard />} />
        <Route path="/card-list" element={<Newspages />} />
        <Route path="/card-detail/:id" element={<Newcardpage />} />
        <Route path="/profilegroom/:id" element={<Groombiodata />} />
        <Route path="/groomprofile" element={<GroomProfile />} />
        <Route path="/vendor" element={<Vendorpages/>}/>
        {/* <Route path="/vendor-detail/:id" element={<VendorDetail/>}/> */}
        <Route path="/vendor-detail/:id" element={<VendorDetail/>} />
        <Route path="/member" element={<MemberPage/>}/>
        <Route path="/members/:id" element={<MemberDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
