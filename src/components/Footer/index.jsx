import React from 'react';
import { Box, Box2, Box3, BoxWrap, Contact, Container, Icon, Img, Li, Main, Text, Wrapper,} from './style';
import logo from '../../assets/imgs/mever-logo.png'
import sns1 from '../../assets/icons/sns1.png'
import sns2 from '../../assets/icons/sns2.png'
import sns3 from '../../assets/icons/sns3.png'
import sns4 from '../../assets/icons/sns4.png'
import sns5 from '../../assets/icons/sns5.png'
import sns6 from '../../assets/icons/sns6.png'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const onDirect1 =() => {
    navigate('/main')
  }
  const onDirect2 =() => {
    navigate('/next-step')
  }
  const onDirect3 =() => {
    navigate('/pricing-home')
  }
  const onDirect4 =() => {
    navigate('/success-home')
  }
  const onClick1 = () => {
    window.location.href = 'https://www.youtube.com/channel/UCXHaChrER0XYPrR43S7mx5A';
  }
  const onClick2 = () => {
    window.location.href = '';
  }
  const onClick3 = () => {
    window.location.href = 'https://www.instagram.com/official_mever/';
  }
  const onClick4 = () => {
    window.location.href = 'https://www.facebook.com/people/%EB%A9%94%EB%B2%84/100088805142901/';
  }
  const onClick5 = () => {
    window.location.href = 'https://blog.naver.com/mevershop';
  }
  const onClick6 = () => {
    window.location.href = 'https://pf.kakao.com/_cLNxib';
  }

  return (
    <Container>
      <Main>
        <Wrapper>
          <Box>
            <Img src = {logo} />
            <BoxWrap>
              <Contact borderRight = '1px solid #000' >
                <Text>(주)메버</Text>
                <Text>대표 이사민</Text>
                <Text>사업자 번호 653-81-02062</Text>
              </Contact>
              <Contact>
                <Text>1688-9050</Text>
                <Text>sm@mever.me</Text>
                <Text>서울특별시 강남대로 373 홍우빌딩</Text>
              </Contact>
            </BoxWrap>
        </Box>
        <Box2>
          <Li onClick={onDirect1}>3분뉴스 • 3분계발 </Li>
          <Li onClick={onDirect2}>메버 스토리</Li>
          <Li onClick={onDirect3}>서비스 견적</Li>
          <Li onClick={onDirect4}>1억•10억•100억 매출 도전</Li>
        </Box2>
        </Wrapper>
            <Box3>
              <Icon onClick={onClick1} src={sns1}/>
              <Icon onClick={onClick2} src={sns2}/>
              <Icon onClick={onClick3} src={sns3}/>
              <Icon onClick={onClick4} src={sns4}/>
              <Icon onClick={onClick5} src={sns5}/>
              <Icon onClick={onClick6} src={sns6}/>
            </Box3>
        
          
          
      </Main>

      
    </Container>
    

  )
}

export default Footer;

