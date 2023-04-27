import React, {useState, useEffect} from 'react';
import { Container, Main, Title, Text, Phone, VideoBox, AlertCheck, AlertEmail, AlertTel, InputBox, InputTitle, Wrapper, InputWrap, DownTitle, } from './style';
import {Button, Input} from '../Generic';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'antd';
import Contact from '../Contacts'
import { FirstBottom, BottomClose, FirstTop, TopClose } from '../Generic/transform';
import axios from 'axios';

const MainP = () => {

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // 유튜브 API로부터 동영상 목록을 가져올 함수
    const fetchVideos = async () => {
      try {
        // API 요청에 필요한 데이터
        const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
        const playlistId = process.env.REACT_APP_YOUTUBE_PLAYLIST_ID;

        // API 요청
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=50`);

        // API 응답 결과에서 동영상 정보만 추출하여 저장
        const videosData = response.data.items.map(item => item.snippet);

        // 동영상 정보 중 업로드 날짜가 최신인 동영상을 찾아 저장
        let latestVideo = null;
          for (let i = 0; i < videosData.length; i++) {
            let video = videosData[i];
            if (!latestVideo || new Date(video.publishedAt) > new Date(latestVideo.publishedAt)) {
              latestVideo = video;
            }
          }

        // 최신 동영상 정보를 상태에 저장
        setVideos([latestVideo]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

    // 최신 동영상 정보를 화면에 표시하는 JSX
    const latestVideoId = videos[0]?.resourceId?.videoId;
    const latestVideoJSX = latestVideoId && (
        <iframe
        title='news'
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${latestVideoId}`}
        allowFullScreen
        />
    );

  const [data, setData] = useState({
    email: '',
    phone: '',
  });
  const api_post = () => {
    fetch('https://api.mever.me:8080/insMember', {
      // https://api.mever.me/api/v1/req2
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
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
    if (data.email.includes('@', '.') &&
        (data.phone.length> 10 && /[a-zA-Z]/.test(data.phone) === false) &&
        isChecked) {
          setTimeout(()=>{navigate('/next-step')}, 420)
          setClose(true)
          localStorage.setItem('email', data.email);
          localStorage.setItem('phone', data.phone);
        event.preventDefault();
      api_post();
    
    }else{
      if(!isChecked){
        setDisplayCheck('동이 해 주세요!')
      }
    };
    if(!data.email.includes('@', '.')){
      setDisplayEmail('입력한 이메일 주소 확인해 주세요!');
    };
    if(data.phone.length < 10 || /[a-zA-Z]/.test(data.phone) === true ){
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
          {videos.length > 0 ? latestVideoJSX : 'Loading...'}
          </VideoBox>
          <InputBox>
            <InputTitle>뉴스 받을 정보 입력란</InputTitle>
            <Wrapper>
                <InputWrap>
                  <Input 
                    type="email"
                    name="email"
                    value={data.email} 
                    onChange={handleChange}
                    onFocus={FocusEmail}
                    placeholder='이메일 (예)sm@mever.me' 
                  />
                  <AlertEmail>{displayEmail}</AlertEmail>
                  <Input
                    type="tel"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    onFocus={FocusTel}
                    placeholder='핸드폰번호 (예)01075521110'
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
          <DownTitle>문의전화</DownTitle>
          <Phone href="tel:1688-9050">1688-9050</Phone>
          <Contact/>
      </Main>
    </Container>

  )
}

export default MainP
