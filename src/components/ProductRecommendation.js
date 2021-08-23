import React from 'react'

import { Box, Container, Typography, Grid, } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

import ProductRecommendationStyles from '../helpers/styleSheets/ProductRecommendationStyles'

const data = [
    {
        name: "Modena Juice & Vege Blender Silver",
        currentPrice: "$1,500.00",
        oldPrice: "$2,000.00"
    },
    {
        name: "Leica M3 with APO- Summicron 50mm 1:2",
        currentPrice: "$1,500.00",
        oldPrice: "$2,000.00"
    },
    {
        name: "Asus Zenbook Pro 13” UX-430 US 2018",
        currentPrice: "$1,500.00",
        oldPrice: "$2,000.00"
    },
]

const data2 = [
    {
        name: "Asus Zenbook Pro 13” UX-430 US 2018",
        currentPrice: "$1,500.00",
        oldPrice: "$2,000.00"
    },
    {
        name: "Modena Juice & Vege Blender Silver",
        currentPrice: "$1,500.00",
        oldPrice: "$2,000.00"
    },
    {
        name: "Leica M3 with APO- Summicron 50mm 1:2",
        currentPrice: "$1,500.00",
        oldPrice: "$2,000.00"
    },
    {
        name: "iPad Pro 2018 with 256GB - Black",
        currentPrice: "$1,500.00",
        oldPrice: "$2,000.00"
    },
]

const IndividualProduct = props => {
    const classes = ProductRecommendationStyles()
    const { productName, currentPrice, oldPrice } = props
    return (
        <Grid item style={{ position: "relative" }}>
            <Box className={classes.productContainer}>
                <Box className={classes.favouriteIconContainer}>
                    <FavoriteIcon style={{ fontSize: 13, color: "rgba(90, 113, 132, 1)" }} />
                </Box>
                <Box className={classes.productImage}></Box>
                <Typography className={classes.productName}>{productName}</Typography>
                <Box className={classes.priceBlock}>
                    <Typography className={classes.currentPrice}>{currentPrice}</Typography>
                    <Typography className={classes.oldPrice}><strike>{oldPrice}</strike></Typography>
                </Box>
                <Box className={classes.buyNowButton}>
                    <Typography className={classes.buyNowButtonText}>Buy Now</Typography>
                </Box>
            </Box>
        </Grid>
    )
}

const IndividualTimeBlock = props => {
    const classes = ProductRecommendationStyles()
    const { time } = props
    return (
        <Box className={classes.individualTimeBlock}>
            <Typography className={classes.individualTimeBlockText}>{time}</Typography>
        </Box>
    )
}

const ProductRecommendation = () => {
    const classes = ProductRecommendationStyles()
    return (
        <Container>
            <Typography className={classes.heading}>Product Recommendation</Typography>
            <Typography className={classes.subHeading}>You can choose what our recommendation product here</Typography>
            <Grid container justifyContent="space-evenly" spacing={3}>
                {
                    data.map((item, index) => <IndividualProduct productName={item.name} currentPrice={item.currentPrice} oldPrice={item.oldPrice} key={index} />)
                }
                <Grid item>
                    <Box className={classes.appleWatchCard}>
                        <Typography className={classes.appleWatchCardHeading}>Apple Watch 4 2020</Typography>
                        <Box className={classes.timeBlock}>
                            <IndividualTimeBlock time={10} />
                            <Typography className={classes.colonIcon}>:</Typography>
                            <IndividualTimeBlock time={25} />
                            <Typography className={classes.colonIcon}>:</Typography>
                            <IndividualTimeBlock time={54} />
                        </Box>
                        <Box className={classes.appleWatchImage}>

                        </Box>
                        <Box className={classes.appleWatchButton}>
                            <Typography className={classes.appleWatchButtonText}>Buy Now $1,500.00</Typography>
                        </Box>
                    </Box>
                </Grid>
                {
                    data2.map((item, index) => <IndividualProduct productName={item.name} currentPrice={item.currentPrice} oldPrice={item.oldPrice} key={index} />)
                }
            </Grid>
        </Container>
    )
}

export default ProductRecommendation
