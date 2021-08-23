import { makeStyles } from "@material-ui/core";

const FooterStyles = makeStyles(theme => ({
    logo: {
        fontWeight: 700,
        color: theme.palette.secondary.main,
        fontSize: 40,
        marginBottom: 33,
        cursor: "pointer"
    },
    logoText: {
        fontWeight: 400,
        fontSize: 16,
        color: "rgba(90, 113, 132, 1)",
        width: 263,
        marginBottom: 32,
    },
    icon: {
        height: 42,
        width: 42,
        borderRadius: 21,
        backgroundColor: theme.palette.primary.main,
        marginRight: 6,
        cursor: "pointer"
    },
    itemHeading: {
        fontWeight: 700,
        fontSize: 18,
        color: theme.palette.secondary.main,
        marginBottom: 31,
        marginTop: 15,
        cursor: "pointer"
    },
    individualItem: {
        fontWeight: 400,
        fontSize: 16,
        color: theme.palette.secondary.main,
        marginBottom: 24,
        cursor: "pointer"
    }
}))

export default FooterStyles;