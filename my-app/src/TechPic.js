import "./index.css"
import Tech1 from "./images/Tech1.jpg"
import Tech2 from "./images/Tech2.jpg"
import Tech6 from "./images/Tech6.jpg"
import Tech5 from "./images/Tech5.jpg"
import Tech4 from "./images/Tech4.jpg"

const TechPic =()=> 
{
    return(
    <>
    <div className="body_allign1">
    <img src={Tech1} className="bolly_design" />
    <br/>
    
    <img src={Tech2} className="bolly_design"  />
    <br/>
   
    <img src={Tech6} className="bolly_design"  />
    <br/>
  
    <img src={Tech5} className="bolly_design"  />
    <br/>
  
    <img src={Tech4} className="bolly_design"  />

    </div>
    </>
    )

}

export default TechPic ;