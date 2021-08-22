import { makeStyles } from "@material-ui/core";

const HeroProductsStyle = makeStyles(theme => ({
    outerContainer: {
        backgroundColor: "rgb(247, 248, 249)",
        paddingTop: 90,
        paddingBottom: 61
    },
    productImage: {
        height: 80,
        width: 80,
        backgroundColor: "rgba(252, 90, 90, 1)",
        marginRight: 31,
        borderRadius: 8
    },
    individualProductContainer: {
        display: "flex",
        backgroundColor: "white",
        width: 360,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 21,
        paddingBottom: 21,
        borderRadius: 12
    },
    productName: {
        fontWeight: 600,
        fontSize: 16,
        color: "rgba(24, 59, 86, 1)",
        marginBottom: 16
    },
    productPrice: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: 16,
        color: "rgba(24, 59, 86, 1)"
    }
}))

export default HeroProductsStyle