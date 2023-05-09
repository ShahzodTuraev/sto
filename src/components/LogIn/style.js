import styled from "styled-components";
import {device} from "../Generic/responsive"
const Container = styled.div`
  background: linear-gradient(to bottom right, #D6BBEA, #66A8F1);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Main = styled.div`
  padding: 40px;
  border-radius: 9px;
  max-width: 436px;
  width: 100%;
  height: 600px;
  background: #FFFFFF;
  margin: auto;
  @media ${device.mobile}{
    width: 95%;
  };
`;
const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
`
const Img = styled.img`
  width: 50%;
  height: auto;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 45px 0 25px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin: 40px 0;
  position: relative;
`;

const Section = styled.div`
display: flex;
justify-content: space-between;
`;

const Text = styled.p`
  font-size: 14px;
  cursor: pointer;
`;

const Click = styled.div`
  border : 1px solid #B7C6CE;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 60px;
  transition: all, 0.1s;
  &:hover{
    background: #f8f9fa;
  }
`;

const LoginAlert = styled.p`
  color: red;
  font-size: 14px;
  position: absolute;
  left: 20%;
`;
const PassAlert = styled.p`
  color: red;
  font-size: 14px;
  position: absolute;
  left: 20%;
`


export {Container, PassAlert, Main, LoginAlert, Img, ImgWrap, Title, Wrapper, Section, Text, Click};