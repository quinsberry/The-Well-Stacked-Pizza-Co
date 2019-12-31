import styled from 'styled-components';
import { Title } from '../Styles/title';

export const FoodGrid = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  padding-bottom: 10px;

  @media only screen and (max-width: 852px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media only screen and (max-width: 320px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255,255,255,.8);
  padding: 5px;
  @media only screen and (max-width: 425px) {
    font-size: 20px;
  }
`;

export const Food = styled.div`
  height: 100px;
  padding: 20px 10px 10px 20px;
  font-size: 22px;
  background-image: ${({ img }) => `url(${img});`};
  background-size: cover;
  background-position: center;
  border-radius: 11px;
  margin-top: 5px;
  box-shadow: 0px 0px 2px 0px grey;
  filter: contrast(75%);
  transition: .2s;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 5px 10px 0px grey;
    filter: contrast(100%);

  }
`;

