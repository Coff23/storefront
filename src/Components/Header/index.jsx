import { useSelector } from "react-redux";
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';

function Header() {

  const { cart } = useSelector((state) => state.cart);
  
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{ backgroundColor: 'white' }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            >
            <Typography
              className='storeName'
              variant='h4'
              sx={{ color: 'black' }}>
              We Only Accept Doll Hairs Store
            </Typography>
            <Button>
              Cart ({cart.length})
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      </Box>
    )
  }
  
  export default Header;