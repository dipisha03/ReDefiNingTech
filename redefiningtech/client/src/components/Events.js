import React from 'react';
import Slider from "react-slick";

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
            <center><h1 className = "header"> Events </h1></center>
            </center>
           
            <Slider {...settings}>
              <div>
                <center><h3>1</h3></center>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
            </div>
          );
        }
      }


export default Events;