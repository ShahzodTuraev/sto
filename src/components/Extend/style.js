import styled from "styled-components";
import {device} from "../Generic/responsive"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient( #E0ECFB, #F4F9FC);
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
  padding: 20px 0;
  `;

const Tit = styled.h1`
  margin-top: 20px;
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  @media ${device.tablet}{
    font-size: 3rem;
  };
  @media ${device.mobile}{
    font-size: 40px;
  };
  
`
const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  @media ${device.tablet}{
    font-size: 28px;
  };
  @media ${device.mobile}{
    font-size: 26px;
  };

`
const Text = styled.p`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin: 18px 0;
  @media ${device.tablet}{
    font-size: 22px;
  };
  @media ${device.mobile}{
    font-size: 18px;
    margin: 12px 0;
  };
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0E3B68;
  width: 100%;
  height: auto;
  padding: 5px;
  gap: 5px;
  border-radius: 4px;
  
`;

const VideoBox = styled.div`
  width: 100%;
  height: 270px;
  @media ${device.tablet}{
    height: 340px;
  };
  @media ${device.mobile}{
    height: 200px;
  };
`;


const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  @media ${device.mobile}{
    gap: 15px;;
  };
  `;
  
const BoxWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30px 0;
  gap: 20px;
  @media ${device.tablet}{
    flex-direction: column;
    gap: 40px;
    width: 90%;
  };
  @media ${device.mobile}{
    width: 95%;
  };
`;

const Img = styled.img`
width: auto;
height: auto;
`

export {Container, Img, Main, Title, Text, VideoBox, Box, Tit, TitleWrap, BoxWrap};