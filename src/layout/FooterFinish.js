import React from 'react'

import { Box, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
    iconContainer: {
        height: 56,
        width: 56,
        borderRadius: 28,
        backgroundColor: "rgba(21, 118, 216, 1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
    },
    text: {
        fontWeight: 600,
        fontSize: 16,
        color: "rgba(90, 113, 132, 1)",
        marginBottom: 80
    }
}))

const FooterFinish = () => {
    const classes = useStyles()
    return (
        <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box className={classes.iconContainer}>
                <FavoriteIcon style={{ color: "white" }} />
            </Box>
            <Typography className={classes.text}>Copyright © 2019. Crafted with love.</Typography>
        </Container>
    )
}

export default FooterFinish
