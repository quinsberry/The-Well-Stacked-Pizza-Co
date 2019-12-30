import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { GlobalStyle, Container } from './Styles/GlobalStyle';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';




function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({ ...openFood, ...orders })

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} esc />
      <Navbar />
      <Banner />
      <Container>
        <Menu {...openFood} />
        <Order {...orders} {...openFood} />
      </Container>
    </>
  );
}

export default App;
