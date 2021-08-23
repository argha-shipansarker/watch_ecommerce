import { makeStyles } from "@material-ui/core";

const MostSoldStyles = makeStyles(theme => ({
    heading: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: 24,
        color: theme.palette.secondary.main,
        marginBottom: 30,
    },
    individualProductContainer: {
        display: "flex",
        backgroundColor: "rgb(247, 248, 249)",
        alignItems: "center",
        marginBottom: 20,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 8
    },
    productImage: {
        height: 66,
        width: 66,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 4,
        marginRight: 22,
        marginLeft: 20
    },
    productInfo: {
        width: 200,
    },
    productName: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        color: theme.palette.secondary.main,
        marginBottom: 11,
    },
    ratingSoldInfo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    ratingText: {
        fontWeight: 400,
        color: theme.palette.secondary.main,
        marginLeft: 7
    },
    seperator: {
        height: 4,
        width: 4,
        borderRadius: 2,
        backgroundColor: "rgba(179, 186, 197, 1)"
    },
    soldText: {
        color: "rgb(90, 113, 132)",
        fontWeight: 600,
        marginLeft: 8
    },
    leaderBoardText: {
        fontWeight: 700,
        fontSize: 16,
        color: "rgba(54, 179, 126, 1)",
        marginLeft: 20
    }
}))

export default MostSoldStyles;