import { makeStyles } from "@material-ui/core";

const FooterBannerStyles = makeStyles(theme => ({
    outerContainer: {
        backgroundColor: "rgba(250, 173, 19, 1)",
    },
    bannerImage: {
        height: 310,
        width: "94%",
        marginTop: 40,
        backgroundColor: "white",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    bannerText: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: 48,
        marginBottom: 42,
        color: "white"
    },
    bannerShape: {
        width: 173,
        height: 52,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 8
    }
}))

export default FooterBannerStyles