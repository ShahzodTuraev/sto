import React from 'react'
import { Container, Main, Suptitle, Title, Text, Index, IconCheck, Wrapper, Section, SectionText,
        IconPlay, VideoMain, VideoSection, VideoText, VideoWrapper} from './style';
import { Button } from '../Generic';
import iconCheck from '../../assets/icons/check.svg';
import { useNavigate } from 'react-router-dom';
import iconPlay from '../../assets/icons/play.svg'
import ReactPlayer from 'react-player';

const Intro = () => {
  const navigate = useNavigate();
  const onClick = () => { 
    navigate('/main/form');
  }
  return (
    <Container>
      <Main>
        {window.innerWidth <= 414 ?
          <Suptitle>CEO님! 매월 받는 월세같이, 온라인 <br /> 수익을 만들어 본적 있으세요?</Suptitle> :
          <Suptitle>CEO님! 매월 받는 월세같이, 온라인 수익을 만들어 본적 있으세요?</Suptitle>
        }
        <Title>3D홈페이지 + AI마케팅</Title>
        {window.innerWidth <= 414 ?
          <Text>고객들을 3D홈페이지로 유입하여,<br/> AI마케팅으로 매출전환 시키는 것. <br /> 이것이 『메버의 특허기술』입니다.</Text> :
          <Text>고객들을 3D홈페이지로 유입하여,<br/> AI마케팅으로 매출전환 시키는 것. 이것이 『메버의 특허기술』입니다.</Text>
        }
        <Button onClick={onClick} type={'large'}>처음 오신 CEO를 위한, 서비스 견적</Button>
        <Index>의무 계약기간 없음 • 언제든지 해지 가능</Index>
        <Wrapper>
          <Section>
            <IconCheck src = {iconCheck}/>
            <SectionText>최신 AI • 3D기술을 사용하고 싶지만</SectionText>
          </Section>
          <Section>
            <IconCheck src = {iconCheck}/>
            <SectionText>익숙하지 않은 CEO들에게 쉽게 특화하여</SectionText>
          </Section>
          <Section>
            <IconCheck src = {iconCheck}/>
            <SectionText>산업별 • 업종별 비즈니스에 1:1맞춤 제공됩니다</SectionText>
          </Section>
        </Wrapper>
      </Main>
      <VideoMain>
        <VideoSection>
          <IconPlay src= {iconPlay} />
          {window.innerWidth <= 414 ?
          <VideoText>아래 비디오에서 메버에 대해 더 자세히 알아보시고 <br /> AI 3D 기술을 천천히 둘러보세요!</VideoText> :
          <VideoText>아래 비디오에서 메버에 대해 더 자세히 알아보시고 AI 3D 기술을 천천히 둘러보세요!</VideoText>
        }
        </VideoSection>
        <VideoWrapper>
          <ReactPlayer controls loop={true} playing={true} width={'100%'} height={'100%'} url={' https://youtu.be/XkDaRgIRbXQ'}></ReactPlayer>
        </VideoWrapper>
      </VideoMain>
    </Container>
  )
}

export default Intro;
