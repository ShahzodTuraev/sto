import styled from "styled-components";
import {device} from '../Generic/responsive';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top: 1px solid #EBECEF;
  background: linear-gradient(to right bottom, #F5F9FC, #FFFFFF);
  padding: 40px 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  @media ${device.tablet}{
    flex-direction: column;
    gap: 20px;
    align-items: center;
  };
  @media ${device.mobile} { 
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const BoxWrap = styled.div`
  display: flex;
  @media ${device.mobile}{
    flex-direction: column;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${device.tablet}{
    flex-direction: column;
    align-items: center;
  }
  @media ${device.mobile}{
    flex-direction: column;
    align-items: center;
  }
`;
const Icon = styled.img``;
const Img = styled.img`
  width: 110px;
  height:40px;
  margin-bottom: 20px;
  margin-right: 50px;
  cursor: pointer;
  @media ${device.mobile}{
    margin-right: 30px;
  }
  `;
  
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: ${({borderRight})=>(borderRight ? `${borderRight}` : 'none')};
  padding: 0 30px;
  @media ${device.mobile}{
    border-right: none
  }
`;
const Text = styled.div`
  font-size: 1rem;
`;
const Box2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 40%;
  @media ${device.tablet}{
    width: 75%;
  }
  @media ${device.mobile}{
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 90%;
  }
  
`;
const Li = styled.p`
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    color: #1CBCFF;
  };
`;
const Box3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-top: 50px;
  @media ${device.mobile}{
    width: 80%;
  }
`;
export {Container, Main, Img, Wrapper, Box, Box3, Contact, Text, BoxWrap, Box2, Li, Icon }