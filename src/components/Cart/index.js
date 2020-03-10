import React from 'react'
import './styles.css'
import {
    IconButton,
    Badge,
    Popover,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemIcon,
    Avatar 
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components'
import { connect } from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const CartList = styled(ListItem)`
    display: flex;
    flex-flow: row nowrap;
    
`;

const CartName = styled(ListItemText)`
    font-size: .4em;
    margin-left: 10px;
`;

const CartPrice = styled(ListItemText)`
    color: #fb3f4c;
    margin-left: 10px;
    margin-right: 5px;
    
`;

const Cart = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    
    const { productInfo } = props;
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleOpen = e => { 
        if (productInfo.length === 0) {
            setAnchorEl(null)
        } else {
        setAnchorEl(e.currentTarget)
        }
    }
    const open = Boolean(anchorEl)
    return(
        <React.Fragment>
         <IconButton>
             <Badge badgeContent={productInfo.length} color="secondary" showZero>
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
                    <List dense>
                        {productInfo.map(product => (
                            <React.Fragment>
                             <CartList button key={product.id}>
                                 <Avatar alt={product.name} src={product.image} />
                                 <CartName primary={product.name} />
                                 <CartPrice primary={product.price + ' ₴'} />
                                 <ListItemIcon>
                                    <DeleteIcon style={{color: 'red', position: 'relative', left: '1em'}} />
                                 </ListItemIcon>
                             </CartList>
                             {productInfo.length > 1 && <Divider key={product.id * Math.random()}  />}
                            </React.Fragment>
                        ))}
                    </List>
            </Popover>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    productInfo: state.currentProduct
})

export default connect(mapStateToProps, null)(Cart);