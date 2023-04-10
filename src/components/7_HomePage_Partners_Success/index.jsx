import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';
import {  Container, Down, Main, Name, Note, Position, SupTitle, Title, VideoBox, VideoContainer, VideoWrap, } from './style';

import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import { useNavigate } from 'react-router-dom';
const PartnersPage = () => {
  const navigate = useNavigate();
  const onClick =()=> {
    navigate('/pricing-home');
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      
      <Down>
        <Main>
          <Title>성공한 CEO들이 절대! 공개하지 말라는..<br></br> 『AI·3D 자동수익화』 비밀</Title>
          <SupTitle>온라인 10강으로 그 가치를 바로 느껴보세요.</SupTitle>
          <VideoContainer>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[무료]수강생들의 진짜후기</Name>
              <Position>후기 : OOO,OOO,OOO CEO</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[무료]수강생들의 리얼후기</Name>
              <Position>후기 : OOO,OOO,OOO CEO</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[무료1강] 비즈니스 모델별 사례</Name>
              <Position>강사 : 이상민 CEO</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[유료2강] 비즈니스 구조·철학·특허</Name>
              <Position>강사 : 유철현 변리사, 이상민 CEO</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[유료3강] 실전 비즈니스 특강</Name>
              <Position>강사 : 이동환 CEO, 이상민 CEO</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[유료4강] 3D홈페이지 성공방정식</Name>
              <Position>강사 : 이상민 CEO</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[유료5강] 3D홈페이지 STO 실전</Name>
              <Position>강사 : 이상민 CEO</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[유료6강] 3D 마케팅 설계+스크립트 원칙 </Name>
              <Position>강사 : 이상민 CEO</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[유료7강] 3D AI 상품.서비스.캐릭터 컨텐츠</Name>
              <Position>강사 : 이상민 CEO</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[유료8강] 3D 마케팅 BM·세무·법무 AI</Name>
              <Position>강사 : 이상민 CEO</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[유료9강] 3D AI HW.SW 활용법</Name>
              <Position>강사 : 이상민 CEO</Position>
            </VideoBox>
            <VideoBox>
              <VideoWrap>
              <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/mWSVB7FMmoE'}></ReactPlayer>
              </VideoWrap>
              <Name>[유료10강] 주주들과의 협업·수료식 </Name>
              <Position>강사 : 이상민 CEO</Position>
            </VideoBox>
          
          </VideoContainer>
          <Note>우리의 3D마케팅은 SW IT기반기술로 운영됩니다 지금 바로 시작 해 보세요.</Note>
          <Button onClick={onClick} type={'large'}>CEO들이 제발! 공개하지 말라는 <br></br>『10강 자동수익 배우러가기』 </Button>
          <Index>10주간 시청할 수 있습니다 • 온오프라인 참여 가능</Index>
        </Main> 
      </Down>
      
    </Container>
    

  )
}

export default PartnersPage;

