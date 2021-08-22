import React from 'react'

import { Box, Grid, Typography, Container, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { HeaderStyles } from '../helpers/styleSheets/HeaderStyles'

const Header = () => {
    const classes = HeaderStyles()
    return (
        <Box className={classes.outerContainer}>
            <Container className={classes.innerContainer}>
                <Typography className={classes.logoText}>ehya</Typography>
                <Box className={classes.navItems}>
                    <Typography className={classes.navItem}>Home</Typography>
                    <Box className={classes.dropDown}>
                        <Typography className={classes.fontWeight}>Landings</Typography>
                        <ExpandMoreIcon />
                    </Box>
                    <Box className={classes.dropDown}>
                        <Typography className={classes.fontWeight}>Pages</Typography>
                        <ExpandMoreIcon />
                    </Box>
                    <Typography className={classes.navItem}>Docs</Typography>
                    <Typography className={classes.navItem}>Help</Typography>
                    <Box className={classes.orderButton}>
                        <Typography className={classes.fontWeight}>Get it now</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header
