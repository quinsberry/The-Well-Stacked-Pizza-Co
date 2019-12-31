import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
import { formatPrice } from '../Data/FoodData';

const MenuStyled = styled.div`
  height: 1200px;
  margin: 0px 50px 50px 20px;

  @media only screen and (max-width: 720px) {
    height: 100%;
  }
  @media only screen and (max-width: 320px) {
    margin: 0;
  }
`;

export function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1> {sectionName} </h1>
          <FoodGrid>
            {foods.map(food => (
              <Food img={food.img} onClick={() => setOpenFood(food)}>
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
}
