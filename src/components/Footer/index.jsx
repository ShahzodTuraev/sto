import React from 'react';
import Contacts from '../Contacts'
import { Box, Box2, BoxWrap, Contact, Container, Img, Li, Main, Text, Wrapper,} from './style';
import logo from '../../assets/imgs/mever-logo.png';

import { useNavigate } from 'react-router-dom';

const Footer = () => {
  
  const navigate = useNavigate();
  
  // navbar texts' navigation pathes
  const onDirect1 =() => {
    navigate('/')
  }
  const onDirect2 =() => {
    navigate('/story')
  }
  const onDirect3 =() => {
    navigate('/form')
  }
  const onDirect4 =() => {
    navigate('/form')
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
                <Text>대표 이상민</Text>
                <Text>사업자 번호 653-81-02062</Text>
              </Contact>
              <Contact>
                <Text> 1688-9050 </Text>
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
      </Main>
      <Contacts/>

      
    </Container>
    

  )
}

export default Footer;

