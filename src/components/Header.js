import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography
}  from '@material-ui/core';

const Header =() => {
    return(
        <React.Fragment>
        <AppBar>
            <Toolbar>
                <Typography variant="h5">Shoppy</Typography>
            </Toolbar>
        </AppBar>
        <Toolbar />
        </React.Fragment>
    );
}

export default Header;