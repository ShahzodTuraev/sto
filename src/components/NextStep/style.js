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
  padding: 40px 0;
  `;

const Tit = styled.h1`
  margin: 20px 0 40px 0;
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  @media ${device.tablet}{
    font-size: 3rem;
  };
  @media ${device.mobile}{
    font-size: 36px;
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
    font-size: 22px;
  };

`
const Text = styled.p`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin: 18px 0 30px 0;
  @media ${device.tablet}{
    font-size: 22px;
    margin: 14px 0;
  };
  @media ${device.mobile}{
    font-size: 16px;
    margin: 12px 7px;
    
  };
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0E3B68;
  width: 100%;
  height: auto;
  padding: 10px;
  gap: 10px;
  border-radius: 8px;
  position: relative;
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
  margin: 25px 0 50px 0;
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

// const Line = styled.div`
//   background: linear-gradient(to right , #FFFFFF, rgb(255, 0, 0));
//   width: 37px;
//   height: 2px;
//   position: absolute;
//   top: 315px;
//   left: 320px;
//   @media ${device.tablet} { 
//     left: 400px;
//     top: 385px;
//   }
//   @media ${device.mobile} { 
//     top: 230px;
//     left: 305px;
//   }
// `;

// const Line1 = styled.div`
//   background: linear-gradient(to right , #FFFFFF, rgb(255, 0, 0));
//   width: 38px;
//   height: 2px;
//   position: absolute;
//   top: 315px;
//   left: 323px;
//   @media ${device.tablet} { 
//     left: 405px;
//     top: 385px;
//   }
//   @media ${device.mobile} { 
//     top: 230px;
//     left: 300px;
//   }
// `;

export {Container, Main, Title, Text, VideoBox, Box, Tit, TitleWrap, BoxWrap};