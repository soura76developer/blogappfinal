
import "./App.css"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from "./header.js";
import BigImage from "./bigImage";
// import LowerPhoto from "./lowerPhoto";
import Bollywood from "./Bollywood";
import P2 from "./p2.js"
import BollyPic from "./BollyPic";
import Technology from "./Technology";
import TechPic from "./TechPic";
import Food from "./Food";
import FoodPic from "./FoodPic";
import Holly from "./Holly";
import HollyPic from "./HollyPic";
import Fit from "./Fit";
import FitPic from "./FitPic";




// have to import test,2,3

function App()
{
  return(

    <BrowserRouter>
           
        <Header />
        
        <Routes>
        <Route path="/home" element={<BigImage />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/bollyPic" element={<BollyPic />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/techpic" element={<TechPic />} />
        <Route path="/food" element={<Food />} />
        <Route path="/foodpic" element={<FoodPic />} />
        <Route path="/holly" element={<Holly />} />
        <Route path="/hollypic" element={<HollyPic />} />
        <Route path="/fit" element={<Fit />} />
        <Route path="/fitpic" element={<FitPic />} />

        <Route path="p1/p2" element={<P2 />} />
        </Routes>


       
    </BrowserRouter>
    
    




  )
}

export default App;