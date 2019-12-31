import React from 'react';
import styled from 'styled-components';

const ToppingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;

export function Toppings({ toppings, checkTopping }) {
  return (
    <ToppingsGrid>
      {toppings.map((topping, i) => (<CheckboxLabel>
        <ToppingCheckbox type="checkbox" checked={topping.checked} onClick={() => {
          checkTopping(i);
        }} />
        {topping.name}
      </CheckboxLabel>))}
    </ToppingsGrid>
  );
}