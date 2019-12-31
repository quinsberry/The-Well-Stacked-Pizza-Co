import React from 'react';
import styled from 'styled-components';
import { DialogFooter, DialogContent, ConfirmButton } from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';

const database = window.firebase.database();

const OrderStyled = styled.div`
  /* position: fixed; */
  /* right: 0; */
  top: 50px;
  width: 370px;
  height: calc(100% - 50px);
  background-color: white;
  box-shadow: 1px 5px 5px 4px grey;
  z-index: 4;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 852px) {
    max-width: 340px;
  }
  @media only screen and (max-width: 425px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 320px) {
    margin-top: 30px;
    width: 300px;
    box-shadow: 1px 1px 2px 1px grey;
  }
`;



const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) => editable ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }` : ` pointer-events: none;`
  }
`;

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: grey;
  font-size: 12px;
`;

const EmptyOrder = styled.div`
  text-align: center;
  margin-top: 7%;
  font-size: 25px;
  opacity: .2;
`;

function sendOrder(orders, { email, displayName }) {
  var newOrderRef = database.ref("orders").push();
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

export function Order({ orders, setOrders, setOpenFood, login, loggedIn }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const vat = subtotal * 0.07;
  const total = subtotal + vat;

  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  }

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>
          <EmptyOrder>
            Your order is currently empty.
          </EmptyOrder>
        </OrderContent>
      ) : (
          <OrderContent>
            <OrderContainer>
              Your Order:
            </OrderContainer>
            {" "}
            {orders.map((order, index) => (
              <OrderContainer editable>
                <OrderItem onClick={() => {
                  setOpenFood({ ...order, index })
                }}>
                  <div>{order.quantity}</div>
                  <div>{order.name}</div>
                  <div style={{ cursor: 'pointer' }} onClick={e => {
                    e.stopPropagation();
                    deleteItem(index);
                  }}><i className="fas fa-trash"></i></div>
                  <div>{formatPrice(getPrice(order))}</div>
                </OrderItem>
                <DetailItem>
                  {order.toppings
                    .filter(t => t.checked)
                    .map(topping => topping.name)
                    .join(", ")
                  }
                </DetailItem>
                {order.choice && <DetailItem>{order.choice}</DetailItem>}
              </OrderContainer>
            ))}
            <OrderContainer>
              <OrderItem>
                <div />
                <div>Sub-Total</div>
                <div>{formatPrice(subtotal)}</div>
              </OrderItem>
              <OrderItem>
                <div />
                <div>VAT</div>
                <div>{formatPrice(vat)}</div>
              </OrderItem>
              <OrderItem>
                <div />
                <div>Total</div>
                <div>{formatPrice(total)}</div>
              </OrderItem>
            </OrderContainer>
          </OrderContent>
        )}
      <DialogFooter>
        <ConfirmButton onClick={() => {
          if (loggedIn) {
            console.log("logged in.");
            sendOrder(orders, loggedIn);
          } else {
            login();
          }
        }}>
          Checkout
         </ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
