import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { addToCart } from '../../store/cart';
import { removeInv } from '../../store/products';
import { useDispatch } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';

function ProductDetails() {
  const products = useSelector(state => state.products)
  const { id } = useParams();
  const selectedProduct = products.find(product => product._id === id);

  let dispatch = useDispatch();

  const addDispatcher = (product) => {
    dispatch(addToCart(product));
    dispatch(removeInv(product));
  };

  return (
    <>
    <Header />
      <div style={{ marginTop: '200px' }}>
        <Card sx={{ maxWidth: '80%' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={`https://source.unsplash.com/random?${selectedProduct.name}`}
            title={selectedProduct.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {selectedProduct.name}
            </Typography>

          </CardContent>
          <CardActions>
            <Button
              onClick={() => addDispatcher(selectedProduct)}
              size="small"
            >
              ADD TO CART
            </Button>

          </CardActions>
        </Card>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetails;