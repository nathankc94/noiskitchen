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

const database = window.firebase.database();
const refTest = database.ref('testObj').push();
refTest.set({
  hello: 'guys'
});

function App() {
  const openFood = useOpenFood();
  const orders = useOrders ();
  const auth = useAuthentication();

  return (
    <>
    <GlobalStyle/>
    <FoodDialog {...openFood} {...orders} />
    <Navbar {...auth}/>
    <Order {...orders} {...auth}/>
    <Banner/>
    <Menu {...openFood}/>
   </>
  );
}

export default App;
