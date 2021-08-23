import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Container, Box, Typography } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HotItemProductsStyle from '../helpers/styleSheets/HotItemProductsStyle';

const data = [
    {
        name: "Asus Zenbook Pro 13”",
        specfication: "The specification here",
        price: "$1,500.00"
    },
    {
        name: "Modena Juice Blender",
        specfication: "The specification here",
        price: "$1,500.00"
    },
    {
        name: "Leica M3 1972",
        specfication: "The specification here",
        price: "$1,500.00"
    },
    {
        name: "iPad Pro 2018",
        specfication: "The specification here",
        price: "$1,500.00"
    },
    {
        name: "Asus Zenbook Pro 13”",
        specfication: "The specification here",
        price: "$1,500.00"
    },
    {
        name: "Modena Juice Blender",
        specfication: "The specification here",
        price: "$1,500.00"
    },
]

const IndividualProduct = props => {
    const classes = HotItemProductsStyle()
    const { name, specfication, price } = props
    return (
        <Box className={classes.productContainer}>
            <Box className={classes.productImage}></Box>
            <Typography className={classes.productName}>{name}</Typography>
            <Typography className={classes.productSpecfic}>{specfication}</Typography>
            <Typography className={classes.productPrice}>{price}</Typography>
        </Box>
    )
}

const HotItemProducts = () => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "white", height: 72, width: 72, borderRadius: 36, display: "flex", justifyContent: "center", alignItems: "center", color: "black", boxShadow: "3px 2px 9px -2px rgba(0,0,0,0.75)" }}
                onClick={onClick}
            ><ArrowForwardIosIcon /> </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "white", height: 72, width: 72, borderRadius: 36, display: "flex", justifyContent: "center", alignItems: "center", color: "black", boxShadow: "3px 2px 9px -2px rgba(0,0,0,0.75)", }}
                onClick={onClick}
            ><ArrowBackIosIcon style={{ marginLeft: 9 }} /> </div>
        );
    }
    return (
        <Container>
            <div style={{ position: "relative", top: -184, backgroundColor: "white", boxShadow: "0px 20px 94px rgba(69, 69, 69, 0.06)" }}>
                <Slider {...settings}>
                    {
                        data.map((item, index) => <IndividualProduct name={item.name} specfication={item.specfication} price={item.price} key={index} />)
                    }
                </Slider>
            </div>
        </Container>
    )
}

export default HotItemProducts
