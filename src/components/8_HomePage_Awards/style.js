import styled from "styled-components";
import {device} from '../Generic/responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 80px 0;
  background: #042C54;
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
  color: #1CBCFF;
  margin-bottom: 30px;
  @media ${device.tablet}{
    width: 95%;
  };
  @media ${device.mobile}{
    font-size: 2rem;
  }
`;

const Suptitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  width: 80%;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  @media ${device.mobile}{
    font-size: 1rem;
    width: 90%;
  }
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  @media ${device.tablet}{
    width: 94%;
  }
  @media ${device.mobile}{
    font-size: 26px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 30px 0;
  width: 100%;
  @media ${device.tablet}{
    flex-direction: column;
    align-items: center;
  }
  `;
  
  const Img = styled.img`
  width: 355px;
  height: 266px;
  border-radius: 8px;
  `;

export {Container, Suptitle, Main, Title, Text, Wrapper, Img, }