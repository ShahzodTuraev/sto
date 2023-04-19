import React, {useEffect} from 'react';
import { Container, Main, Title, Text, Wrapper, Coution, Icon, CardBox, MainWrapper, TextBox, Head, IconWrap, IconText, Awrap, Img } from './style';
import { Input, Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/imgs/mever-flayer.png'
import { Bottom, Top } from '../Generic/transform';

const FreeTrialStep2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <Title>간단 결제 후 시작</Title>
          <Wrapper>
            <Input placeholder='성명'/>
            <Input  placeholder='전화 번호'/>
            <Input placeholder='이메일 주소'/>
            <Input placeholder='주소'/>
            <Input placeholder='상세주소'/>
            
            <Button onClick={onClick} type={'step'}>내 무료 평가판 시작</Button>
          </Wrapper>
          <Coution>결제 후 이용 (관련 세금 별도). 대시보드 또는 이메일(sm@mever.me)을 통해 취소하십시오. 또한 서비스 약관, 개인 정보 보호 정책 및 제휴 계약에 동의합니다.</Coution>
        </Main>
        <TextBox>
          <Head> 메버와 함께 성공하는 CEO가 되세요!</Head>
          <IconWrap>
            <IconWrap>
              <Icon.Check/>
              <IconText>누구나 쉽게 사용</IconText>
            </IconWrap>
            <IconWrap>
              <Icon.Check/>
              <IconText>AI 3D 신기술로</IconText>
            </IconWrap>
            <IconWrap>
              <Icon.Check/>
              <IconText>매출성장을 무한하게</IconText>
            </IconWrap>
          </IconWrap>
          <CardBox>
            <Text>계획</Text>
            <Awrap>
              <IconText>프로 월간</IconText>
              <IconText>0원 오늘 마감</IconText>
            </Awrap>
            <Text>결제 후 시작(관련 세금 별도)</Text>
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
