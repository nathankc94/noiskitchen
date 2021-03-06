import React from "react";
import "./style.css";
import { formatPrice } from "../Data/FoodData";
import { getPrice } from "../FoodDialog/FoodDialog";
const database = window.firebase.database();
// const OrderStyled = styled.div`
//   position: fixed;
//   right: 0px;
//   top: 48px;
//   width: 340px;
//   background-color: white;
//   height: calc(100% - 48px);
//   z-index: 10;
//   box-shadow: 4px 0px 5px 4px grey;
//   display: flex;
//   flex-direction: column;
// `;

// const DetailItem = styled.div`
// color: gray;
// font-size: 15px;
// `;

// const OrderContent = styled(DialogContent)`
//   height: 100%;
//   padding: 20px;
// `;

// const OrderContainer = styled.div`
//   padding: 10x 0x;
//   border-bottom: 1px solid gray;
// `;

// const OrderItem = styled.div`
//   padding: 10px 0px;
//   display: grid;
//   grid-template-columns: 20px 150px 20px 60px;
//   justify-content: space-between;
// `;

function sendOrder(orders, { email, displayName }) {
  var newOrderRef = database.ref("orders").push();
  console.log("text" + orders);
  const newOrders = orders.map(order => {
    return Object.keys(order).reduce((acc, orderKey) => {
      if (!order[orderKey]) {
        // undefined value
        return acc;
      }
      if (orderKey === "toppings") {
        return {
          ...acc,
          [orderKey]: order[orderKey]
            .filter(({ checked }) => checked)
            .map(({ name }) => name)
        };
      }
      return {
        ...acc,
        [orderKey]: order[orderKey]
      };
    }, {});
  });
  newOrderRef.set({
    order: newOrders,
    email,
    displayName
  });
}

export function Order({
  orders,
  setOrders,
  loggedIn,
  login,
  setOpenOrderDialog
}) {
  const total = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <div
      className="modal fade modalClose"
      id="exampleModalScrollable"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalScrollableTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalScrollableTitle">
                Your Order
              </h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {orders.map((order, index) => (
                <div className="container orderDT">
                  <div className="row">
                    <div className="col-6">
                      {order.name}
                      {order.choice && <i> {order.choice}</i>}
                      {order.spice && <i> {order.spice}</i>}
                    </div>
                    <div className="col-2">{order.quantity}X</div>
                    <div className="col-2">{formatPrice(getPrice(order))}</div>
                    <div
                      className="col-2"
                      style={{ cursor: "pointer" }}
                      onClick={e => {
                        e.stopPropagation();
                        deleteItem(index);
                      }}
                    >
                      🗑
                    </div>
                  </div>
                </div>
              ))}
            </div>
          
          <div className="modal-footer">
            <div className="mt-3">
              <h5>Total: {formatPrice(total)}</h5>
            </div>
            {orders.length > 0 && (
              
                <div
                  className="btn checkOut"
                  onClick={() => {
                    if (loggedIn) {
                      setOpenOrderDialog(true);
                      sendOrder(orders, loggedIn);
                    } else {
                      login();
                    }
                  }}
                  data-dismiss="modal"
                >
                  Checkout
                </div>
             
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
