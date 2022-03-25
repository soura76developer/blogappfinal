import "./App.css" ;
const Header=()=>
{
    // function Enter()
    // {
    //     document.getElementById('enter1').style.color="red"
    // }

    return(
    <>
            <div className="body_allign">
            <div  className="the"> <p className="the_D">The</p> </div>
            <div className="siren"> <p  className="siren_D">Siren</p> </div>
            <div className="br">  </div>
            
            <div className="home"><a href="/home"><button className="all_D">Home</button></a></div>
            <div className="bollywood"><a href="/bollywood"><button className="all_D">Bollywood</button></a></div>
            <div className="technology"><a href="/technology"><button className="all_D">Technology</button></a></div>
            <div className="hollywood"><a href="/holly"><button className="all_D">Hollywood</button></a></div>
            <div className="fitness"><a href="/fit"><button className="all_D">Fitness</button></a></div>
            <div className="food"><a href="/food"><button className="all_D">Food</button></a></div>

            
            </div>
    </>
    )

}

export default Header;