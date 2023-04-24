import React from 'react'
import styles from "../Portfolio/Portfolio.module.css"
import Typewriter from "typewriter-effect";
import profilepic from "../Images/Profile_5.png"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Portfolio = () => {
    return (
        <>
        <Container id="home" maxWidth="xl" className={styles.contain}>
            <div className={styles.badge}>
                <img style={{width: "100%", height: "100%", borderRadius: "50%"}} alt="Nilesh prajapati" src={profilepic}/>
            </div>
            <Box className={styles.name}>
                <h2>Nilesh prajapati</h2>
            </Box>
            <Box className={styles.typebox}>
                <h2>
                <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter, options)=> {

                            typewriter
                            
                            .typeString("Full Stack Web Developer")
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                        }}
                    />
                </h2>
            </Box>
            <Box className={styles.name}>
                <p>Full Stack Developer with a passion for development and excited to be at the deployment phase of my 
                    career as a web developer. Proficient in Frontend technology as well as in backend technology.
                </p>
            </Box>
        </Container>
        </>
    )
}
<div class="home-img">
</div>


export {Portfolio}
