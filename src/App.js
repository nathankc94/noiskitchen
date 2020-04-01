import React from 'react';
import { Navbar } from "./Navbar/navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { GlobalStyle } from "./Style/GlobalStyle";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFoods";
import { useOrders } from "./Hooks/useOrders";
import {useAuthentication} from "./Hooks/useAuthentication";
import {OrderDialog} from "./Order/OrderDialog";
import {useOrderDialog} from "./Hooks/useOrderDialog";
import { Cart } from "./Cart/Cart";



function App() {
  const openFood = useOpenFood();
  const orders = useOrders ();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();

  return (
    <>
    <GlobalStyle/>
    <OrderDialog {...orderDialog} {...orders} />
    <FoodDialog {...openFood} {...orders} />
    <Navbar {...auth}/>
    <Order {...orders} {...auth} {...orderDialog}/>
    <Banner/>
    <Menu {...openFood}/>
    <Cart />
   </>
  );
}

export default App;
