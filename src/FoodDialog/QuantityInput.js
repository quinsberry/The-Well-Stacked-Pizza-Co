import React from 'react';
import styled from 'styled-components';
import { Title } from '../Styles/title';
import { pizzaRed } from '../Styles/colors';

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 30px;
  text-align: center;
  border: none;
  outline: none;
`;

const IncrementContainer = styled(Title)`
  display: flex;
  height: 30px;
`;

const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaRed};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  padding: -12px;
  line-height: 23px;
  margin: 0px 5px;
  ${({ disabled }) =>
    disabled &&
    `opacity: .5;
     pointer-events: none;
     `}
  &:hover {
    background-color: #ffe3e3; 
  }
`;

const QuantityButtons = styled.div`
  margin-left: 15px;
  display: flex;
`;

export function QuantityInput({ quantity }) {
  return (
    <IncrementContainer>
      <div>Quantity: </div>
      <QuantityButtons>
        <IncrementButton onClick={() => {
          quantity.setValue(quantity.value - 1);
        }} disabled={quantity.value <= 1}> - </IncrementButton>
        <div><QuantityInputStyled {...quantity} /></div>
        <IncrementButton onClick={() => {
          quantity.setValue(quantity.value + 1);
        }}> + </IncrementButton>
      </QuantityButtons>
    </IncrementContainer >
  );
}
