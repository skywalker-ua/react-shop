import React, { useEffect } from 'react'
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
import { handleDeleteCart } from '../../store/actions'

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

const Counter = styled(ListItemText)`
    margin-left: 10px;
    margin-right: 5px;
`;

const Total = styled(ListItemText)`
    padding: 10px;
    color: #fb3f4c
`;

const Cart = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [count, setCount ] = React.useState(0)
    const [total, setTotal] = React.useState(0)

    const { productInfo } = props;

    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleOpen = e => { 
        if (productInfo.length > 0) {
        setAnchorEl(e.currentTarget)
        }
    }

    const handleDelete = (id, event) => {
        console.log(id, event)
        props.handleDeleteCart(id)
    }

    const open = Boolean(anchorEl)

    useEffect(() => {
        let count = 0;
        console.log(count)
        productInfo.map(p => {
            count += p.price
        })
        setTotal(count)
        
    }, [productInfo])

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
                             <CartList button key={product.id * Math.random()}>
                                 <Avatar alt={product.name} src={product.image} />
                                 <CartName primary={product.name} />
                                 <Counter primary={'x' + count} />
                                 <CartPrice primary={product.price + ' ₴'} />
                                 <ListItemIcon>
                                    <DeleteIcon onClick={() => handleDelete(product.id, 'delete')} style={{color: 'red', position: 'relative', left: '1em'}} />
                                 </ListItemIcon>
                             </CartList>
                             {productInfo.length > 1 && <Divider key={product.id * Math.random()}  />}
                            </React.Fragment>
                        ))}
                        <Total primary={`Total: ${total} ₴`} />
                    </List>
            </Popover>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    productInfo: state.currentProduct
})

const mapDispatchToProps = dispatch => ({
    handleDeleteCart: (id) => dispatch(handleDeleteCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);