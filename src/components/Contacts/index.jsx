import React, {useState} from 'react';
import axios from 'axios';
import { Alert, Container, Iconbox, Main, Img, InputWrap, Button, AnswerBox, Answer} from './style';
import sns1 from '../../assets/imgs/sns-1.jpg';
import sns2 from '../../assets/imgs/sns-2.png';
import sns3 from '../../assets/imgs/sns-3.png';
import sns4 from '../../assets/imgs/sns-4.png';
import sns5 from '../../assets/imgs/sns-5.png';
import sns6 from '../../assets/imgs/sns-6.jpg';
import sns7 from '../../assets/imgs/sns-7.png';
import sns8 from '../../assets/imgs/sns-8.png';
import {Input, Spin} from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 36,
      display: 'flex',
      justifyContent: 'center'
    }}
    spin
  />
);

const Footer = () => {
  const onClick1 = () => {
    window.open('https://www.youtube.com/channel/UCXHaChrER0XYPrR43S7mx5A', '_blank');
  }
  const onClick2 = () => {
    window.open('https://www.tiktok.com/@official_mever?is_from_webapp=1&sender_device=pc', '_blank');
  }
  const onClick3 = () => {
    window.open('https://www.instagram.com/official_mever/', '_blank');
  }
  const onClick4 = () => {
    window.open('https://www.facebook.com/people/%EB%A9%94%EB%B2%84/100088805142901/', '_blank');
  }
  const onClick5 = () => {
    window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%A9%94%EB%B2%84', '_blank');
  }
  const onClick6 = () => {
    window.open('https://pf.kakao.com/_cLNxib', '_blank');
  }
  const onClick7 = () => {
    window.open('https://www.google.com/search?q=%EB%A9%94%EB%B2%84&source=hp&ei=wu5FZOG5IoaF2roPnb-f8AU&iflsig=AOEireoAAAAAZEX80gTo4vi3L7g-pHphKOoUlqv27rzb&ved=0ahUKEwjhosGzwcH-AhWGglYBHZ3fB14Q4dUDCAs&uact=5&oq=%EB%A9%94%EB%B2%84&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyCwguEIAEEMcBEK8BMgcIABCABBAKMg0IABCABBCxAxCDARAKMgYIABAKEAMyDQgAEIAEELEDEIMBEAoyBwgAEIAEEAoyBwgAEIAEEApQughYughgsBBoAXAAeACAAXGIAXGSAQMwLjGYAQCgAQKgAQGwAQA&sclient=gws-wiz', '_blank');
  }
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");
  const HTTP = 'http://localhost:8020/chat'

  const handleSubmit = (e) => {
    e.preventDefault();
    if(prompt.length > 0){
      setPrompt('')
      setResponse('')
      setQuestion(prompt)
  
      // Send a request to the server with the prompt
      setLoading(true)
      axios.post(`${HTTP}`, { prompt })
        .then((res) =>{ 
          // Update the response state with the server's response
          setResponse(res.data);
          setLoading(false)
        })
        .catch((error) => {
          console.error(error);
        });
    }else{
      setAlert("질문을 입력하세요")
    }
  };

  const handleChange = (e) =>{
    setPrompt(e.target.value);
    prompt.length >= 0  && setAlert('')
  }

  return (
    <Container>
      <Main>
        <Iconbox>
          <Img onClick={onClick1} src={sns1}/>
          <Img onClick={onClick2} src={sns2}/>
          <Img onClick={onClick3} src={sns3}/>
          <Img onClick={onClick4} src={sns4}/>
          <Img onClick={onClick5} src={sns5}/>
          <Img onClick={onClick6} src={sns6}/>
          <Img onClick={onClick7} src={sns7}/>
        </Iconbox>
        
        <InputWrap onSubmit={handleSubmit}>
          <Input
            style={{fontSize: '18px'}}
            type="text"
            value={prompt}
            onChange={handleChange}
            placeholder='ask ChatGPT...'
          />
          <Button><Img type="submit" src={sns8}/></Button>
          
        </InputWrap>
      <AnswerBox>
        <InputWrap>
          <Answer><b>{question}</b></Answer>
          {loading && <Spin indicator={antIcon} />}
          <Alert>{alert}</Alert>

        </InputWrap>
        <Answer>{response}</Answer>
      </AnswerBox>

      </Main>
    </Container>
  )
}

export default Footer;
