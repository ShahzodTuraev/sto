import React, {useState,} from 'react';
import { Container, Main, Title, Text, VideoBox, InputBox, InputTitle, Wrapper, InputWrap, } from './style';
import {Button, Input} from '../Generic';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Checkbox } from 'antd';
import { message } from 'antd';
import Footer from '../Contacts'


const Pricing = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const warning = () => {
    message.warning('답변 받으실 이메일을 입력해주세요.');
  };

  const onClick = () => {
    if (inputValue.length !== 0 && inputValue1.length !== 0 && isChecked) {
      navigate('/next-step')
    }else{
      warning()
      

    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const onChange = (event) => {
    setInputValue1(event.target.value);
  };
  const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  
  

  return (
    <Container>
      <Main>
          <Title>"쩐의 미래" 3분뉴스</Title>
          <Text>오늘자 AI·3D·STO 뉴스를</Text>
          <Text>3분 요약하여 "무료"로 보내드립니다</Text>
          <VideoBox>
            <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/tkOcbaGJshk'}></ReactPlayer>
          </VideoBox>
          <InputBox>
            <InputTitle>뉴스 받을 메일주소 입력란</InputTitle>
            <Wrapper>
              <InputWrap>
                <Input onChange={handleChange} placeholder='이메일 주소 입력(필수)'/>
                <Input onChange={onChange} placeholder='핸드폰번호'/>
              </InputWrap>
              <Button onClick={onClick} type={'sto'}>무료뉴스 신청하기</Button>
            </Wrapper>
            <Checkbox checked={isChecked} onChange={handleCheckboxChange} className='checkbox'>개인정보활용 동의</Checkbox>
          </InputBox>
          <Footer/>
      </Main>
    </Container>

  )
}

export default Pricing
