import React from 'react';
import { Container, Main, Title, Text, Wrapper, Coution, Icon, CardBox, MainWrapper, TextBox, Head, IconWrap, IconText, Awrap, Img } from './style';
import { Input, Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/imgs/mever-flayer.png'
import { Bottom, Top } from '../Generic/transform';

const FreeTrialStep2 = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/pro-monthly/step-2')
  }
  return (
    <Container>
      <Top/>
      <Bottom/>
      <Img src={Logo}/>
      <MainWrapper>
        <Main>
          <Title>무료 14일 평가판 시작</Title>
          <Wrapper>
            <Input placeholder='성명'/>
            <Input  placeholder='전화 번호'/>
            <Input placeholder='이메일 주소'/>
            <Input placeholder='주소'/>
            <Input placeholder='상세주소'/>
            
            <Button onClick={onClick} type={'step'}>내 무료 평가판 시작</Button>
          </Wrapper>
          <Coution>오늘부터 14일 무료 이용 후 월 $197(관련 세금 별도). 대시보드 또는 이메일(support@clickfunnels.com)을 통해 취소하십시오. 또한 서비스 약관, 개인 정보 보호 정책 및 제휴 계약에 동의합니다.</Coution>
        </Main>
        <TextBox>
          <Head> ClickFunnels를 사용하여 제품과 메시지를 쉽게 세상에 알리는 100,000명 이상의 기업가와 함께하세요!</Head>
          <IconWrap>
            <IconWrap>
              <Icon.Check/>
              <IconText>사용하기 쉬운</IconText>
            </IconWrap>
            <IconWrap>
              <Icon.Check/>
              <IconText>엄청나게 강력한</IconText>
            </IconWrap>
            <IconWrap>
              <Icon.Check/>
              <IconText>성장에 이상적</IconText>
            </IconWrap>
          </IconWrap>
          <CardBox>
            <Text>계획</Text>
            <Awrap>
              <IconText>프로 월간</IconText>
              <IconText>$0 오늘 마감</IconText>
            </Awrap>
            <Text>평가판 사용 후 $197/m(관련 세금 별도)</Text>
          </CardBox>
          <IconWrap>
            <IconWrap>
              <Icon.Secure/>
              <Text>안전한 SSL 결제 보안 서버에 저장된 결제 데이터</Text>
            </IconWrap>
            <IconWrap>
              <Icon.Guarantee/>
              <Text>환불 보증 평가판 종료 후 30일 동안</Text>
            </IconWrap>
          </IconWrap>
        </TextBox>
      </MainWrapper>
      
    </Container>
  )
}

export default FreeTrialStep2
