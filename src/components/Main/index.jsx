import React, {useState, useEffect, useRef} from 'react';
import { Container, Main, Title, Text, VideoBox, AlertCheck, AlertEmail, AlertTel, InputBox, InputTitle, Wrapper, InputWrap, } from './style';
import {Button, Input} from '../Generic';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Checkbox } from 'antd';
import Contact from '../Contacts'
// import axios from 'axios';
import { FirstBottom, BottomClose, FirstTop, TopClose } from '../Generic/transform';

const MainP = () => {
  // const [playlist, setPlaylist] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId={UCXHaChrER0XYPrR43S7mx5A}&maxResults=50&key={AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8}"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setPlaylist(res.data.items);
  //     })
  //     .catch(() => {});
  // }, []);
  // console.log(playlist);
  
  const [data, setData] = useState({
    Email: '',
    Phone: '',
  });
  const api_post = () => {
    fetch('https://api.mever.me/api/v1/req2', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      // .then(result => {
      //   if (result.ErrorCode === 0) {
      //     alert('문의가 접수되었습니다.');
      //   } else {
      //     alert('시스템오류, 관리자에게 문의하십시오.');
      //   }
      // })
      .catch(error => {
        console.error(error);
      });
  };
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [displayEmail, setDisplayEmail] = useState('');
  const [displayTel, setDisplayTel] = useState('');
  const [displayCheck, setDisplayCheck] = useState('');
  const [close, setClose] = useState(false)
  const onSubmit = (event) => {
    if (data.Email.includes('@', '.') &&
        (data.Phone.length> 10 && /[a-zA-Z]/.test(data.Phone) === false) &&
        isChecked) {
          setTimeout(()=>{navigate('/next-step')}, 420)
          setClose(true)

      event.preventDefault();
    api_post();
    
    }else{
      if(!isChecked){
        setDisplayCheck('동이 해 주세요!')
      }
    };
    if(!data.Email.includes('@', '.')){
      setDisplayEmail('입력한 이메일 주소 확인해 주세요!');
    };
    if(data.Phone.length < 10 || /[a-zA-Z]/.test(data.Phone) === true ){
      setDisplayTel('입력한 전화번호 확인해 주세요!');
    }

  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      if(event.target.checked === true ){
        setDisplayCheck('');
      }
    };
    const playerRef = useRef(null);

    useEffect(() => {
      const hasPlayedBefore = localStorage.getItem('hasPlayedBefore');
  
      if (!hasPlayedBefore) {
        playerRef.current?.getInternalPlayer()?.playVideo();
        localStorage.setItem('hasPlayedBefore', true);
      }
    }, []);

    const FocusEmail = () => {
      setDisplayEmail('')
    };
    const FocusTel = () => {
      setDisplayTel('')
    }
  

  return (
    <Container>
      <FirstTop/>
      <FirstBottom/>
      { close && <TopClose/> }
      { close && <BottomClose/> }
      <Main>
          <Title>  CEO를 위한  『3분  뉴스』</Title>
          <Text>앞서가는 CEO를 위해! </Text>
          <Text>AI를 활용한 경영·마케팅·수익모델 관련 <br />
                뉴스를 매일 3분 요약하여 “무료”로 보내드립니다.
          </Text>
          <VideoBox>
            <ReactPlayer  ref={playerRef} playing={true} width={'100%'} height={'100%'} url={'https://youtu.be/_ZGGYdqdbCo'}></ReactPlayer>
          </VideoBox>
          <InputBox>
            <InputTitle>뉴스 받을 '메일 핸드폰 번호' 입력란</InputTitle>
            <Wrapper>
                <InputWrap>
                
                <Input 
                  type="email"
                  name="Email"
                  value={data.Email} 
                  onChange={handleChange}
                  onFocus={FocusEmail}
                  placeholder='이메일 (예)sm@mever.me' 
                />
                <AlertEmail>{displayEmail}</AlertEmail>
                <Input
                  type="tel"
                  name="Phone"
                  value={data.Phone}
                  onChange={handleChange}
                  onFocus={FocusTel}
                  placeholder='핸드폰번호 (예)010-1234-5678'
                />
                <AlertTel>{displayTel}</AlertTel>
                </InputWrap>
                  <Checkbox 
                    
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                    className='checkbox'
                  >개인정보활용 동의</Checkbox>
                <AlertCheck>{displayCheck}</AlertCheck> 
              <Button type='main' onClick={onSubmit} >무료 뉴스 신청하기</Button>
            </Wrapper>
          </InputBox>
          <Contact/>
      </Main>
    </Container>

  )
}

export default MainP
