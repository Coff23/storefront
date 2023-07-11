import { Box, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete'
import { removeFromCart } from "../../store/actions";


const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      {
        cart.map((product, index) => {
          return (
            <Box 
              className='cart-items'
              key={`cart=${index}`}
            >
              <Typography>{product.name}</Typography>
              <IconButton>
                <DeleteIcon onClick={() => dispatch(removeFromCart(product))} />
              </IconButton>
            </Box>
          )
        })
      }
    </>
  )
}

export default Cart;