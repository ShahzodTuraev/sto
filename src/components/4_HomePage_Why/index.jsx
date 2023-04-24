import React from 'react';
import { Container, Introbox, IntroImg, IntroText, IntroTextBox, IntroTitle, IntroUnit, 
  Main, SubTitle, Title, CompareBox, CompareWrapper, CompareTitle, Icon, Shorts,
  IconBox, 
  QuesText,
  AdHead} from './style';
import introPic from '../../assets/imgs/pic-1.png'
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import { useNavigate } from 'react-router-dom';
const WhyFourthPage = () => {
  const navigate = useNavigate()
  const onClick =()=>{
    navigate('/form')
  }
  return (
    <Container>
      <Main>
        <Introbox>
          <IntroTextBox>
            <IntroTitle>그렇다면, 왜 메버인가요?</IntroTitle>
            <IntroText>대부분의 웹사이트 99.9%는 카달로그식 정보 전달형에 불과합니다.</IntroText>
            <IntroUnit>하지만 "메버"는 설계부터가 다릅니다.</IntroUnit>
            <IntroText>메버는 꿈의고객을 3D 웹사이트로 유입시켜서 그들이 AI 마케팅에 자신도 모르게 지출하게 만드는 "월세를 받는 빌딩"과 같은 방식입니다!</IntroText>
          </IntroTextBox>
          <IntroImg src={introPic}></IntroImg>
        </Introbox>
        <Title>메버는 온라인 성공의 비밀입니다</Title>
        <SubTitle>수익을 내지 못하는 전세계 19억 2,999만 9,999개의 웹사이트와 수익을 창출하는 0.000000002%의 3D홈페이지는 차원이 다릅니다!</SubTitle>
        <CompareWrapper>
          <CompareBox>
            <CompareTitle>메버가 없을때?</CompareTitle>
            <IconBox>
              <Icon.Cancel/>
              <Shorts>웹 고객이 없습니다</Shorts>
            </IconBox>
            <IconBox>
              <Icon.Cancel/>
              <Shorts>웹 판매가 없습니다</Shorts>
            </IconBox>
            <IconBox>
              <Icon.Cancel/>
              <Shorts>혼란스러운 정보만 가득한 웹입니다</Shorts>
            </IconBox>
            <IconBox>
              <Icon.Cancel/>
              <Shorts>파리만 날리는 웹입니다</Shorts>
            </IconBox>
          </CompareBox>
          <CompareBox>
            <CompareTitle>메버와 함께라면!</CompareTitle>
            <IconBox>
              <Icon.Check/>
              <Shorts>고객의 웹 유입이 지속됩니다</Shorts>
            </IconBox>
            <IconBox>
              <Icon.Check/>
              <Shorts>간편한 웹 구매 과정이 제공됩니다</Shorts>
            </IconBox>
            <IconBox>
              <Icon.Check/>
              <Shorts>웹 판매 기회가 증가합니다</Shorts>
            </IconBox>
            <IconBox>
              <Icon.Check/>
              <Shorts>월세받는 빌딩 이상의 가치가됩니다</Shorts>
            </IconBox>
          </CompareBox>
        </CompareWrapper>
        <QuesText>월세받는 빌딩을 좋아하시나요?</QuesText>
        <AdHead>그렇다면, 지금 바로 메버에서 상담 신청 해 보세요!</AdHead>
        <Button onClick={onClick} type={'large'}>처음 오신 CEO를 위한, 서비스 견적</Button>
        <Index>약정 계약 없음 • 언제든지 해지 가능</Index>
      </Main> 
    </Container>

  )
}

export default WhyFourthPage;
