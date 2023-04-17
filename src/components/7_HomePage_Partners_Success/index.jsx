import React, {useEffect, useState} from 'react';
import {  Container, Down, Icon, Img, Main, Name, Note, PdfIcon, PdfWrap, Position, SupTitle, Title, VideoBox, VideoContainer, VideoWrap, } from './style';
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import { useNavigate } from 'react-router-dom';
import { videoData } from './videoData';
import pdf from '../../assets/imgs/pdf.png'
import { Bottom, BottomClose, Top, TopClose } from '../Generic/transform';

const PartnersPage = () => {
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  const onClick =()=> {
    setTimeout(()=>{navigate('/pricing-home')}, 420)
      setClose(true)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Container>
      <Top/>
      <Bottom/>
      { close && <TopClose/> }
      { close && <BottomClose/> }
      <Down>
        <Main>
          <Title>CEO들이 공개하지 말라는..<br></br> 『AI·3D 자동수익화』 비밀</Title>
          <SupTitle>10강으로 가치를 바로 느껴보세요.</SupTitle>
          <VideoContainer>
            {videoData.map((video)=>(
              <VideoBox onClick={onClick}  key={video.id}>
              <VideoWrap>
              <Img src={video.imgSrc}/>
                <Icon.Lock display = {video.type === 'free' ? 'none': 'block'}/>
              </VideoWrap>
              <Name>{video.title} </Name>
              <Position>{video.note}</Position>
              <PdfWrap display = {video.type === 'free' ? 'none': 'flex'}>
                Download PDF 
                <PdfIcon src={pdf}/>
              </PdfWrap>
            </VideoBox>
            ))
            }
          </VideoContainer>
          <Note>3D홈페이지 3D마케팅 AI컨텐츠는 IT기술로 운영됩니다. 지금 바로 시작 해 보세요.</Note>
          <Button onClick={onClick} type={'large'}>CEO들이 제발! 공개하지 말라는 <br></br>『10강 자동수익 배우러가기』 </Button>
          <Index>10주간 시청할 수 있습니다 • 온오프라인 참여 가능</Index>
        </Main> 
      </Down>
    </Container>
  )
}

export default PartnersPage;

