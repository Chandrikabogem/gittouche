import logo from './logo.svg';
import './App.css';
import Aboutus from './components/Aboutus';
import {Routes, Route} from "react-router-dom"


import SecondTheme from './components/SecondTheme';
import FixedNav from './components/FixedNav';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import News from './components/News';
import Gallery from './components/Gallery';
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
     <FixedNav/>
       <Routes>
      <Route path="/" element={<SecondTheme/>}/>

       <Route path="aboutus" element={<Aboutus/>}/> 
       <Route path="menu" element={<Menu/>}/> 
       <Route path="reservation" element={<Reservation/>}/> 
       <Route path="news" element={<News/>}/> 
       <Route path="gallery" element={<Gallery/>}/> 
       </Routes>   
       <Footer/> 
    </div>
  );
}

export default App;
