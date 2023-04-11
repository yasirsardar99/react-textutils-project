import React from "react"

import './index.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


export function App(){
  return (
  <>
    <Navbar Name="YASIR SARDAR"/>
 <div className="container">
 <TextForm heading="LOWERCASE TO UPPERCASE"/>
 </div>
  </>
  )
}


export default App;
