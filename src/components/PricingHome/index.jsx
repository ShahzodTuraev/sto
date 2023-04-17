import React, {useState, useEffect}from 'react';
import { Container, Main, Title, Text, Wrapper, Plan, Box, Line, Note, NoteWrap, Wrap } from './style';
import {Button} from '../Generic';
import AbilityPage from '../6_HomePage_Ability';
import QuestionsPage from '../8_HomePage_Questions';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import { array } from '../Form_Step_5';
import { Bottom, BottomClose, Top, TopClose } from '../Generic/transform';

const PricingHome = () => {
  const navigate = useNavigate();
  const onClick =()=>{
    setTimeout(()=>{navigate('/payment-form')}, 420)
      setClose(true)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [close, setClose] = useState(false);
  const onNavigate = () =>{
      setTimeout(()=>{navigate('/pricing-home/monthly')}, 420)
      setClose(true)
  }
  const [name] = useState(`${array[0]}`);
  return (
    <Container>
      <Top/>
      <Bottom/>
      { close && <TopClose/> }
      { close && <BottomClose/> }
      <Main>
        <Title width='65%'> {name === 'undefined' ? '':`${name}`} CEO들의 <br/>매출 성장 플랜</Title>
        <Text margin='15px 0'>CEO들의 후기를 보고 천천히 고민해보세요.<br></br> 이미, 3개월 일정이 밀려 있습니다.</Text>
          <Wrap>
            <Plan borderBottom ='3px solid #000'>교육 과정 • 매출 도전</Plan>
            <Plan onClick={onNavigate}>SW • HW 솔루션</Plan>
          </Wrap>
          <Wrapper>
            <Box>
              <Title fontSize='34px'>온라인 CEO과정</Title>
              <Text fontSize ='14px'>2,500,000원</Text>
              <Line/>
              <Title fontWeight = '700' fontSize='32px'>250,000원</Title>
              <Text margin='10px 0' fontSize='13px'>10주 <b>스터디 (225만원 절약)</b></Text>
              <Button onClick={onClick} type='price'>온라인 CEO과정 바로가기</Button>
              <NoteWrap>
                <Note>제공1. [10강 온라인 영상]-1,000,000원</Note>
                <Note>제공2. [10강 PDF 전자책]-150,000원</Note>
                <Note>제공3. [특강 강의]-100,000원</Note>
                <Note>제공4. [실전컨설팅 1시간]-250,000원</Note>
                <Note>제공5. [비즈니스협업MOU]-500,000원</Note>
                <Note>제공6. [온라인 자격증발행]-100,000원</Note>
                <Note>제공7. [3D홈페이지 맛보기]-100,000원</Note>
                <Note>제공8. [3D마케팅 맛보기]-100,000원</Note>
                <Note>제공9. [3D컨텐츠 맛보기]-100,000원</Note>
                <Note>제공10.[3D자동화 맛보기]-100,000원</Note>
                <Note>—</Note>
                <Note>—</Note>
                <Note>—</Note>
                <Note>—</Note>
                <Note>—</Note>
              </NoteWrap>
              <Button onClick={onClick} type='price'>온라인 CEO과정 바로가기</Button>         
            </Box>
            <Box>
              <Title fontSize='34px'>오프라인CEO과정</Title>
              <Text fontSize ='14px'>10,000,000원</Text>
              <Line/>
              <Title fontWeight = '700' fontSize='32px'>2,500,000원</Title>
              <Text margin='10px 0' fontSize='13px'>10주 <b>스터디 (750만원 절약)</b></Text>
              <Button onClick={onClick} type='price'>지역별 CEO과정 예약하기</Button>
              <NoteWrap>
              <Note>제공1. [10강 온라인 영상]-1,000,000원</Note>
                <Note>제공2. [10강 PDF 전자책]-150,000원</Note>
                <Note>제공3. [특강 강의]-100,000원</Note>
                <Note>제공4. [실전컨설팅 1시간]-250,000원</Note>
                <Note>제공5. [비즈니스협업MOU]-500,000원</Note>
                <Note>제공6. [온라인 자격증발행]-100,000원</Note>
                <Note>제공7. [3D홈페이지 맛보기]-100,000원</Note>
                <Note>제공8. [3D마케팅 맛보기]-100,000원</Note>
                <Note>제공9. [3D컨텐츠 맛보기]-100,000원</Note>
                <Note>제공10.[3D자동화 맛보기]-100,000원</Note>
                <Note><b>제공11. 운영수익 제휴-1,000,000원</b></Note>
                <Note><b>제공12. CEO 네트워크-2,000,000원</b></Note>
                <Note><b>제공13. 협업.셀럽교류-1,000,000원</b></Note>
                <Note><b>제공14. 10주 오프코칭권-1,000,000원</b></Note>
                <Note><b>제공15. 10주 오프수강권-2,500,000원</b></Note>
              </NoteWrap>
              <Button onClick={onClick} type='price'>지역별 CEO과정 예약하기</Button>     
            </Box>
            <Box backGround = 'rgb(21, 30, 82)'>
              <Title color='#FFF' fontSize='34px'>1•10•100도전</Title>
              <Text color='#FFF' fontSize ='14px'>발생매출의 20~30%</Text>
              <Line/>
              <Title color='var(--color-6Z-dzM8-7)' fontWeight = '700' fontSize='32px'>실비+매출의 10%</Title>
              <Text color='#FFF' margin='10px 0' fontSize='13px'>1년단위 <b>실행 (매출.지분.협업)</b></Text>
              <Button onClick={onClick} type='price'>1•10•100도전 시작</Button>
              <NoteWrap>
                <Note color='#FFF'>제공1. [10강 온라인 영상]-1,000,000원</Note>
                <Note color='#FFF'>제공2. [10강 PDF 전자책]-150,000원</Note>
                <Note color='#FFF'>제공3. [특강 강의]-100,000원</Note>
                <Note color='#FFF'>제공4. [실전컨설팅 1시간]-250,000원</Note>
                <Note color='#FFF'>제공5. [비즈니스협업MOU]-500,000원</Note>
                <Note color='#FFF'>제공6. [온라인 자격증발행]-100,000원</Note>
                <Note color='#FFF'>제공7. [3D AI홈페이지]-10,000,000원~</Note>
                <Note color='#FFF'>제공8. [3D AI마케팅]-10,000,000원~</Note>
                <Note color='#FFF'>제공9. [3D AI컨텐츠]-10,000,000원~</Note>
                <Note color='#FFF'>제공10.[3D AI자동화]-10,000,000원~</Note>
                <Note color='#FFF'>제공11. 운영수익 제휴-1,000,000원</Note>
                <Note color='#FFF'>제공12. CEO 네트워크-2,000,000원</Note>
                <Note color='#FFF'>제공13. 협업.셀럽교류-1,000,000원</Note>
                <Note color='#FFF'>제공14. 10주 오프코칭권-1,000,000원</Note>
                <Note color='#FFF'>제공15. 10주 오프수강권-2,500,000원</Note>
                <Note color='#FFF'>제공16. 1년 코치.실행자 배치-실비</Note>
                <Note color='#FFF'>제공17. 1년 HW.SW 배치-실비</Note>
              </NoteWrap>
              <Button onClick={onClick} type='price'>1•10•100도전 시작</Button>     
            </Box>
          </Wrapper>
      </Main>
      <AbilityPage/>
      <QuestionsPage/>
      <Footer/>
    </Container>
  )
}

export default PricingHome;
