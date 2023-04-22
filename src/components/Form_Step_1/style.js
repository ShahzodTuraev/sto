import styled from "styled-components";
import {device} from '../Generic/responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

const Main = styled.div`
  max-width: 580px;
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 40px 70px;
  margin-bottom: 10rem;
  position: relative;
  @media ${device.mobile}{
    padding: 30px 20px;
    width: 94%;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: -0.06rem;
  margin-bottom: 30px;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  margin: 20px 0;
  width: 93%;
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px 0;
  `;
const FormWrap = styled.div`
  text-align: start;
  margin: 0 0 20px 40px;

`;
const Coution = styled.p`
  font-weight: 500;
  line-height: 140%;
  font-size: 1rem;
  text-align: center;
`;
const Alert =styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
  position: absolute;
  top: 13.8rem;
  left: 14.5rem;
  @media ${device.tablet}{
    top: 14rem;
  }
  @media ${device.mobile}{
    top: 15rem;
    left: 7.5rem;
  }`;

const Note = styled.p`
  text-align: center;
`;

const Wraper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  align-items: center;
  margin-bottom: 15px;
`



export { Container, Alert, Main, Title, Text, FormWrap, Wrapper, Wraper, Coution, Note}