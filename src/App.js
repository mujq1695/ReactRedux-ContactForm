import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/contact-form/Banner';
import Login from './components/Login';
import {Routes,Route} from "react-router-dom"
import Cardlist from './components/Cardlist';
import Details from './components/Details';



function App() {
  return (
    <>
      <Navbar />
     {/* <Banner />  */}
      {/* <Login/> */}
      <Routes>
<Route path="/Home" element={<Banner/>}></Route>
<Route path="/" element={<Login/>}></Route>
<Route path="/Details/:userId" element={<Details/>}></Route>
      </Routes>
    </>
  );
}

export default App;
