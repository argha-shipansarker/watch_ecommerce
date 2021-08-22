import { makeStyles } from "@material-ui/core";

export const HeaderStyles = makeStyles({
    outerContainer: {
        backgroundColor: "rgb(247, 248, 249)"
    },
    innerContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logoText: {
        color: "rgb(24, 51, 82)",
        fontSize: 50,
        fontWeight: 700,
    },
    navItems: {
        display: "flex",
        alignItems: "center",
        color: "rgba(24, 59, 86, 1)"
    },
    navItem: {
        marginRight: 40,
        fontWeight: 600,
    },
    dropDown: {
        display: "flex",
        marginRight: 40,
    },
    orderButton: {
        color: "rgba(21, 101, 216, 1)",
        border: "3px solid rgba(21, 101, 216, 1)",
        borderRadius: "10px",
        // fontWeight: 600,
        height: 48,
        width: 131,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    fontWeight: {
        fontWeight: 600,
    }
})