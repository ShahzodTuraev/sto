import React, { useState } from 'react';
import { Container, Main, Img, Title, Wrapper, Section, Text, Click, ImgWrap } from './style';
import Logo from '../../assets/imgs/mever-logo.png'
import { Button, Input } from '../Generic';
import { Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Bottom, BottomClose, Top, TopClose } from '../Generic/transform';


const LogIn = () => {
  const [close, setClose] = useState(false);
  // const [alert, setAlert] = useState('')
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const navigate = useNavigate();
  const onClick = () => {
    setTimeout(()=>{navigate('/form')}, 420)
    setClose(true)
  }
  const onSubmit = () => {
    
    setTimeout(()=>{navigate('/lectures')}, 420)
    setClose(true)
  }
  return (
    <Container>
      <Top/>
      <Bottom/>
      { close && <TopClose/> }
      { close && <BottomClose/> }
      <Main>
        <ImgWrap>
          <Img src={Logo}/>
        </ImgWrap>
        <Title>계정에 로그인</Title>
        <Wrapper>
          <Input placeholder = '이메일 주소' />
        <Input placeholder = '비밀번호' />
        <Button type='price' onClick={onSubmit}>로그인</Button>
        </Wrapper>
        <Section>
          <Checkbox onChange={onChange}>날 기억해</Checkbox>
          <Text>비밀번호 만들기 <br /> (또는 비밀번호 재설정)</Text>
        </Section>
        <Click onClick={onClick}>
          <Text fontWeight='700'>계정이 없습니까?</Text>
          <Text fontWeight='700' color='#106BF4'>계정 만들기</Text>
        </Click>




      </Main>
      
    </Container>
  )
}

export default LogIn
