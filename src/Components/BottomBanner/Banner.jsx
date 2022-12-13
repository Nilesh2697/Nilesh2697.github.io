import React from 'react'
import Box from '@material-ui/core/Box';
import styles from "./Banner.module.css"

const Banner = () => {
    return (
        <Box maxWidth="xl" className={styles.bottomBanner}>
            <span>Created by Nilesh Prajapati</span>
        </Box>
    )
}

export {Banner}
