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
import { useAuthentication } from './Hooks/useAuthentication';


function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  useTitle({ ...openFood, ...orders })

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} esc />
      <Navbar {...auth} />
      <Banner />
      <Container>
        <Menu {...openFood} />
        <Order {...orders} {...openFood} {...auth} />
      </Container>
    </>
  );
}

export default App;
