import React from 'react'
import Logo from '../images/logo.png' 

const AboutUs = () => {
    return (
        <div className="row">

        {/* Animation not working */}
        <div className="column left">
            <center>
            <img className ="animate" src={Logo} alt="Logo" />
            </center>
        </div>

        <div className="column middle">
            <center>
                <h1 className = "header"> About Us </h1>
                    <p> 
                        We are an ambitious group of developers who met at the Rutgers Coding Bootcamp and
                    </p>
                    <p>
                        came together to create a learning platform that focuses on hosting tech talks  
                    </p>
                    <p>
                        from inspiring leaders and diversifying the tech community. 
                    </p>

                <h3 className = "header"> Our Mission </h3>
                    <p>
                        To help people realize that you don't need to have a computer science 
                    </p>
                    <p>
                        degree to work in tech, but you need to be creative, have passion, embrace learning, 
                    </p>
                    <p>
                        problem solve, and engage with people from diverse backgrounds to be successful ✴️
                    </p>

                <h3 className = "header"> Our Values </h3>
                    <p> <b className = "values">Passion</b> - people who have a passion for tech  </p>
                    <p> <b className = "values">Diversity</b> - people from all walks of life </p>
                    <p> <b className = "values">Ambition</b> - people who are driven to succeed </p>
                    <p> <b className = "values">Collaboration</b> - people who can collaborate with others well </p>
                    <p> <b className = "values">Innovation </b> - people who encourage and share creativity </p>

                <br />
                <a class= "a" href ="/">↩️</a>
            </center>
        </div>

        <div className="column right">
            <center>
                <img className ="animate" src={Logo} alt="Logo" />
            </center>
        </div>
        </div>
    )
}

export default AboutUs;