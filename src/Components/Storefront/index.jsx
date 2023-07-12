import Categories from "../Categories";
import SimpleCart from "../Cart";
import Footer from "../Footer";
import Header from "../Header";
import Products from "../Products";


function Storefront() {

  return (
    <>
      <Header />
      <Categories />
      <SimpleCart />
      <Products />
      <Footer />
    </>
  )
}

export default Storefront;