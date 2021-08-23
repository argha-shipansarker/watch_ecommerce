import React from 'react'

import { Box, Container, Typography, Grid } from '@material-ui/core'

import FooterBannerStyles from '../helpers/styleSheets/FooterBannerStyles'

const FooterBanner = () => {
    const classes = FooterBannerStyles()
    return (
        <Box className={classes.outerContainer}>
            <Container style={{ marginBottom: 128 }}>
                <Grid container alignItems="center" justify="center">
                    <Grid item md={5} xs={12}>
                        <Box className={classes.bannerImage}>

                        </Box>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Box style={{ marginLeft: 30 }}>
                            <Typography className={classes.bannerText}>Download Ehya now and Get Promo Everyday</Typography>
                            <Box style={{ display: "flex" }}>
                                <Box className={classes.bannerShape}>

                                </Box>
                                <Box className={classes.bannerShape} style={{ marginLeft: 20 }}>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default FooterBanner
