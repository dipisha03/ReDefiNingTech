import React from 'react';
import Slider from "react-slick";
import ImageOne from '../images/kickoff.jpg' 
import ImageTwo from '../images/nadidips.jpg'
import ImageThree from '../images/taming.jpg'  
import ImageFour from '../images/bloomberg.JPG' 
import ImageFive from '../images/group.JPG' 

class Events extends React.Component {
    render () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          return (
            <div className="events">
            <center>
            <h1 className = "header"> Events </h1>
        
            <Slider {...settings}>
              <div>
                <img id ="ImageOne" src={ImageOne} alt="kickoff" />
                <h3 className = "tag"> #KickoffMeeting ✅ </h3>
              </div>
              <div>
                <img id ="ImageTwo" src={ImageTwo} alt="nadidips" />
                <h3 className = "tag"> #WomenWhoCode 🔥🔥 </h3>
              </div>
              <div>
                <img id ="ImageThree" src={ImageThree} alt="taming" />
                <h3 className = "tag"> #TamingCSS 🐍 </h3>
              </div>
              <div>
                <img id ="ImageFour" src={ImageFour} alt="bloomberg" />
                <h3 className = "tag"> #BloombergTalks 0️⃣1️⃣0️⃣ </h3>
              </div>
              <div>
                <img id ="ImageFive" src={ImageFive} alt="group" />
                <h3 className = "tag"> #FullStackDevelopers 💥</h3>
              </div>
            </Slider> 

            <br />     
            <a class= "a" href ="/">↩️</a>
            </center>
            </div>
            
          );
        }
      }


export default Events;