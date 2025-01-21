import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbarmain from './Components/navbarmain/Navbarmain';
import Homepages from './Components/pages/home/Homepages';
import Aboutpages from './Components/pages/aboutpages/Aboutpages';
import Bridepages from './Components/pages/bridepages/bridepages';
import Groompages from './Components/pages/groompages/Groompages';
import ProfileComponent from './Components/bride/profilecomponent/Profilecomponent';
import Groombiodata from './Components/groom/groombiodata/Groombiodata';
import Contactpages from './Components/pages/contactpages/Contactpages';
import Footer from './Components/footers/footer/Footer';
import Login from './Components/logins/login/Login';
import Blogpages from './Components/pages/blogpages/Blogpages';
import Blogmaincard from './Components/blog/blogmaincard/Blogmaincard';
import Scrolltotop from './Components/scrolltotop/Scrolltotop';
import Newspages from './Components/pages/newspages/Newspages';
import Step from './Components/logins/register/step/Step';
import Navbar from './Components/navbar/Navbar';
// import CardPage from './pages/CardPage';
// import CardDetailPage from './pages/CardDetailPage';
// import Registrationform from './Components/logins/registers/registrationform/Registrationform';
import Newpage from './Components/newscard/newlist/Newlist';
import Newcardpage from './Components/newscard/nescardpage/Nescardpage';
import Eventspages from './Components/pages/eventspages/Eventspages';
import Eventscard from "./Components/events/eventcard/Eventscard";
import Eventdetail from './Components/events/eventsdetail/Eventsdetail';
// import Eventsmain from './Components/events/eventsmain/Eventsmain';
import GroomProfile from './Components/groom/groomprofile/Groomprofile';
// import Groombiodata from './Components/groom/groombiodata/Groombiodata';
// import EventDetail from "./Components/events/eventdetail/Eventsdetail";



function App() {
  return (
    <>
    <Navbar/>
      {/* <Navbarmain /> */}
      <Scrolltotop/>
      <Routes>
      
        <Route path='/' element={<Homepages />} />
        <Route path='/about' element={<Aboutpages />} />
        <Route path='/bride' element={<Bridepages />} />
        <Route path='/groom' element={<Groompages />} />
        <Route path="/profile/:index" element={<ProfileComponent />} />
        <Route path="/profilegroom/:index" element={<Groombiodata/>} />
        <Route path="/contact" element={<Contactpages />} />
        <Route path="/groom/:index" element={<Groombiodata />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blogpages />} />
        <Route path="/blog/:id" element={<Blogmaincard />} />
        <Route path="/news" element={<Newspages/>}/>
        <Route path='/register' element={<Step/>}/>
        <Route path='/events' element={<Eventspages/>}/>
        <Route path="/event-detail/:id" element={<Eventdetail/>} />
        <Route path="/events" element={<Eventscard />} />
        <Route path="/card-list" element={<Newpage />} />
        <Route path="/card-detail/:id" element={<Newcardpage />} />
        {/* <Route path='/events-detail/:id' element={<Eventsmain/>}/> */}
        <Route path="/profilegroom/:id" element={<Groombiodata />} />
          <Route path="/groomprofile" element={<GroomProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
