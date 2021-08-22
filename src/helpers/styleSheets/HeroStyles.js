import { makeStyles } from "@material-ui/core";

export const HeroStyles = makeStyles({
    outerContainer: {
        backgroundColor: "rgb(247, 248, 249)",
        paddingTop: 109
    },
    shape: {
        height: 17,
        width: 118,
        backgroundColor: "rgba(252, 90, 90, 1)",
        marginBottom: 32,
    },
    heading: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: 56,
        color: "rgba(24, 59, 86, 1)",
        marginBottom: 36,
    },
    bulletPoints: {
        display: "flex",
        alignItems: "center",
        marginRight: 48,
    },
    bulletIcon: {
        fontSize: 12,
        color: "rgba(250, 173, 19, 1)",
        marginRight: 12
    },
    bulletPointText: {
        fontWeight: 400,
        color: "rgba(90, 113, 132, 1)",
        fontSize: 18,
    },
    bulletPointsLine: {
        display: "flex",
        marginBottom: 20,
    },
    bulletPointsSecondLine: {
        display: "flex",
        marginBottom: 48,
    },
    textField: {
        backgroundColor: "white",
        "&.Mui-focused": {
            '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
            }
        },
        "&:hover": {
            '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
            }
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: 'none'
        },
    },
    inputTextStyle: {
        fontFamily: "Open Sans, sans-serif"
    },
    preOrderButton: {
        height: 48,
        width: 167,
        backgroundColor: "rgba(54, 179, 126, 1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    preOrderButtonText: {
        fontWeight: 700,
        fontSize: 16,
        color: "white"
    },
    heroImageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    heroImage: {
        height: 421,
        width: 329,
        backgroundColor: "rgba(252, 90, 90, 1)",
        borderRadius: 8,
    }
})