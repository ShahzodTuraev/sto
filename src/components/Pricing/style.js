import styled from "styled-components";
import {device} from "../Generic/responsive"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom , #F5F9FC, #FFFFFF);
  
  `;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  max-width: 1170px;
  width: 100%;
`;
const Heading = styled.h1`
  line-height: 120%;
  font-weight: 900;
  font-size: 3.25rem;
  width: 80%;
  text-align: center;
  @media ${device.tablet} { 
    font-size: 2.6rem;
  };
  @media ${device.mobile} { 
    font-size: 2rem;
  }
`;
const SupHeading = styled.p`
  margin: 15px 0;
  color: #3f3f3f;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  @media ${device.tablet} { 
    font-size: 22px;
  };
  @media ${device.mobile} { 
    font-size: 16px;
  }
`;

const Title = styled.h1`
  line-height: 120%;
  font-weight: 700; 
  font-size: 32px; 
  text-align: center;
  @media ${device.mobile} { 
    font-size: 26px;
  }
`;
const LineText =styled.p`
  color: rgb(77, 82, 86);
  font-weight: 400;
  line-height: 150%;
  font-size: 16px;
  text-align: center;
  text-decoration: line-through;
  text-decoration-color: rgba(217, 98, 85, 0.7);
  text-decoration-thickness: 2px;

`;

const Text = styled.p`
  color: rgb(77, 82, 86);
  font-weight: 400;
  line-height: 150%;
  font-size: 13px;
  margin: 10px 0;
  text-align: center;
`;
const Wrap = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  height: auto;
  gap: 10px;
  @media ${device.tablet} { 
    flex-direction: column;
  };
  @media ${device.mobile} { 
    flex-direction: column;
  }
  `;

const Plan = styled.p`
  text-align: center;
  font-weight: 900;
  font-size: 1rem;
  padding: 10px 20px;
  margin-bottom: 2rem;
  cursor: pointer;
  border-bottom: ${({borderBottom})=>(borderBottom ? `${borderBottom}` : 'none')};

`;

const Box = styled.div`
  padding: 50px;
  width: 360px;
  border-radius: 9px;
  height: auto;
  background: ${({backGround})=>(backGround ? `${backGround}` : '#FFFFFF')};
  box-shadow: 0px 10px 40px 0px rgba(170, 183, 199, 0.3);
  transition: all 0.2s;
  @media ${device.tablet} { 
    width: 40rem
  }
  @media ${device.mobile} { 
    width: 360px;
  }
`;

const NoteWrap = styled.div`
  margin: 20px 0;
`
const Note = styled.p`
  text-align: left;
  color : ${({color})=>(color ? `${color}` : 'var(--color-6Z-dzM8-1);')};
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 180%;
  font-size: 0.9375rem;
`;

export {Container, Main, Title, LineText, Text, Heading, SupHeading, Plan, Wrapper, Wrap, Box, Note, NoteWrap};