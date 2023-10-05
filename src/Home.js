import './Homestyles.css';
import {
    Link
  } from "react-router-dom";
  import triangle from './images/triangletransparent.png'

function Home() {

    return (
        <div className= "Homepage">
                
            <div className="containerhome">
             
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>

            
                
               
                </div>
                  
                <button className="buttonhome"><Link to="/Contact">CONTACT</Link></button>
                
        </div>
    );

}
export default Home;