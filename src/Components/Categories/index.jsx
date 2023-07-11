import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { getCategories, setCategory } from '../../store/categories';

function Categories() {
  const { categories } = useSelector((state) => state.categories)
  const dispatch = useDispatch();

  const setDispatcher = (category) => {
    dispatch(setCategory(category));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <h2>Browse our Categories</h2>
      <ButtonGroup variant="text" aria-label="text button group">
        {
          categories.map((category, index) => (
            <Button
              key={`categories-${index}`}
              onClick={() => setDispatcher(category)}
            >
              {category.name}
            </Button>
          ))
        }
      </ButtonGroup>

    </>
  )
}

export default Categories