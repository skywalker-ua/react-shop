import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography
}  from '@material-ui/core';
import Cart from '../Cart'
import styled from 'styled-components'

const ToobarStyled = styled(Toolbar)`
    display: flex;
    flex-flow: row nowrap;
`;

const LogoText = styled(Typography)`
    flex-grow: 1;
    cursor: pointer;
`;

const Header =() => {
    return(
        <React.Fragment>
        <AppBar>
            <ToobarStyled>
                <LogoText variant="h5">Shoppy</LogoText>
                <Cart />
            </ToobarStyled>
        </AppBar>
        <Toolbar />
        </React.Fragment>
    );
}

export default Header;