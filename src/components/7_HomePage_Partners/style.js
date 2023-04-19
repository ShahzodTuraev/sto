import styled from "styled-components";
import { device } from "../Generic/responsive"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  background: linear-gradient(to right, #E0ECFB, #F4F9FC);
`;

  const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  padding: 60px;
  @media ${device.mobile}{
    padding: 40px;
  }
`;

const UpTitle = styled.p`
  font-weight: 600;
  letter-spacing: -0.05rem;
  line-height: 120%;
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 40px;
  @media ${device.mobile}{
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const BrandWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1108px;
  align-items: center;
  gap: 45px;
  @media ${device.tablet}{
    flex-direction: column;
    width: 90%;
    height: auto;
  
  }
  @media ${device.mobile}{
    flex-direction: column;
    width: 380px;
    height: auto;
    gap: 15px;
  }
`;

const Img = styled.img`
  width: auto;
  height: 180px;

`;



export {Container, Main, UpTitle, Img, BrandWrap}