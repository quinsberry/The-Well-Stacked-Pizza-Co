import styled from 'styled-components';

export const Banner = styled.div`
  height: 260px;
  /* background: url('img/banner.jpg'); */
  background: url('img/bg.jpg');
  background-size: cover;
  /* background-position: center; */
  background-position: right 30% bottom 33%;
  /* filter: blur(.5px); */

  @media only screen and (max-width: 425px) {
    background-position: center;
  }
`;