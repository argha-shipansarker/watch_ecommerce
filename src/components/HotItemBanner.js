import React from 'react'

import { Box, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

import Fire from "../images/fire.svg"

const useStyles = makeStyles({
    outerContainer: {
        backgroundColor: "rgb(235, 247, 242)",
        height: 350,
        marginTop: 80
    },
    heading: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: 36,
        color: "rgba(24, 59, 86, 1)"
    },
    hotItemButton: {
        height: 56,
        width: 185,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(54, 179, 126, 1)",
        color: "white",
        borderRadius: 4,
        cursor: "pointer"
    },
    hotItemButtonText: {
        fontWeight: 700,
        fontSize: 18
    }
})

const HotItemBanner = () => {
    const classes = useStyles()
    return (
        <Box className={classes.outerContainer}>
            <Container style={{ position: "relative" }}>
                <Box style={{ paddingTop: 60, display: "flex", justifyContent: "space-between" }}>
                    <Box style={{ display: "flex" }}>
                        <Box style={{ height: 52, width: 32, marginRight: 16 }}>
                            <img src={Fire} width="100%" height="100%" alt="svg of fire" />
                        </Box>
                        <Typography className={classes.heading}>Hot Item</Typography>
                    </Box>
                    <Box className={classes.hotItemButton}>
                        <Typography className={classes.hotItemButtonText}>See All Products</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default HotItemBanner
