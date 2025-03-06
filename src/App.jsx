import "./App.css";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Homepages from "./page/home/Homepages";
import Aboutpages from "./page/aboutpages/Aboutpages";
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
import Newcardpage from "./Components/newscard/nescardpage/Nescardpage";
import Eventspages from "./page/eventspages/Eventspages";
import EventCard from "./Components/events/eventCard/EventCard";
import Eventdetail from "./Components/events/eventsdetail/Eventsdetail";
import GroomProfile from "./Components/groom/groomprofile/Groomprofile";
import Vendorpages from "./page/vendorpages/Vendorpages";
import VendorDetail from "./Components/venders/Vendordetails/Vendordetail";

import MemberPage from "./page/memberpages/Memberpages";
import MemberDetail from "./Components/member/memberdetail/Memberdetail";
import Bridepages from "./page/bridepages/Bridepages";
import Groommain from "./Components/groom/groommain/Groommain";
import Logout from "./Components/logins/logout/Logout";

function AppContent() {
  const location = useLocation();

  // Check if the current page is the homepage or login page
  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login"; // Check if it's the login page
  const isRegisterPage = location.pathname === "/register";
  const isProfilePage = location.pathname.startsWith("/profile"); // Check if it's any profile page
  return (
    <>
      <Navbar isHomePage={isHomePage} />
      <Scrolltotop />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<Aboutpages />} />
        <Route path="/bride" element={<Bridepages />} />
        <Route path="/groom" element={<Bridepages />} />
        <Route path="/profile/:id" element={<ProfileComponent />} />
        <Route path="/profilegroom/:id" element={<Groombiodata />} />
        <Route path="/contact" element={<Contactpages />} />
        <Route path="/groom/:index" element={<Groombiodata />} />
        <Route path="/groommain" element={<Groommain/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blogpages />} />
        <Route path="/blog/:id" element={<Blogmaincard />} />
        <Route path="/register" element={<Step />} />
        <Route path="/events" element={<Eventspages />} />
        <Route path="/events/:id" element={<Eventdetail />} />
        <Route path="/events" element={<EventCard />} />
        <Route path="/card-list" element={<Newspages />} />
        <Route path="/card-detail/:id" element={<Newcardpage />} />
        <Route path="/groomprofile" element={<GroomProfile />} />
        <Route path="/vendors" element={<Vendorpages />} />
        <Route path="/vendordetail/:id" element={<VendorDetail />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/members/:id" element={<MemberDetail />} />
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
      {/* Only render Footer if it's not the login page */}
      {!isLoginPage && !isRegisterPage && !isProfilePage && <Footer />}

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
