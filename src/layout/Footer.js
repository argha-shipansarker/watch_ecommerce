import React from 'react'

import { Box, Container, Grid, Typography } from '@material-ui/core'

import FooterStyles from '../helpers/styleSheets/FooterStyles'

const Footer = () => {
    const classes = FooterStyles()
    return (
        <Container style={{ marginBottom: 70 }}>
            <Grid container>
                <Grid item md={4}>
                    <Typography className={classes.logo}>ehya</Typography>
                    <Typography className={classes.logoText}>Build a modern and creative website with crealand</Typography>
                    <Box style={{ display: "flex" }}>
                        <Box className={classes.icon}></Box>
                        <Box className={classes.icon}></Box>
                        <Box className={classes.icon}></Box>
                        <Box className={classes.icon}></Box>
                    </Box>
                </Grid>
                <Grid item md={2} sm={3} xs={4}>
                    <Typography className={classes.itemHeading}>Product</Typography>
                    <Typography className={classes.individualItem}>Landing Pages</Typography>
                    <Typography className={classes.individualItem}>Features</Typography>
                    <Typography className={classes.individualItem}>Documentation</Typography>
                    <Typography className={classes.individualItem}>Referral Program</Typography>
                    <Typography className={classes.individualItem}>Pricing</Typography>
                </Grid>
                <Grid item md={2} sm={3} xs={4}>
                    <Typography className={classes.itemHeading}>Services</Typography>
                    <Typography className={classes.individualItem}>Documentation</Typography>
                    <Typography className={classes.individualItem}>Design</Typography>
                    <Typography className={classes.individualItem}>Themes</Typography>
                    <Typography className={classes.individualItem}>Illustration</Typography>
                    <Typography className={classes.individualItem}>UI Kit</Typography>
                </Grid>
                <Grid item md={2} sm={3} xs={4}>
                    <Typography className={classes.itemHeading}>Company</Typography>
                    <Typography className={classes.individualItem}>About</Typography>
                    <Typography className={classes.individualItem}>Terms</Typography>
                    <Typography className={classes.individualItem}>Privacy Policy</Typography>
                    <Typography className={classes.individualItem}>Careers</Typography>
                </Grid>
                <Grid item md={2} sm={3} xs={4}>
                    <Typography className={classes.itemHeading}>More</Typography>
                    <Typography className={classes.individualItem}>Documentation</Typography>
                    <Typography className={classes.individualItem}>License</Typography>
                    <Typography className={classes.individualItem}>Changelog</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer
