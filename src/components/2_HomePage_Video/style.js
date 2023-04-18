import styled from "styled-components";
import device from "../Generic/responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--color-6Z-dzM8-3);
  height: auto;
  
`;
  const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  margin-bottom: 100px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1108px;
  height: 42px;
  text-align: center;
  background: var(--color-6Z-dzM8-7);
  color: var(--color-6Z-dzM8-5);
  gap: 5px;
  /* margin-top: 30px; */
  @media ${device.tablet}{
    width: 95%
    };
  @media ${device.mobile}{
    width: 95%;
  }
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  line-height: 120%;
  font-size: 18px;
  @media ${device.mobile}{
    font-size:12px;
  }
`;

const IconPlay = styled.img`
  width: 20px;
  @media ${device.mobile}{
    width: 14px;
  }
`;

const Wrapper = styled.div`
  box-shadow: 0px 4px 16px 2px rgba(0, 44, 122, 0.2);
  width: 1108px;
  height: 640px;
  padding: 20px;
  @media ${device.tablet}{
    width: 95%;
    height: 400px;
    
    };
  @media ${device.mobile}{
    width: 95%;
    height: 220px;
  }
`;


export {Container, Main, Section, Text, IconPlay, Wrapper,}