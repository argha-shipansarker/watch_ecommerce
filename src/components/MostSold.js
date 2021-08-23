import React from 'react'

import { Box, Grid, Typography, Container } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';

import MostSoldStyles from '../helpers/styleSheets/MostSoldStyles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const data = [
    {
        name: "Asus Zenbook Pro 13”",
        rating: 4.8,
        sold: "2.1k"
    },
    {
        name: "Asus Zenbook Pro 13”",
        rating: 4.8,
        sold: "2.1k"
    },
    {
        name: "Asus Zenbook Pro 13”",
        rating: 4.8,
        sold: "2.1k"
    },
    {
        name: "Asus Zenbook Pro 13”",
        rating: 4.8,
        sold: "2.1k"
    },
]

const data2 = [
    {
        name: "Leica M3 1972",
        rating: 4.8,
        sold: "2.1k"
    },
    {
        name: "Leica M3 1972",
        rating: 4.8,
        sold: "2.1k"
    },
    {
        name: "Leica M3 1972",
        rating: 4.8,
        sold: "2.1k"
    },
    {
        name: "Leica M3 1972",
        rating: 4.8,
        sold: "2.1k"
    },
]

const data3 = [
    {
        name: "Beats by Dre C",
        rating: 4.8,
        sold: "2.1k"
    },
    {
        name: "Beats by Dre C",
        rating: 4.8,
        sold: "2.1k"
    },
    {
        name: "Beats by Dre C",
        rating: 4.8,
        sold: "2.1k"
    },
    {
        name: "Beats by Dre C",
        rating: 4.8,
        sold: "2.1k"
    },
]

const blockData = [
    {
        name: "Most Sold Laptop",
        array: data
    },
    {
        name: "Most Sold Camera",
        array: data2
    },
    {
        name: "Most Sold Headphone",
        array: data3
    },
]

const IndividualProduct = props => {
    const classes = MostSoldStyles()
    const { name, rating, sold } = props
    return (
        <Box className={classes.individualProductContainer}>
            <Box className={classes.productImage}></Box>
            <Box className={classes.productInfo}>
                <Typography className={classes.productName}>{name}</Typography>
                <Box className={classes.ratingSoldInfo}>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <StarIcon style={{ color: "rgba(255, 194, 0, 1)", fontSize: 14 }} />
                        <Typography className={classes.ratingText}>{rating}</Typography>
                    </Box>
                    <Box className={classes.seperator}>

                    </Box>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <ShoppingCartIcon style={{ color: "rgb(90, 113, 132)", fontSize: 14 }} />
                        <Typography className={classes.soldText}>{sold} Unit sold</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

const MostSold = () => {
    const classes = MostSoldStyles()
    return (
        <Container style={{ marginBottom: 117 }}>
            <Grid container spacing={4}>
                {
                    blockData.map((item, index) => (
                        <Grid item md={4} sm={6} xs={12} key={index}>
                            <Typography className={classes.heading}>{item.name}</Typography>
                            {
                                item.array.map((item, index) => <IndividualProduct name={item.name} rating={item.rating} sold={item.sold} key={index} />)
                            }
                            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                                <Typography className={classes.leaderBoardText}>Leaderboard details</Typography>
                                <ArrowForwardIosIcon style={{ color: "rgba(54, 179, 126, 1)", fontSize: 16, marginRight: 20 }} />
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default MostSold
