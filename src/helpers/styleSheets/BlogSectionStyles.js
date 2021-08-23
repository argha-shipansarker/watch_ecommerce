import { makeStyles } from "@material-ui/core";

const BlogSectionStyles = makeStyles(theme => ({
    heading: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: 36,
        color: theme.palette.secondary.main,
        textAlign: "center",
        marginBottom: 10
    },
    subHeading: {
        fontWeight: 400,
        fontSize: 16,
        color: "rgb(90, 113, 132)",
        textAlign: "center",
        marginBottom: 56
    },
    blogImage: {
        height: 156,
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        marginBottom: 22,
        borderRadius: 8,
    },
    blogHeading: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: 20,
        color: theme.palette.secondary.main,
    },
    blogSubHeading: {
        fontWeight: 400,
        color: "rgba(90, 113, 132, 1)",
        marginTop: 10,
        marginBottom: 22
    },
    readMore: {
        fontWeight: 700,
        fontSize: 16,
        color: "rgba(54, 179, 126, 1)",
        marginRight: 9
    },
    iconBox: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: "white",
        position: "absolute",
        top: 16,
        right: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}))

export default BlogSectionStyles