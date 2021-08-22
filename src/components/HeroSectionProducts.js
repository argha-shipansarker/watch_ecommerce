import React from 'react'

import { Box, Container, Grid, Typography } from '@material-ui/core'

import HeroProductsStyle from '../helpers/styleSheets/HeroProductsStyles'

const data = [
    {
        name: "Beats by Dre C 3450. Active Noise Cancelling",
        price: "$1,750.00"
    },
    {
        name: "Samsung Galaxy Watch 3. Black Metalic Newest",
        price: "$1,750.00"
    },
    {
        name: "Beats by Dre C 3450. Active Noise Cancelling",
        price: "$1,750.00"
    },
]

const IndividualProduct = props => {
    const classes = HeroProductsStyle()
    const { productName, productPrice } = props
    return (
        <Grid item style={{ display: "flex", justifyContent: "center", }}>
            <Box className={classes.individualProductContainer}>
                <Box className={classes.productImage} />
                <Box style={{ width: 179 }}>
                    <Typography className={classes.productName}>{productName}</Typography>
                    <Typography className={classes.productPrice}>{productPrice}</Typography>
                </Box>
            </Box>
        </Grid>
    )
}

const HeroSectionProducts = () => {
    const classes = HeroProductsStyle()
    return (
        <Box className={classes.outerContainer}>
            <Container>
                <Grid container justifyContent="space-between">
                    {
                        data.map((item, index) => <IndividualProduct productName={item.name} productPrice={item.price} key={index} />)
                    }
                </Grid>

            </Container>
        </Box>
    )
}

export default HeroSectionProducts
