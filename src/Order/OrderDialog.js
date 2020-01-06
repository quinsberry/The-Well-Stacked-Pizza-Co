import React from 'react';
import { Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton } from '../FoodDialog/FoodDialog';
import styled from 'styled-components';

const OrderDialogContent = styled(DialogContent)`
  text-align: center;
`;

export function OrderDialog({ openOrderDialog, setOpenOrderDialog, setOrders }) {
  return openOrderDialog ? <>
    <DialogShadow />
    <Dialog>
      <OrderDialogContent>
        <h2> <i class="fas fa-truck"></i> Your order is on the way! </h2>
        <p> You have been emailed confirmation of your order. Thanks for choosing The Well Stacked Pizza Co.</p>
      </OrderDialogContent>
      <DialogFooter>
        <ConfirmButton onClick={() => {
          setOrders([]);
          setOpenOrderDialog();
        }}>
          I'm still hungry
      </ConfirmButton>
      </DialogFooter>
    </Dialog>
  </> : <div />
}
