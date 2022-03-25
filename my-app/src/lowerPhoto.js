import "./App.css";
import Pic5 from "./images/Pic5.jpg"
import Pic4 from "./images/Pic4.jpg"
import Pic6 from "./images/Pic6.jpg"
import Pic1 from "./images/Pic1.jpg"
import JoshuaText from "./JoshuaText";


const LowerPhoto=()=>
{
    return(
    <>
     <div className="the_latest"> <p className="the_latest_D">The Latest</p> </div>
    <div className="small_col"></div>

            <div className="same1">
                <img src={Pic5} alt="" className="same_D" /> 
                
            </div>
            <div className="same2">
                <img src={Pic4} alt="" className="same_D" />  
                         
            </div>
            <div className="same3">
                <img src={Pic6} alt="" className="same_D" />           
            </div>
        
            <JoshuaText />

            <div class="latest_articles"> <p class="latest_articles_D">Latet Articles</p> </div>
            <div class="small_col1"></div>

            <div class="br1">  </div>

            <div class="add_box"> <p class="add_D">Advertistement</p> </div>
            
            <div class="chota_pic">
                <img src= {Pic1} alt="" class="chota_pic_D"/>           
            </div>

            <div class="br2">  </div>

            <div class="chota1_pic">
                <img src= {Pic1} alt="" class="chota1_pic_D"/>           
            </div>

            <div class="br3">  </div>

            <div class="chota2_pic">
                <img src= {Pic1} alt="" class="chota2_pic_D"/>           
            </div>
            
            <div class="br4">  </div>

            <div class="chota3_pic">
                <img src= {Pic1} alt="" class="chota3_pic_D"/>           
            </div>


</>
)
}

export default LowerPhoto;