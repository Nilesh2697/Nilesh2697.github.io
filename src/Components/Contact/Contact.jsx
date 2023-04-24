import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import styles from "../Contact/Contact.module.css";
import emailjs from 'emailjs-com';
import Resume from "../Data/Nilesh Resume.pdf"
import {USER_ID, TEMPLATE_ID, SERVICE_ID} from "./emailkey"

const Contact = () => {

    const [email, setEmail] = React.useState(false)
    const [load, setLoad] = React.useState(false)
    const [err, setErr] = React.useState(false)

    const newTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const handleLoad = () => {
        setLoad(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            setEmail(true);
          }, (error) => {
            setErr(true);
        });
        e.target.reset()
    }

    return (
        <Container id="contact" maxWidth="xl" className={styles.main}>
            <Box className={styles.title}>
                <span>Contact Me</span>
            </Box>
            <Box className={styles.infoContainer}>
                <Box className={styles.linksBox}>
                    <Button
                    id="contact-linkedin"
                        variant="contained"
                        color="secondary"
                        startIcon={< LinkedInIcon/>}
                        onClick={()=>newTab("https://www.linkedin.com/in/nilesh-prajapati-38404313b/")}
                    >
                        LinkedIn
                    </Button>
                    <Button
                    id="contact-github"
                        variant="contained"
                        color="secondary"
                        startIcon={< GitHubIcon/>}
                        onClick={()=>newTab("https://github.com/Nilesh2697")}
                    >
                        GitHub
                    </Button>   
                    <Button
                    id="contact-email"                     
                        variant="contained"
                        color="secondary"
                        // startIcon={< EmailIcon/>}
                    >
                        <a href="mailto:prajapatinil26@gmail.com" className={styles.dTag} download>
                            Prajapatinil26@gmail.com
                        </a>
                    </Button>
                    <Button 
                    id="contact-phone"                      
                        variant="contained"
                        color="secondary"
                        // startIcon={< EmailIcon/>}
                    >
                        <a href="8275764902" className={styles.dTag} download>
                            8275764902
                        </a>
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={< FileCopyIcon/>}
                    >
                        <a href={Resume} className={styles.dTag} download>
                            My Resume  
                        </a>      
                    </Button>             
                </Box>
                <Box className={styles.inputBox}>
                    <form onSubmit={handleSubmit}>
                        <Box className={styles.nameBox}>
                            <TextField name="senderName" required={true} id="outlined-basic" label="Name" variant="outlined" fullWidth={true}/>
                        </Box>
                        <Box className={styles.emailBox}>
                            <TextField name="email" required={true} className={styles.inputColor} id="outlined-basic" label="Email" variant="outlined" fullWidth={true}/>
                        </Box>
                        <Box className={styles.descBox}>
                            <TextareaAutosize name="desc" required={true} className={styles.descrip} label="desc" aria-label="minimum height" minRows={6} placeholder="Description" fullWidth={true}/>
                        </Box>
                        <Box className={styles.submitBox}>
                            {/* <input type="submit" value="Send"/> */}
                            <button onClick={handleLoad} className={styles.submitButton}>{!email && load ? "Sending..." : "Send"}</button>
                        </Box>
                    </form>
                    {email && <p className={styles.submitBox}>Email sent successfully !!!</p>}
                    {err && <p className={styles.submitBox}>Something went wrong, Please try again.</p>}
                </Box>
            </Box>
        </Container>
    )
}

export {Contact}