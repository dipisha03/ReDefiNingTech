import React from 'react';
import Spinner from '../images/spinner.png'

class Home extends React.Component {
    state = {
        currentRotation: 0
    }

    componentDidMount() {
        this.rotateStuff(this.state.currentRotation)
    }
    rotateStuff(rot) {
        let rotation = rot + 2;
        setTimeout(() => {
            requestAnimationFrame(
                () => {
                    document.querySelector('.spinner img').style.transform = 'rotate(' + rotation + 'deg)'
                    this.rotateStuff(rotation);
                }
            )

        }, 100)
    }

    render() {
        return (
                <div className="spinner">
                    <center><img className ="img" src={Spinner} alt="Spinner" />
                    <h1 className = "header"> Welcome to ReDefiNing Tech </h1>
                    
                    <p> // ================= //</p>

                    <p><a class= "a" href ="/AboutUs">About Us</a></p>

                    <p><a class= "a" href ="/Events">Events</a></p>
                    
                    <p><a class= "a" href ="/ContactUs">Contact Us</a></p>

                    <p> // ================= //</p>

                    </center>
                </div>
        )
    }
}

export default Home;