import { makeStyles } from "@material-ui/core";

const CategoryStyles = makeStyles(theme => ({
    individualCategoryContainer: {
        width: 165,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 8,
        border: "1px solid rgba(236, 238, 242, 1)",
        marginRight: 6,
        "&:hover": {
            backgroundColor: "rgb(247, 248, 249)",
            cursor: "pointer"
        }
    },
    individualCategoryText: {
        fontFamily: "HK Grotesk, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        color: "rgba(24, 59, 86, 1)",
        marginBottom: 32,
    }
}))

export default CategoryStyles;