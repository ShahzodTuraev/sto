import styled from "styled-components";
import {ReactComponent as lock} from '../../assets/icons/lockvideo.svg';
import {ReactComponent as play} from '../../assets/icons/play-fix.svg'
import {device} from "../Generic/responsive"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient( #FFFFFF, #F4F9FC);
  @media ${device.mobile} { 
    min-width: 360px;
    margin-top: 0px;
  };

  @media ${device.tablet}{
    margin-top: 0;
  }
`;

const Down = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  @media ${device.mobile} { 
    min-width: 360px;
    padding: 50px 0;
  }
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
  width: 80%;
  @media ${device.mobile} { 
    font-size: 26px;
    line-height: 140%;
  }
`;

const SupTitle = styled.p`
  text-align: center;
  font-family: "Caveat", handwriting;
  font-weight: 700;
  line-height: 140%;
  font-size: 2.0rem;
  margin: 30px 0;
  @media ${device.mobile} { 
    font-size: 18px;
    margin: 15px 0;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-bottom: 40px;
  height: auto;
`;

const VideoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
`;

const VideoWrap = styled.div`
  border-radius: 8px;
  width: 355px;
  height: 200px;
  margin-bottom: 15px;
  position: relative;
  @media ${device.mobile} { 
    width: 335px;
    height: 190px;
  }
  `;

const Name = styled.p`
  font-weight: 900;
  line-height: 120%;
  font-size: 1.25rem;
  margin-bottom: 5px;
  @media ${device.mobile} { 
    font-size: 1rem;
  }
`;

const Position = styled.p`
  font-weight: 400;
  line-height: 140%;
  font-size: 1rem;
  color: rgb(77, 82, 86);
  @media ${device.mobile} { 
    font-size: 14px;
  }
`;

const Note = styled.p`
  font-weight: 400;
  line-height: 140%;
  font-size: 0.875rem;
  text-align: center;
  width: 85%;
  margin-bottom: 50px;
`;
const Img = styled.img`
width: 100%;
height: 100%;
cursor: pointer;
`
const Icon = styled.div``;
Icon.Lock = styled(lock)`
  display: ${({display})=>(display ? `${display}` : 'block' )};
  width:50px;
  height: 50px;
  z-index: 1;
  position: absolute;
  top: 5%;
  left: 85%;
`;
Icon.Play = styled(play)`
  width:60px;
  height: 60px;
  z-index: 1;
  position: absolute;
  top: 40%;
  left: 44%;
`;
const PdfWrap = styled.div`
  display: ${({display})=>(display ? `${display}` : 'flex' )};
  justify-content: end;
  gap: 10px;
  width: 90%;
  cursor: pointer;
  color: #1677FF;
  &:hover{
    color: #6A07D9;
  }

`
const PdfIcon = styled.img`
  width: 25px;
  height: auto;
`;

const MainVideo = styled.div`
  width: 94%;
  height: 622px;
  margin: 20px;
  border: 4px solid grey;
  @media ${device.tablet}{
    width: 88%;
    height: 407px;
    
    };
  @media ${device.mobile}{
    width: 88%;
    height: 198px;
  }
`;

export {Container,  Down, Main, Title, Img, Icon, PdfIcon,  PdfWrap, MainVideo,
        SupTitle, VideoContainer, VideoBox, VideoWrap, Name, Position, Note}