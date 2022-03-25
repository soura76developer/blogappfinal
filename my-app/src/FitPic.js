
import "./index.css"
import Fit7 from "./images/Fit7.jpg"
import Fit6 from "./images/Fit6.jpg"
import Fit2 from "./images/Fit2.jpg"
import Fit1 from "./images/Fit1.jpg"


const FitPic =()=> 
{
    return(
    <>
   <div className="body_allign1">
    <img src={Fit7} className="bolly_design" />
    <br/>
    
    <img src={Fit6} className="bolly_design"  />
    <br/>
   
    <img src={Fit2} className="bolly_design"  />
    <br/>
  
    <img src={Fit1} className="bolly_design"  />
    <br/>
  
    <img src={Fit7} className="bolly_design"  />
    </div>
    </>
    )

}

export default FitPic ;