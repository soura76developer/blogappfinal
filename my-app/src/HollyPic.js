import "./index.css"
import Holly1 from "./images/Holly1.jpg"
import Holly2 from "./images/Holly2.jpg"
import Holly3 from "./images/Holly3.jpg"
import Holly4 from "./images/Holly4.jpg"


const HollyPic =()=> 
{
    return(
    <>
    <div className="body_allign1">
    <img src={Holly1} className="bolly_design" />
    <br/>
    
    <img src={Holly2} className="bolly_design"  />
    <br/>
   
    <img src={Holly3} className="bolly_design"  />
    <br/>
  
    <img src={Holly4} className="bolly_design"  />
    <br/>
  
    <img src={Holly1} className="bolly_design"  />
    </div>
    </>
    )

}

export default HollyPic ;