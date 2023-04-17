import styled from "styled-components";
import {device} from "../Generic/responsive"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient( #FFFFFF, #F4F9FC);
  margin-top: 80px;
  @media ${device.mobile} { 
    min-width: 360px;
    margin-top: 0px;
  };

  @media ${device.tablet}{
    margin-top: 0;
  }
`;
const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 1170px;
width: 100%;
`;




export {Container, Main}