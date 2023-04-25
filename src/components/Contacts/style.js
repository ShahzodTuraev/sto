import styled from "styled-components";
import {device} from "../Generic/responsive"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  `;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1170px;
  width: 100%;
  margin-top: 10px;
  @media ${device.mobile}{
    width: 100%;
  }
  `;

const Iconbox = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin: 15px 0;
  @media ${device.tablet}{
    width: 55%;
    margin-top: 10px;
  }
  @media ${device.mobile}{
    width: 85%;
  }
`;
const Img = styled.img`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 9px;
  box-shadow: 3px 3px 3px #D9D5D5;
  @media ${device.tablet}{
    width: 35px;
    height: 35px;
  }
  @media ${device.mobile}{
    width: 33px;
    height: 33px;
  }
`;
const InputWrap = styled.form`
  position: relative;
  display: flex;
  width: 70%;
  gap: 20px;
  @media ${device.tablet}{
    width: 55%;
  }
  @media ${device.tablet}{
    width: 85%;
  }

`
const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  @media ${device.tablet}{
    width: 35px;
    height: 35px;
  }
  @media ${device.mobile}{
    width: 33px;
    height: 33px;
  }
`
const AnswerBox = styled.div`
width: 70%;
margin-top: 30px;
@media ${device.tablet}{
    width: 55%;
  }
  @media ${device.tablet}{
    width: 85%;
    margin-top: 5px;
  }
`;
const Answer = styled.p`
  font-size: 1.2rem;
`;

const Alert = styled.p`
  font-size: 18px;
  color: red;
  position: absolute;
  bottom: 0;
  left: 50%
`
export {Alert, Answer, AnswerBox, Container, Main, Iconbox, Img, InputWrap, Button}