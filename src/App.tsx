import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {useQuery} from 'react-query'
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Badge from '@material-ui/core/Badge';
//Import style from App.styles.ts
import {Wrapper} from './App.styles'
//Import components
import Item from './Item/item'

//Create the CartItem object
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

//Async fetch to get the products from https://fakestoreapi.com/products. The promise 
// is in the form of CartItemType. !Make sure that the client is set up in the index.tsx!
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  //Set the open cart state
  const [cartOpen, setCartOpen] = useState(false);
  //create an empty cart item array that can be added to
  const [CartItem, setCartItems] = useState([] as CartItemType[])

  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;
  //Takes in clickedItem as type CartItemType
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;
  //Loading bar and error message
  if (isLoading) return <LinearProgress/>
  if (error) return <div>Something went wrong...</div>

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;