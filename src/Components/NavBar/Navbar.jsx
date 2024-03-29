import React, { Component } from 'react'
import "./Navbar.module.css"
import { Link } from 'react-scroll'
import Resume from "../Data/Nilesh Resume.pdf"

export class Navbar extends Component {

    state = {
        scroll: 0,
        sticky: false,
        distanceFromTop: 0
    };
    
    navbar = React.createRef();

    componentDidMount() {
        const distanceFromTop = this.navbar.current.getBoundingClientRect().top;
        this.setState({ scroll: window.scrollY, distanceFromTop });
        window.addEventListener("scroll", e => {
          this.handleScroll(e);
        });
    }
    
    handleScroll = e => {
        const { sticky } = this.state;
        if (window.scrollY > 600 && sticky === false) {
          this.setState({ sticky: true });
        } else if (window.scrollY < 600 && sticky) {
          this.setState({ sticky: false });
        }
    };

    render() {
        const { sticky } = this.state;
        const styles = sticky
          ? {
              position: "fixed",
              top: "0px"
            }
        : {};

        return (
            <div >
                <nav id="nav-menu" ref={this.navbar} style={{ ...styles }}>
                    <div id="home" class="nav-link home">
                        <Link to="home" spy={true} smooth={true}><lable>Home</lable></Link>
                    </div >
                    <div id="about" class="about section nav-link about"  > 
                        <Link to="about" spy={true} smooth={true}>About</Link>
                    </div>
                    <div id="skills" class="nav-link skills">
                        <Link to="skills" spy={true} smooth={true}>Skills & Tools </Link>
                    </div>
                    <div id="projects" class="nav-link projects">
                        <Link to="projects" spy={true} smooth={true}>Projects</Link>    
                    </div>
                    {/* <div>
                        <a style={{color:'white',textDecoration:"none"}} type="button" href={Resume} download rel="noreferrer">Resume</a>  
                    </div> */}
                    <div id="resume-button-1" class="nav-link resume">
                        <a style={{color:'white',textDecoration:"none"}} type="button" href={Resume} target="_blank" >Resume</a>  
                    </div>
                    <div id="contact" class="nav-link contact">
                        <Link to="contact" spy={true} smooth={true}>Contact</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
