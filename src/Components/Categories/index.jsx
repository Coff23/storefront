import { Button, ButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../store/reducer";
import { reset } from "../../store/actions";

function Categories() {
  const { categories } = useSelector((state) => state.store);
  console.log('categories', categories);
  const dispatch = useDispatch();

  // const categoryHandler = (category) => {
  //   dispatch(changeProducts(category));
  // }

  return(
    <>
      <h2>Browse our Categories</h2>
      <ButtonGroup variant="text" aria-aria-label="text button geroup">
        {
          categories.map((category, index) => (
            <Button key={`categories-${index}`}
            onClick={() => dispatch(set(category))}
            >{category.displayName}
            </Button>
          ))
        }
      </ButtonGroup>
      <Button onClick={() => reset()}>
        Reset
      </Button>
    </>
  )
}

export default Categories;