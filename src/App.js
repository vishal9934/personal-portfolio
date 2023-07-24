import './App.css';

 import NavBar from './components/Navbar';
 import {Routes,Route} from "react-router-dom"
 import Home from "./Pages/Home/Home"
 import Loader from './components/Loader';
 import { useState,useEffect } from 'react';
 import Skillset from './Pages/Skillset/Skillset';
 import Project from "./Pages/Project/Project"
 import Contact from './Pages/contact/Contact';
 import Experience from "./Pages/experience/Experience"

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => upadateLoad(false), 1500);
  }, []);

   

  return (
    
    <div className="App">
      
      {
        
        load? (
          <Loader/>
        ):(
          <>
      <NavBar/>
      
      <Routes>
      
          <Route path="/"  element={<Home/>}/>
          <Route path="/skillset"  element={<Skillset/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/contact" element={<Contact/>}/>
         
        </Routes>
        
        </>
        
        )
        
        
        }
       
    
    </div>
    
  )
}

export default App;
