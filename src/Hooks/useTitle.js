import { useEffect } from 'react';

const correctTitle = (orders) => {
  if (orders.length === 0) {
    return document.title = `What's for dinner?`;
  } else if (orders.length === 1) {
    return document.title = `[${orders.length}] item in your order! `;
  } else {
    return document.title = `[${orders.length}] items in your order! `;
  }
}

export function useTitle({ openFood, orders }) {
  useEffect(() => {
    if (openFood) {
      document.title = openFood.name;
    } else {
      correctTitle(orders);
    }
  });
}