import React, {useState} from 'react';
import { Container, Main, Title, Tit, Text, VideoBox, Box, TitleWrap, BoxWrap} from './style';
import {Button} from '../Generic';
import ReactPlayer from 'react-player';
import Footer from '../Contacts';
import { useNavigate } from 'react-router-dom';
import { Bottom, BottomClose, Top, TopClose } from '../Generic/transform';

const Extend = () => {
  const navigate = useNavigate()
  const [close, setClose] = useState(false);
  const onClick = () => {
    setTimeout(()=>{navigate('/success-home')}, 420)
      setClose(true)
  }
  return (
    <Container>
      <Top/>
      <Bottom/>
      { close && <TopClose/> }
      { close && <BottomClose/> }
      <Main>
          <Tit>CEO가 비공개 하라는, 바로 그 특강!</Tit>
          <Text>책 수십권의 가치를 단 1만원에 훔쳐가기!!</Text>
          <BoxWrap>
            <TitleWrap>
              <Title>30억 빚에서 1년만에 300억 회사! <br>
              </br>『이상민 CEO』의 AI 비밀 특강</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/W4RRWqn0x6w'}></ReactPlayer>
                </VideoBox>
                {window.innerWidth <= 414 ?
                <Button onClick={onClick} type={'full'}>책10권의 가치를, <br/> 단 1만원 결제 후 바로보기</Button> :
                <Button onClick={onClick} type={'full'}>책10권의 가치를, 단 1만원 결제 후 바로보기</Button>
                }

              </Box>
            </TitleWrap>
            <TitleWrap>
              <Title>성공하는 CEO의 AI 매출 만들기<br>
              </br>『AI•3D•STO 아카데미』 10강</Title>
              <Box>
                <VideoBox>
                  <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/DSev011voNo'}></ReactPlayer>
                </VideoBox>
                <Button onClick={onClick} type={'full'}>성공하는 CEO들의 AI경영 3D마케팅 바로보기</Button>
              </Box>
            </TitleWrap>
          </BoxWrap>

          
          <Footer/>
      </Main>
    </Container>
  )
}

export default Extend;
