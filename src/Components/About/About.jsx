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
                        <p>
                            <strong>Hi,</strong> My name is <strong>Nilesh Prajapati</strong> I
                            am a <strong>Full Stack Developer</strong> recently graduated from <strong>Masai school</strong> and
                            looking for a career as a <strong>Full Stack Developer</strong>. 
                        </p>
                        <p>
                            I am from <strong>Pune, Maharashtra</strong> and I've completed my <strong>Higher Secondary Education, </strong> from <strong>Pune University.</strong>
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
