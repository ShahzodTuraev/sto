import styled from "styled-components";
import {device} from '../Generic/responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 50px 0;
`;
  const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: 900;
  letter-spacing: -0.05rem;
  line-height: 120%;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  @media ${device.mobile}{
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export {Container, Main, Title }