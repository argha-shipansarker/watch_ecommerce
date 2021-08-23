import React from 'react'

import { Box, Typography, Grid, Container, TextField, IconButton, Button } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { HeroStyles } from '../helpers/styleSheets/HeroStyles'

const HeroSection = () => {
    const classes = HeroStyles()
    return (
        <Box className={classes.outerContainer}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={6} xs={12}>
                        <Box className={classes.shape} />
                        <Typography className={classes.heading}>Get Special Watch with Special Prices</Typography>
                        <Box className={classes.bulletPointsLine}>
                            <Box className={classes.bulletPoints}>
                                <FiberManualRecordIcon className={classes.bulletIcon} />
                                <Typography className={classes.bulletPointText}>Newest OS Support</Typography>
                            </Box>
                            <Box className={classes.bulletPoints}>
                                <FiberManualRecordIcon className={classes.bulletIcon} />
                                <Typography className={classes.bulletPointText}>Water and Dust Resistant</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.bulletPointsSecondLine}>
                            <Box className={classes.bulletPoints}>
                                <FiberManualRecordIcon className={classes.bulletIcon} />
                                <Typography className={classes.bulletPointText}>Long lasting battery life</Typography>
                            </Box>
                            <Box className={classes.bulletPoints}>
                                <FiberManualRecordIcon className={classes.bulletIcon} />
                                <Typography className={classes.bulletPointText}>Get a 20% Cashback right now</Typography>
                            </Box>
                        </Box>
                        <TextField
                            label="Insert your email"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                className: classes.textField,
                                endAdornment: <IconButton disableFocusRipple
                                    disableRipple style={{ backgroundColor: "transparent" }}>
                                    <Box className={classes.preOrderButton}>
                                        <Typography className={classes.preOrderButtonText}>Join Pre-Order</Typography>
                                    </Box>
                                </IconButton>
                            }}
                            InputLabelProps={{ style: { color: "rgb(179, 186, 197)", paddingTop: 7 } }}
                            inputProps={{ className: classes.inputTextStyle }}
                        />

                    </Grid>
                    <Grid item md={6} xs={12} className={classes.heroImageContainer}>
                        <Box className={classes.heroImage}>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default HeroSection
