import "./index.css"
import Bolly2 from "./images/Bolly2.jpeg"
import Bolly3 from "./images/Bolly3.jpg"
import Bolly4 from "./images/Bolly4.jpg"
import Bolly5 from "./images/Bolly5.jpg"
import Bolly6 from "./images/Bolly6.jpg"

const BollyPic =()=> 
{
    return(
    <>
    <div className="body_allign1">
    <img src={Bolly2} className="bolly_design" />
    <br/>
    
    <img src={Bolly3} className="bolly_design"  />
    <br/>
   
    <img src={Bolly4} className="bolly_design"  />
    <br/>
  
    <img src={Bolly5} className="bolly_design"  />
    <br/>
  
    <img src={Bolly6} className="bolly_design"  />
    </div>
    </>
    )

}

export default BollyPic ;