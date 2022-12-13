import React from 'react'
import styles from "./Skills.module.css"
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import {imgData} from "../Data/Techlogo"

const Skills = () => {
    return (
        <Container className={styles.boxStyle} id="skills" maxWidth="xl">
            <h2 className={styles.skillsTitle}>Skills</h2>
            <Box className={styles.rightBox}>
                {
                    imgData.map(el => (
                        <Box className={styles.iconBox}>
                            <img className={styles.img} src={el} alt="HTML"/>
                        </Box>
                    ))
                }
            </Box>
        </Container>
    )
}

export {Skills}
