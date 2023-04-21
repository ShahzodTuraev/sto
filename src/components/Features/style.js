import styled from "styled-components";
import { ReactComponent as icon } from "../../assets/icons/play.svg";
import {device} from "../Generic/responsive"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient( #E0ECFB, #FFFFFF);
  height: 100vh;
  @media ${device.tablet}{
    height: 100%;
  };
  `;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1170px;
  width: 100%;
  margin-top: 40px;
  `;

const Tit = styled.h1`
  width: 86%;
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  @media ${device.tablet}{
    font-size: 3rem;
    width: 90%;
  };
  @media ${device.mobile}{
    font-size: 40px;
    width: 93%;
  };
  
`;
const Text = styled.p`
  width: 74%;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  @media ${device.tablet}{
    font-size: 22px;
    width: 90%;
    margin: 20px 0;
  };
  @media ${device.mobile}{
    font-size: 18px;
    margin: 12px 7px;
  };
`;
const VideoBox = styled.div`
  box-shadow: 0px 4px 16px 2px rgba(0, 44, 122, 0.2);
  width: 1000px;
  height: 600px;
  padding: 20px;
  margin-bottom: 100px;
  @media ${device.tablet}{
    width: 95%;
    height: 400px;
    
    };
  @media ${device.mobile}{
    width: 95%;
    height: 220px;
  }
  `;
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 42px;
  text-align: center;
  background: var(--color-6Z-dzM8-7);
  color: var(--color-6Z-dzM8-5);
  gap: 5px;
  margin-top: 30px;
  @media ${device.tablet}{
    width: 95%
    };
  @media ${device.mobile}{
    width: 95%;
  }
`;
const Icon = styled.div``;
Icon.Play = styled(icon)`
  width: 20px;
  @media ${device.mobile}{
    width: 14px;
  }
`;
const VideoTitle = styled.p`
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



export {Container, Icon, Main,  Text, Tit, VideoBox, Section, VideoTitle};