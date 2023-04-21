import React from 'react';
import { Container, Img, Main, Text, Title, Up, Wrapper, } from './style';
import photo1 from '../../assets/imgs/group-1.jpg'
import photo2 from '../../assets/imgs/group-2.jpg'
import photo3 from '../../assets/imgs/group-3.jpg'
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import { useNavigate } from 'react-router-dom';
const QuestionsPage = () => {
  const navigate = useNavigate();
  const onClick =()=>{
    navigate('/pricing-home')
  }
  return (
    <Container>
      <Up>
        <Main>
          <Title>CEO들의 1억•10억•100억 도전 & 성공과정을 확인하세요!</Title>
          <Text 
            color='rgba(255, 255, 255, 0.8)' 
            width='80%'
            textAlign ='center'
          >
            메버는 2025년까지 1,004명의 CEO,기업가,크리에이터,강사,코치,인플루언서,유튜버가 '1•10•100' 상을 받도록 돕습니다!
          </Text>
          <Wrapper>
            <Img src={photo1}/>
            <Img src={photo2}/>
            <Img src={photo3}/>
          </Wrapper>
          <Text
            color='#ffffff'
            textAlign='center'
            fontSize ='32px'
            margin= '0 0 20px 0'
          >
              메버는 3D•AI 기술회사로 CEO의 성공을 돕습니다. 지금 바로 도전 해 보세요!
          </Text>
          <Button onClick={onClick} type={'large'}>1•10•100 도전하기! </Button>
          <Index color='rgba(255, 255, 255, 0.6)'>계약 없음 • 언제든지 해지 가능</Index>    
        </Main> 
      </Up>
      
    </Container>
    

  )
}

export default QuestionsPage;

