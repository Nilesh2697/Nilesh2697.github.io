import React from 'react'
import styles from "./About.module.css"
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';

const About = () => {
    return (
        <Container id="about" maxWidth="xl" className={styles.home}>
            <Box className={styles.mainBox}>
                <Box className={styles.leftBox}>
                    <Box className={styles.infoBox}>
                        <h2>About Me</h2>
                        <p id="user-detail-name">
                            Hi, My name is Nilesh Prajapati  I
                            am a Full Stack Developer  recently graduated from Masai school  and
                            looking for a career as a Full Stack Developer . 
                        </p>
                        <p>
                            I am from Pune, Maharashtra  and I've completed my Higher Secondary Education,   from Pune University. 
                        </p>
                        <p>
                            I am interested in creating well designed or pixel-perfect Frontend with functionality and take on new 
                            challenges where I can learn more about web technologies.
                        </p>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export {About}
