import { makeStyles } from "@material-ui/core";

const HotItemProductsStyle = makeStyles({
    productContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 262,
    },
    productImage: {
        height: 120,
        width: 120,
        backgroundColor: "rgba(252, 90, 90, 1)",
        borderRadius: 8,
        marginTop: 55,
        marginBottom: 52
    },
    productName: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: 20,
        marginBottom: 5,
        color: "rgba(24, 59, 86, 1)"
    },
    productSpecfic: {
        fontWeight: 400,
        fontSize: 16,
        color: "rgba(149, 158, 173, 1)",
        marginBottom: 22
    },
    productPrice: {
        fontWeight: 600,
        fontSize: 20,
        color: "rgba(54, 179, 126, 1)",
        marginBottom: 34,
    }
})

export default HotItemProductsStyle;