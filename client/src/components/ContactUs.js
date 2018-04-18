import React from 'react'
import one from '../images/one.jpg' 

const contactUs = () => {
    return(
    <div className="contactUs">
        <center><h1 className = "header"> Contact Us </h1>
        <p> // =========================================== //</p>

        <p>
        <b className = "new">Email us:</b><a href="mailto:redefiningtech@gmail.com?subject=helloworld&body=I would like to join redefiningtech!" target="_blank"> redefiningtech@gmail.com</a>
        </p>
        <p>
        <b className = "new">Wanna meet up?</b>
        <a href="https://www.meetup.com/ReDefiNingTech/" target="_blank"> Join us!</a>
        </p>
        <p>
        <b className = "new">Upcoming meetups: </b>
        <a href="https://www.meetup.com/ReDefiNingTech/events/past/" target="_blank"> Stay tuned! </a>
        </p>
    
        <p> // =========================================== //</p>

        <p>
        <img id ="one" src={one} alt="one" />  
        </p>   

        <br />
        <a class= "a" href ="/">↩️</a>
        </center>
    </div>
    )
}

export default contactUs;