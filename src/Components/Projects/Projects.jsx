import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import styles from "../Projects/Projects.module.css";
import projectData from "../Data/ProjectData.json"

const Projects = () => {

    const newTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Container id="projects" maxWidth="xl" className={styles.main} >
            <Box class="project-title">
                <span>Projects</span>
            </Box>
            <Box className={styles.projectContainer}>
                {
                    projectData.map(el => (
                        <Box class="project-card">
                            <Box className={styles.projectCardPic}>
                                <img src={el.img} className={styles.img} alt="Project" />
                            </Box>
                            <Box className={styles.projectCardName}>
                                <span>{el.name}</span>
                            </Box>
                            <Box className={styles.projectCardDesc}>
                                <p>{el.desc}</p>
                            </Box>
                            <Box className={styles.projectCardStack}>
                                <img src={el.tech[0]} className={styles.logoImg} alt="stack" />
                            </Box>
                            <Box className={styles.projectCardBtn}>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<GitHubIcon />}
                                onClick={()=>newTab(el.github)}
                            >
                                Github
                            </Button>
                            {
                               el.link !== "" && <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    startIcon={<LinkIcon />}
                                                    onClick={()=>newTab(el.link)}
                                                >
                                                    Website
                                                </Button>
                            }
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Container>
    )
}

export {Projects}
    