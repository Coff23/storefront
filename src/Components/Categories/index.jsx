import { useDispatch, useSelector } from "react-redux";

function Categories() {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const categoryHandler = 

  return(
    <>
      <h3>Browse our Categories</h3>
      <text>ELECTRONICS</text>
      <text>FOOD</text>
      <div>
        <h1>{}</h1>
      </div>
    </>
  )
}

export default Categories;