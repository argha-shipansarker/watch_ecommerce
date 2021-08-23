import { makeStyles } from "@material-ui/core";

const ProductRecommendationStyles = makeStyles(theme => ({
    heading: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: 40,
        color: "rgba(24, 59, 86, 1)",
        marginTop: 100,
        textAlign: "center"
    },
    subHeading: {
        fontWeight: 400,
        fontSize: 16,
        textAlign: "center",
        color: "rgba(90, 113, 132, 1)",
        marginTop: 14,
        marginBottom: 70
    },
    productContainer: {
        width: 262,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 8,
        "&:hover": {
            backgroundColor: "rgb(235, 247, 242)",
            "& $buyNowButton": {
                backgroundColor: "rgba(54, 179, 126, 1)",
                color: "white",
                borderRadius: 8
            },
            "& $favouriteIconContainer": {
                backgroundColor: "white"
            }
        }
    },
    favouriteIconContainer: {
        position: "absolute",
        right: 28,
        top: 28,
        height: 36,
        width: 36,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 18,
        backgroundColor: "rgb(247, 248, 249)"
    },
    productImage: {
        width: 120,
        height: 120,
        backgroundColor: "rgba(252, 90, 90, 1)",
        marginTop: 55,
        marginBottom: 52,
        borderRadius: 8
    },
    productName: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: 20,
        marginBottom: 19,
        color: "rgba(24, 59, 86, 1)",
        textAlign: "center"
    },
    priceBlock: {
        display: "flex",
        marginBottom: 30,
    },
    currentPrice: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        color: "rgba(24, 59, 86, 1)",
        marginRight: 11,
    },
    oldPrice: {
        fontWeight: 400,
        fontSize: 16,
        color: "rgba(149, 158, 173, 1)",

    },
    buyNowButton: {
        width: 206,
        height: 48,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "rgba(54, 179, 126, 1)",
        marginBottom: 20,
        cursor: "pointer"
    },
    buyNowButtonText: {
        fontWeight: 600,
        fontSize: 16
    },
    appleWatchCard: {
        width: 262,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(233, 84, 50, 1)",
        borderRadius: 8
    },
    appleWatchCardHeading: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: 20,
        color: "white",
        marginTop: 26
    },
    timeBlock: {
        display: 'flex',
        color: "white",
        marginTop: 16
    },
    individualTimeBlock: {
        height: 26,
        width: 34,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(235, 101, 70)",
        borderRadius: 4
    },
    individualTimeBlockText: {
        fontWeight: 600,
    },
    colonIcon: {
        marginLeft: 7,
        marginRight: 7,
    },
    appleWatchImage: {
        height: 140,
        width: 140,
        backgroundColor: "white",
        marginTop: 55,
        marginBottom: 52,
        borderRadius: 8
    },
    appleWatchButton: {
        height: 48,
        width: 226,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "rgb(233, 84, 50)",
        backgroundColor: "white",
        marginBottom: 35,
        borderRadius: 4,
        cursor: "pointer"
    },
    appleWatchButtonText: {
        fontWeight: 700,
        fontSize: 16
    }
}))

export default ProductRecommendationStyles;