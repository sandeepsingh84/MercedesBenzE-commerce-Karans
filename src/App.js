import logo from './logo.svg';
// import './App.css';
import Index from './Footer/Index'; 

import {Route,Routes,Link} from "react-router-dom"
import { Home } from './Home';
import {Sustainability } from "./Sustainability"
import {Design} from "./Design"



function App() {
  return (
    <div className="App">


       <Routes>


       <Route  path="/" element={<Home/>}    />
{/* <Route path='/Sustainability' element ={<Sustainability/> }/> */}

      

       {/* <Route  path="Innovation" element={<Design/>}    /> */}

       {/* <Route  path="Exclusive" element={</>}    /> */}








       </Routes>












    
    {/* <MercedesHeader/>
    <Navbar/>
 
    <Mercedes/> */}
    <Index/>
    {/* <Mercedesgirlcar/> */}
   
    
    </div>
  );
}

export default App;
