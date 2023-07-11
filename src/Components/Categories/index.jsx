import { Button, ButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../store/reducer";

function Categories() {
  const { categories } = useSelector((state) => state.store);
  console.log('categories', categories);
  const dispatch = useDispatch();

  // const categoryHandler = 

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
    </>
  )
}

export default Categories;