import React from 'react';
import styled from 'styled-components';
import { DialogFooter, DialogContent, ConfirmButton } from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';

const OrderStyled = styled.div`
  /* position: fixed; */
  /* right: 0; */
  top: 50px;
  width: 370px;
  height: calc(100% - 50px);
  background-color: white;
  box-shadow: 1px 0px 5px 4px grey;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;



const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
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

export function Order({ orders }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);
  const vat = subtotal * 0.07;
  const total = subtotal + vat;
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
            {orders.map(order => (
              <OrderContainer>
                <OrderItem>
                  <div>{order.quantity}</div>
                  <div>{order.name}</div>
                  <div />
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
        <ConfirmButton>
          Checkout
         </ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
