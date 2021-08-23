import { createTheme } from "@material-ui/core";

const theme = createTheme({
    typography: {
        fontFamily: "Open Sans, sans-serif"
    },
    palette: {
        primary: {
            main: "rgba(252, 90, 90, 1)"
        },
        secondary: {
            main: "rgba(24, 59, 86, 1)"
        }
    }
})

export default theme;