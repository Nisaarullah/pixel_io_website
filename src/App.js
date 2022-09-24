import React from "react";
import {Routes,Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './Pages/About'
import Home from './Pages/Home'
import Empty from './Pages/Empty'

function App() {
  return (
   <>
 <Header/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="*" element= {<Empty/>}></Route>
</Routes>
<Footer/> 

   </>
   
  );
}

export default App;
