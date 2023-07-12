import { useSelector } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';

function ShoppingCart() {

  const cart = useSelector(state => state.cart);
  return (
    <>
    <Header />
      <div style={{ marginTop: '200px' }}>
        <h1>Cart</h1>
        <h3>Items:</h3>
        {
          cart.length > 0 ? cart.map((item, index) => (
            <p key={`shoppingCart-${index}`}>
              {item.name} {item.price}
            </p>
          )) : <h4>Cart is Empty</h4>
        }
      </div>
      <Footer />
    </>
  )
}

export default ShoppingCart;