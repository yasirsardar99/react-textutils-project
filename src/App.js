import React from "react"

import './index.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export function App(){
  return (
  <>
  <Router>
    <Navbar Name="text Utils project"/>
 <div className="container">
 <Routes>
          <Route path="/textform" element={<TextForm heading="LOWERCASE TO UPPERCASE"/>} />
          
        

          <Route path="/about" element={<About/>} />
          
         
          
         
 </Routes>

 </div>
 </Router>
  </>
  )
}


export default App;
