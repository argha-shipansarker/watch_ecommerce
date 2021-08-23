import React from 'react'

import { Box, Grid, Container, Typography } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import BlogSectionStyles from '../helpers/styleSheets/BlogSectionStyles'

const data = [
    {
        name: "Brighten Up Dull Tired Skin",
        subHeading: "Gravity is an irresistible force. While it is certainly nice that it keeps us rooted the..."
    },
    {
        name: "Brighten Up Dull Tired Skin",
        subHeading: "Gravity is an irresistible force. While it is certainly nice that it keeps us rooted the..."
    },
    {
        name: "Brighten Up Dull Tired Skin",
        subHeading: "Gravity is an irresistible force. While it is certainly nice that it keeps us rooted the..."
    },
]

const IndividualBlog = props => {
    const classes = BlogSectionStyles()
    const { heading, subHeading } = props
    return (
        <Grid item md={4} sm={6}>
            <Box style={{ backgroundColor: "rgb(247, 248, 249)", paddingTop: 20, borderRadius: 8, }}>
                <Box style={{ paddingLeft: 20, position: "relative", paddingRight: 20 }}>
                    <Box className={classes.blogImage}>

                    </Box>
                    <Box className={classes.iconBox}>
                        <BookmarkIcon style={{ fontSize: 13, color: "rgba(90, 113, 132, 1)" }} />
                    </Box>
                    <Typography className={classes.blogHeading}>{heading}</Typography>
                    <Box style={{ width: "100%", overflow: "hidden", textOverflow: "ellipsis", }}>
                        <Typography className={classes.blogSubHeading}>{subHeading}</Typography>
                    </Box>
                    <Box style={{ display: "flex", paddingBottom: 20, cursor: "pointer" }}>
                        <Typography className={classes.readMore}>Read More</Typography>
                        <ArrowRightAltIcon style={{ color: "rgba(54, 179, 126, 1)" }} />
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

const BlogSection = () => {
    const classes = BlogSectionStyles()
    return (
        <Container style={{ marginBottom: 80 }}>
            <Typography className={classes.heading}>Read our Blog</Typography>
            <Typography className={classes.subHeading}>Check our latest article to get inspiring content for shopping</Typography>
            <Grid container spacing={4}>
                {
                    data.map((item, index) => <IndividualBlog heading={item.name} subHeading={item.subHeading} key={index} />)
                }
            </Grid>
        </Container>
    )
}

export default BlogSection
