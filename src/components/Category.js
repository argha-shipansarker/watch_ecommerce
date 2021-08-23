import React from 'react'

import { Box, Container, Grid, Typography } from '@material-ui/core'
import Fashion from "../images/fashion.svg"
import Handphone from "../images/handphone.svg"
import Laptop from "../images/laptop.svg"
import Music from "../images/music.svg"
import Photography from "../images/photography.svg"
import Furniture from "../images/furniture.svg"
import Health from "../images/health.svg"
import Sports from "../images/sports.svg"
import Games from "../images/games.svg"
import Investement from "../images/investement.svg"
import Ticket from "../images/ticket.svg"
import Categories from "../images/categories.svg"
import CategoryStyles from '../helpers/styleSheets/CategoryStyles'

const data = [
    {
        name: "Fashion",
        image: Fashion
    },
    {
        name: "Handphone",
        image: Handphone
    },
    {
        name: "Laptop",
        image: Laptop
    },
    {
        name: "Music",
        image: Music
    },
    {
        name: "Photography",
        image: Photography
    },
    {
        name: "Furniture",
        image: Furniture
    },
    {
        name: "Health",
        image: Health
    },
    {
        name: "Sports",
        image: Sports
    },
    {
        name: "Games",
        image: Games
    },
    {
        name: "Investement",
        image: Investement
    },
    {
        name: "Ticket",
        image: Ticket
    },
    {
        name: "More Categories",
        image: Categories
    },
]


const IndividualCategory = props => {
    const classes = CategoryStyles()
    const { name, image } = props
    return (
        <Grid item>
            <Box className={classes.individualCategoryContainer}>
                <Box style={{ width: 38, height: 38, padding: 15, border: "1px dashed grey", marginTop: 40, marginBottom: 37 }}>
                    <img src={image} width="100%" height="100%" />
                </Box>
                <Typography className={classes.individualCategoryText}>{name}</Typography>
            </Box>
        </Grid>
    )
}


const Category = () => {
    return (
        <Container style={{ marginTop: -30, marginBottom: 100 }}>
            <Grid container justifyContent="space-between" spacing={3}>
                {
                    data.map((item, index) => <IndividualCategory name={item.name} image={item.image} />)
                }

            </Grid>
        </Container>
    )
}

export default Category
