import React from 'react';
import { Container, Main, SectionTop, IconBox, Icon, Text, Title,  StarWrap, SubTitle, ClientCard, ClientImg, Wrapper, ClientName, ClientType, ClientText, LogoImg, LogoTitle, LogoText } from './style';
import client1 from '../../assets/imgs/client-1.jpg';
import client2 from '../../assets/imgs/client-2.jpg';
import client3 from '../../assets/imgs/client-3.jpg';
import logo from '../../assets/imgs/5-stars.png';
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import { useNavigate } from 'react-router-dom';

const EntrepreneursHomePage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/form/step-1')
  }
  return (
    <Container>
      <Main>
        <SectionTop>
          <IconBox>
            <Icon.Template/>
            <Text>검증된 3D홈페이지 <br /> AI마케팅 알고리즘</Text>
          </IconBox>
          <IconBox>
            <Icon.Drag/>
            <Text>AI 자동 <br /> 영상 편집기</Text>
          </IconBox>
          <IconBox>
            <Icon.Cart/>
            <Text>유입율 <br /> 전환율 확인</Text>
          </IconBox>
          <IconBox>
            <Icon.Courses/>
            <Text>CEO 지역별 <br /> 교육과정•매출도전</Text>
          </IconBox>
          <IconBox>
            <Icon.Analytics/>
            <Text>AI데이터 분석<br/>및 인사이트</Text>
          </IconBox>
          <IconBox>
            <Icon.Testing/>
            <Text>업종별 리딩 <br/> 경쟁사 압도</Text>
          </IconBox>
        </SectionTop>
        <StarWrap>
          <Icon.Star/>
          <Icon.Star/>
          <Icon.Star/>
          <Icon.Star/>
          <Icon.Star/>
        </StarWrap>
        <Title>성공하는 CEO들은 『메버』를 사용합니다</Title>
        <SubTitle>직접 검증하세요...</SubTitle>

        <Wrapper>
          <ClientCard>
            <ClientImg src= {client1}/>
           <ClientName>건설회사 엘림(주) 김남재 CEO</ClientName>
            <ClientType>1.10.100억 매출 도전자</ClientType>
            <ClientText>"의.식.주 어떤 비즈니스든 CEO가 일부라도 지분을 가지고 있다면, 반드시 3D홈페이지, 3D마케팅, AI컨텐츠가 필요합니다. 메버는 <b>복잡한 홈페이지 제작과정을 직관적으로 체험하게 하고, 고객이 원하는 것을 더 빠르게 얻을 수 있도록 도와주며 수익을 증가</b>시켜줌을 데이터로 보여줍니다."</ClientText>
             </ClientCard>
          <ClientCard>
            <ClientImg src= {client2}/>
             <ClientName>교육회사 메리사(주) 천홍숙 CEO</ClientName>
            <ClientType>3D•AI CEO 교육과정 참여자</ClientType>
            <ClientText>“<b>메버는 단순 마케팅 회사가 아닙니다! 100% IT개발자들만 있어서, 모든 것을 자동화, 시스템화로 연구개발합니다. </b> 지금까지의 온라인 마케팅의 정석을 메버만의 특허기술인 3D. AI기술로 재해석하여 성공사례를 계속해서 함께 만들어 가고 있기에 더욱 신뢰가 갑니다 ”</ClientText>
           </ClientCard>
          <ClientCard>
            <ClientImg src= {client3}/>
            <ClientName>의사•유튜버 이동환TV 이동환 CEO</ClientName>
            <ClientType>3D홈페이지.3D마케팅 의뢰사</ClientType>
            <ClientText>“유튜버인 제가 3D홈페이지, 3D마케팅, AI컨텐츠 시스템에 푹 빠졌습니다.  <b>그리고 과거 1년간 벌었던 수익보다, 시작 후 1달간 번 수익이 더 많아 졌습니다.</b>지금껏 어떤 마케팅 방식보다 믿을 수 없었고, 더 높은 가치를 위해 계속해서 함께 나아가고 있습니다. CEO분들께 강추합니다"</ClientText>
          </ClientCard>
        </Wrapper>
        <Button onClick={onClick} type={'large'}>처음 오신 CEO를 위한, 서비스 견적 </Button>
        <Index>의무 계약 없음 • 언제든지 해지 가능</Index>
        <LogoImg src={logo}/>
        <LogoTitle>메버는 우수한 리뷰를 지속적으로 받고 있습니다.</LogoTitle>
        <LogoText>(235개의 리뷰를 기반으로 5점 만점에 4.6점을 받았습니다)</LogoText>
      </Main> 
    </Container>

  )
}

export default EntrepreneursHomePage;
