import React, { Component } from 'react'
import "./Navbar.module.css"
import { Link } from 'react-scroll'

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
            <div>
                <nav ref={this.navbar} style={{ ...styles }}>
                    <div>
                        <Link to="home" spy={true} smooth={true}><lable>Home</lable></Link>
                    </div>
                    <div>
                        <Link to="about" spy={true} smooth={true}>About</Link>
                    </div>
                    <div>
                        <Link to="skills" spy={true} smooth={true}>Skills</Link>
                    </div>
                    <div>
                        <Link to="projects" spy={true} smooth={true}>Projects</Link>    
                    </div>
                    <div>
                        <Link to="blogs" spy={true} smooth={true}>Blogs</Link> 
                    </div>
                    <div>
                        <Link to="contact" spy={true} smooth={true}>Contact</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
