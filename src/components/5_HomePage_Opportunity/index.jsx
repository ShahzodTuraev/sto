import React from 'react';
import { Container, Introbox, IntroImg, IntroText, IntroTextBox, IntroTitle,  
  Main,  QuesText, AdHead, Title, Icon, FunctionCard, Suptitle, BoxUnit,
  CanWrapper, CanText, CanImgBox, CanImg, ResponsiveImg, TabletImg, BrandImg} from './style';
import introPic from '../../assets/imgs/pic-2.png';
import canImg_1 from '../../assets/imgs/pic-3.png';
import brands from '../../assets/imgs/brands.png';
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import { useNavigate } from 'react-router-dom';

const OpportunityPage = () => {
  const navigate = useNavigate();
  const onClick = () =>{
    navigate('/form')
  }
  return (
    <Container>
      <Main>
        <Introbox>
          <IntroImg src={introPic}></IntroImg>
          <IntroTextBox>
            <IntroTitle>메버는 "3D홈페이지 • AI마케팅"을 통해 고객들이 여러분을 찾아오도록 도와줍니다!</IntroTitle>
            <ResponsiveImg src={introPic}/>
            <TabletImg src={introPic}/>
            <IntroText>우리는 최초의 웹3D 빌더이자 페이스북, 구글, 유튜브, 인스타그램 또는 틱톡과 같은 사이트에서 사용자를 모아서 당신의 상점으로 이끌어주는 AI마케팅 플랫폼이기도 합니다!
            </IntroText>
            <IntroText>만약 당신이 페이스북, 구글, 유튜브, 인스타그램, 혹은 틱톡에서 광고를 클릭해본 적이 있다면, 그 광고를 만든 사람 중 한팀이 우리 일 수 있습니다!</IntroText>
            <IntroText>그리고 지금까지 경험하지 못한 3D홈페이지에서, 높은 매출 전환률과 체류시간을 경험할 수 있습니다! 그리고 이는 다양한 특허망을 갖고 있는 메버만이 할 수 있습니다. </IntroText>
          </IntroTextBox>
        </Introbox>
        <QuesText>메버가 하는 일은 3D홈페이지 • AI마케팅이 전부는 아닙니다.</QuesText>
        <Title>메버는 대한민국 CEO들이 글로벌 온라인 경쟁력을 갖추고 전세계적인 영향력을 행사할 수 있게 돕습니다. </Title>
        <AdHead>CEO를 위한 모든 것!</AdHead>
        <Icon.Down/>

        <FunctionCard>
          <IntroTextBox>
            <Suptitle>메버는...</Suptitle>
            <IntroTitle>당신의 3D웹사이트•AI콘텐츠</IntroTitle>
            <IntroText>웹사이트나 콘텐츠를 만드는 것은 오랜 시간과 비용이 들어갑니다. 하지만, 이제는 단 몇시간, 몇분만에 해결할 수 있습니다!</IntroText>
            <BoxUnit>메버을 사용하면...</BoxUnit>
            <CanWrapper>
              <Icon.Right/>
              <CanText>3D웹을 고객에게 제공하여 매우 색다른 경험을 선사하여, 더 많은 전환과 판매를 이룰 수 있습니다</CanText>
            </CanWrapper>
            <CanWrapper>
              <Icon.Right/>
              <CanText>CEO업종별 맞춤화가 가능하며, AI 3D기술에 관계없이 누구나 사용할 수 있는 자동 솔루션을 추구합니다</CanText>
            </CanWrapper>
            <CanWrapper>
              <Icon.Right/>
              <CanText>내용을 입력하고 버튼을 누르면 즉시 사용 가능한 3D홈페이지와 AI컨텐츠를 경험하실 수 있습니다</CanText>
            </CanWrapper>
            <CanText>메버는 이 회사들과 함께합니다:</CanText>
            <BrandImg src={brands}/>
          </IntroTextBox>
          <CanImgBox>
            <CanImg src={canImg_1}/> 
            <Button onClick={onClick} >처음 오신 CEO를 위한, 서비스 견적</Button>
            <Index>약정 계약 없음 • 언제든지 해지 가능</Index>
          </CanImgBox>
        </FunctionCard>

      </Main> 
    </Container>
    

  )
}

export default OpportunityPage;
