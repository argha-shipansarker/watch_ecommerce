import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

import { HeaderStyles } from '../helpers/styleSheets/HeaderStyles';
import { Box, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';


export default function SwipeableTemporaryDrawer() {
    const classes = HeaderStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography className={classes.navItem} style={{ marginBottom: 10, fontSize: 40 }}>Home</Typography>
                <Box className={classes.dropDown} style={{ display: "flex", flexDirection: "row", marginBottom: 10, alignItems: "center", marginLeft: 40 }}>
                    <Typography className={classes.fontWeight} style={{ fontSize: 40 }}>Landings</Typography>
                    <ExpandMoreIcon style={{ fontSize: 40 }} />
                </Box>
                <Box className={classes.dropDown} style={{ display: "flex", flexDirection: "row", marginBottom: 10, alignItems: "center", marginLeft: 40 }}>
                    <Typography className={classes.fontWeight} style={{ fontSize: 40 }}>Pages</Typography>
                    <ExpandMoreIcon tyle={{ fontSize: 40 }} />
                </Box>
                <Typography className={classes.navItem} style={{ marginBottom: 10, fontSize: 40 }}>Docs</Typography>
                <Typography className={classes.navItem} style={{ marginBottom: 10, fontSize: 40 }}>Help</Typography>
                <Button variant="outlined" style={{ color: "rgba(21, 101, 216, 1)", border: "3px solid rgba(21, 101, 216, 1)", fontSize: 40 }}>
                    Get it now
                </Button>
            </List>

        </div>
    );

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography className={classes.logoText}>ehya</Typography>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
