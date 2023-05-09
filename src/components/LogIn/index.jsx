import React, { useState } from 'react';
import { Container, Main, Img, Title, Wrapper,  ImgWrap, PassAlert, Text, LoginAlert } from './style';
import Logo from '../../assets/imgs/mever-logo.png'
import { Button, Input } from '../Generic';
import { useNavigate } from 'react-router-dom';
import { Bottom, BottomClose, Top, TopClose } from '../Generic/transform';


const LogIn = () => {
  const [close, setClose] = useState(false);
  const [login, setLogin] = useState('')
  const [spassword, setPassword] = useState('')
  const [passwordAlert, setPasswordAlert] = useState('')
  const [loginAlert, setLoginAlert] = useState('')

  const navigate = useNavigate();
  const onSubmit = () => {
    if(localStorage.getItem('mainEmail')){
      const email = localStorage.getItem('mainEmail')
      const password = localStorage.getItem('mainPhone')
      const data = {email, password}

    fetch('https://api.mever.me:8080/chkLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
      setTimeout(()=>{navigate('/main/lectures')}, 420)
      setClose(true)
    
    }else{
      const email = login;
      const password = spassword;
      const data = {email, password}
      if(email.includes('@', '.') 
        &&email.length > 4 
        && password.length > 7
        && /[a-zA-Z]/.test(password) === false
        ){
          fetch('https://api.mever.me:8080/chkLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
      setTimeout(()=>{navigate('/main/lectures')}, 420)
      setClose(true)
    }else{
      if(!email.includes('@', '.') || email.length < 4 ){
        setLoginAlert('입력한 로그인 확인해 주세요!')
      }
      if(password.length < 7 || /[a-zA-Z]/.test(password) === true)
        setPasswordAlert('입력한 비밀번호 확인해 주세요!')
    }
    }

  }
  const onEmailChange =(e)=>{setLogin(e.target.value)}
  const onPhoneChange =(e)=>{setPassword(e.target.value)}
  const emailFocus = () =>{setLoginAlert('')}
  const phoneFocus = () =>{setPasswordAlert('')}

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
          <div>
            <label style={{fontWeight: '600'}} htmlFor="login">로그인</label>
            <Input onFocus={emailFocus} onChange={onEmailChange} value={localStorage.getItem('mainEmail')?localStorage.getItem('mainEmail'):login} placeholder = '이메일 주소' name= 'login' />
            <LoginAlert>{loginAlert}</LoginAlert>
          </div>
          <div>
            <label style={{fontWeight: '600'}} htmlFor="password">비밀번호 (전화 번호)</label>
            <Input onFocus={phoneFocus} onChange={onPhoneChange} value={localStorage.getItem('mainPhone')?localStorage.getItem('mainPhone'):spassword} placeholder = '비밀번호' name= 'passsword' />
            <PassAlert>{passwordAlert}</PassAlert>
          </div>
          <Button type='price' onClick={onSubmit}>로그인</Button>
          <Text> 로그인 및 비밀번호가 없는 경우 사이트 첫 페이지에 이메일과 전화번호를 입력하십시오 !</Text>
        </Wrapper>
      </Main>
      
    </Container>
  )
}

export default LogIn
