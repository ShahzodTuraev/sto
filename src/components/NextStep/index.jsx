import React, {useState, useEffect} from 'react';
import { Container, Main, Title, Tit, Text, VideoBox, Box, TitleWrap, BoxWrap} from './style';
import {Button} from '../Generic';
import ReactPlayer from 'react-player';
import Footer from '../Contacts';
import { useNavigate } from 'react-router-dom';
import { Bottom, BottomClose, Top, TopClose } from '../Generic/transform';

const FreeTrialStep1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate()
  const onClick = () => {
    setTimeout(()=>{navigate('/extend')}, 420)
      setClose(true)
  }
  const [close, setClose] = useState(false);
  const onClick2 = () => {
      navigate('/story')
  }
  return (
    <Container>
      <Top/>
      <Bottom/>
      { close && <TopClose/> }
      { close && <BottomClose/> }
      <Main>
          <Tit>『CEO뉴스레터』 <br /> 회원을 축하합니다!</Tit>
          <Text>약속대로, 최신 AI기반 경제·경영·노하우 등<br /> 주요뉴스를 매일 3분요약 영상으로 보내드립니다.</Text>
          
          <Title>회원 축하기념, <br /> 당일만 드리는 특별 혜택! </Title>
          <BoxWrap>
            <TitleWrap>
              <Title>30억 빚을 300억 만든, CEO비밀!</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer controls width={'100%'} height={'100%'} url={'https://youtu.be/O8bvGKUs5Dg'}></ReactPlayer>
                </VideoBox>
                {window.innerWidth <= 414 ?
                <Button onClick={onClick} type={'full'}>책10권 이상의 노하우 비밀특강! <br /> 『 1만원 』에 바로보기</Button>:
                <Button onClick={onClick} type={'full'}>책10권 이상의 노하우 비밀특강! 『 1만원 』에 바로보기</Button>
                }
              </Box>
            </TitleWrap>
            <TitleWrap>
              <Title>AI 영상 컨텐츠, 쉽게 만들어보기!</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer controls width={'100%'} height={'100%'} url={'https://youtu.be/Cntug-WOVcc'}></ReactPlayer>
                </VideoBox>
                {window.innerWidth <= 414 ?
                <Button onClick={onClick2} type={'full'}> 원하는 영상 "텍스트"만 입력시, <br /> 1분에 『 1만원 』 만들어보기</Button>:
                <Button onClick={onClick2} type={'full'}> 원하는 영상 "텍스트"만 입력시, 1분에 『 1만원 』 만들어보기</Button>
                }
              
              </Box>
            </TitleWrap>
          </BoxWrap>
          <Footer/>
      </Main>
    </Container>
  )
}

export default FreeTrialStep1
