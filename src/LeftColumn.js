import './LeftColumnstyles.css';
import {
  Link
} from "react-router-dom";
import 'animate.css';



function LeftColumn() {
    return (
      <div className="left-column">
        <div className="header animate__animated animate__fadeInLeft" >
          <h1>Crew Chief</h1>
          <p>Superbike Tuning Software</p>
          <button className="buttonleft"><Link to="/Home">EXPLORE</Link></button>
          </div>
      </div>
    );
  }

  export default LeftColumn;