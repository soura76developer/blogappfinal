import "./index.css"
import Food1 from "./images/Food1.jpg"
import Food2 from "./images/Food2.jpg"
import Food3 from "./images/Food3.jpg"
import Food4 from "./images/Food4.jpg"


const FoodPic =()=> 
{
    return(
    <>
    <div className="body_allign1">

    <img src={Food1} className="bolly_design" />
    <br/>
    
    <img src={Food2} className="bolly_design"  />
    <br/>
   
    <img src={Food3} className="bolly_design"  />
    <br/>
  
    <img src={Food4} className="bolly_design"  />
    <br/>
  
    <img src={Food1} className="bolly_design"  />

    </div>
    </>
    )

}

export default FoodPic ;