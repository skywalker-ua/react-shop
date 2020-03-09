import React from 'react'
import './styles.css'
import {
    IconButton,
    Badge,
    Popover,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const Cart = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleOpen = e => {
        setAnchorEl(e.currentTarget)
    }
    const open = Boolean(anchorEl)
    return(
        <React.Fragment>
         <IconButton>
             <Badge badgeContent={0} color="secondary" showZero>
              <ShoppingCartIcon onClick={handleOpen} style={{color: 'white'}} />
             </Badge>
         </IconButton>
            <Popover
                id='cart-popover'
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}>
                    <List>
                        <ListItem button>
                            <ListItemText primary="product" />
                        </ListItem>
                    </List>
            </Popover>
        </React.Fragment>
    );
};

export default Cart;