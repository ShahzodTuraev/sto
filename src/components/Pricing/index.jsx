import React, {useState, useEffect}from 'react';
import { Container, Main, Title, LineText, Text, Wrapper, Plan, Box, Note, NoteWrap, Wrap } from './style';
import {Button} from '../Generic';
import AbilityPage from '../6_HomePage_Ability';
import QuestionsPage from '../8_HomePage_Questions';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import { Bottom, BottomClose, Top, TopClose } from '../Generic/transform';
import {result} from '../Form'

const PricingHome = () => {
  const navigate = useNavigate();
  // if click from story page to the price page, class default is 'SW • HW 솔루션'
  const path = localStorage.getItem('path')

  // Function for the Buttons:
  
  const onClick =()=>{
    setTimeout(()=>{navigate('/payment-form')}, 420)
      setClose(true)
  }

  // Function for fixing page scroll:
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // closing animation state:
  
  const [close, setClose] = useState(false);
  // Form result choosen name:
  const [name] = useState(`${result[0]}`);
  // class selection states:
  const [ visible1, setVisible1] = useState(path ? 'none' : 'flex');
  const [ visible2, setVisible2] = useState(path ? 'flex' : 'none');
  const [ border1, setBorder1] = useState(path? '' : '3px solid #000')
  const [ border2, setBorder2] = useState(path? '3px solid #000' : '')
  
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)
  const [hover4, setHover4] = useState(false)
  const [hover5, setHover5] = useState(false)
  const [hover6, setHover6] = useState(false)
  const mouseEnter = () => {setHover(true)}
  const mouseLeave = () => {setHover(false)}
  const mouseEnter2 = () => {setHover2(true)}
  const mouseLeave2= () => {setHover2(false)}
  const mouseEnter3 = () => {setHover3(true)}
  const mouseLeave3 = () => {setHover3(false)}
  const mouseEnter4 = () => {setHover4(true)}
  const mouseLeave4 = () => {setHover4(false)}
  const mouseEnter5 = () => {setHover5(true)}
  const mouseLeave5 = () => {setHover5(false)}
  const mouseEnter6 = () => {setHover6(true)}
  const mouseLeave6 = () => {setHover6(false)}

const setColor = {color: hover ? '#fff' : 'var(--color-6Z-dzM8-1)'}
const setColor2 = {color: hover2 ? '#fff' : 'var(--color-6Z-dzM8-1)'}
const setColor3 = {color: hover3 ? '#fff' : 'var(--color-6Z-dzM8-1)'}
const setColor4 = {color: hover4 ? '#fff' : 'var(--color-6Z-dzM8-1)'}
const setColor5 = {color: hover5 ? '#fff' : 'var(--color-6Z-dzM8-1)'}
const setColor6 = {color: hover6 ? '#fff' : 'var(--color-6Z-dzM8-1)'}

  const onNav1 = () => {
    setVisible1('flex');
    setVisible2('none');
    setBorder1('3px solid #000');
    setBorder2('none');
    localStorage.removeItem('path')

  }
  const onNav2 = () => {
    setVisible1('none');
    setVisible2('flex');
    setBorder1('none');
    setBorder2('3px solid #000');
  }

  return (
    <Container>
      <Top/>
      <Bottom/>
      { close && <TopClose/> }
      { close && <BottomClose/> }
      <Main>
        <Title width='65%'> {name === 'undefined' ? '':`${name}`} <br /> CEO들의 <br/>매출 성장 플랜</Title>
        <Text margin='15px 0'>CEO들의 후기를 보고 천천히 고민해보세요.<br></br> 이미, 3개월 일정이 밀려 있습니다.</Text>
          <Wrap>
            <Plan onClick={onNav1} borderBottom ={border1}>교육 과정 • 매출 도전</Plan>
            <Plan onClick={onNav2} borderBottom ={border2}>SW • HW 솔루션</Plan>
          </Wrap>
          
          <Wrapper style={{display: visible1}}>
            <Box
              backGround = {hover? 'rgb(21, 30, 82)' : '#ffffff'}
              onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}
            >
              <Title style={setColor} fontSize='34px'>온라인 CEO과정</Title>
              <LineText style={setColor}>2,500,000원</LineText>
    
              <Title style={setColor} fontWeight = '700' fontSize='32px'>250,000원</Title>
              <Text style={setColor} >10주 <b>스터디 (225만원 절약)</b></Text>
              <Button onClick={onClick} type='price'>온라인 CEO과정 바로가기</Button>
              <NoteWrap>
                <Note style={setColor} >제공1. [10강 온라인 영상]-1,000,000원</Note>
                <Note style={setColor} >제공2. [10강 PDF 전자책]-150,000원</Note>
                <Note style={setColor} >제공3. [특강 강의]-100,000원</Note>
                <Note style={setColor} >제공4. [실전컨설팅 1시간]-250,000원</Note>
                <Note style={setColor} >제공5. [비즈니스협업MOU]-500,000원</Note>
                <Note style={setColor} >제공6. [온라인 자격증발행]-100,000원</Note>
                <Note style={setColor} >제공7. [3D홈페이지 맛보기]-100,000원</Note>
                <Note style={setColor} >제공8. [3D마케팅 맛보기]-100,000원</Note>
                <Note style={setColor} >제공9. [3D컨텐츠 맛보기]-100,000원</Note>
                <Note style={setColor} >제공10.[3D자동화 맛보기]-100,000원</Note>
              </NoteWrap>
              <Button onClick={onClick} type='price'>온라인 CEO과정 바로가기</Button>
            </Box>
            <Box
              backGround = {hover2? 'rgb(21, 30, 82)' : '#ffffff'}
              onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2}
            >
              <Title style={setColor2} fontSize='34px'>오프라인CEO과정</Title>
              <LineText style={setColor2} >10,000,000원</LineText>
    
              <Title style={setColor2} fontWeight = '700' fontSize='32px'>2,500,000원</Title>
              <Text style={setColor2} >10주 <b>스터디 (750만원 절약)</b></Text>
              <Button onClick={onClick} type='price'>지역별 CEO과정 예약하기</Button>
              <NoteWrap>
                <Note style={setColor2}>제공1. [10강 온라인 영상]-1,000,000원</Note>
                <Note style={setColor2}>제공2. [10강 PDF 전자책]-150,000원</Note>
                <Note style={setColor2}>제공3. [특강 강의]-100,000원</Note>
                <Note style={setColor2}>제공4. [실전컨설팅 1시간]-250,000원</Note>
                <Note style={setColor2}>제공5. [비즈니스협업MOU]-500,000원</Note>
                <Note style={setColor2}>제공6. [온라인 자격증발행]-100,000원</Note>
                <Note style={setColor2}>제공7. [3D홈페이지 맛보기]-100,000원</Note>
                <Note style={setColor2}>제공8. [3D마케팅 맛보기]-100,000원</Note>
                <Note style={setColor2}>제공9. [3D컨텐츠 맛보기]-100,000원</Note>
                <Note style={setColor2}>제공10.[3D자동화 맛보기]-100,000원</Note>
                <Note style={setColor2}><b>제공11. 운영수익 제휴-1,000,000원</b></Note>
                <Note style={setColor2}><b>제공12. CEO 네트워크-2,000,000원</b></Note>
                <Note style={setColor2}><b>제공13. 협업.셀럽교류-1,000,000원</b></Note>
                <Note style={setColor2}><b>제공14. 10주 오프코칭권-1,000,000원</b></Note>
                <Note style={setColor2}><b>제공15. 10주 오프수강권-2,500,000원</b></Note>
              </NoteWrap>
              <Button onClick={onClick} type='price'>지역별 CEO과정 예약하기</Button>     
            </Box>
            <Box
              backGround = {hover3? 'rgb(21, 30, 82)' : '#ffffff'}
              onMouseEnter={mouseEnter3} onMouseLeave={mouseLeave3}
            >
              <Title style={setColor3} fontSize='34px'>1•10•100도전</Title>
              <LineText style={setColor3} >발생매출의 20~30%</LineText>
    
              <Title style={setColor3} fontWeight = '700' fontSize='32px'>실비+매출의 10%</Title>
              <Text style={setColor3} >1년단위 <b>실행 (매출.지분.협업)</b></Text>
              <Button style={setColor3} onClick={onClick} type='price'>1•10•100도전 시작</Button>
              <NoteWrap>
                <Note style={setColor3}>제공1. [10강 온라인 영상]-1,000,000원</Note>
                <Note style={setColor3}>제공2. [10강 PDF 전자책]-150,000원</Note>
                <Note style={setColor3}>제공3. [특강 강의]-100,000원</Note>
                <Note style={setColor3}>제공4. [실전컨설팅 1시간]-250,000원</Note>
                <Note style={setColor3}>제공5. [비즈니스협업MOU]-500,000원</Note>
                <Note style={setColor3}>제공6. [온라인 자격증발행]-100,000원</Note>
                <Note style={setColor3}>제공7. [3D AI홈페이지]-10,000,000원~</Note>
                <Note style={setColor3}>제공8. [3D AI마케팅]-10,000,000원~</Note>
                <Note style={setColor3}>제공9. [3D AI컨텐츠]-10,000,000원~</Note>
                <Note style={setColor3}>제공10.[3D AI자동화]-10,000,000원~</Note>
                <Note style={setColor3}>제공11. 운영수익 제휴-1,000,000원</Note>
                <Note style={setColor3}>제공12. CEO 네트워크-2,000,000원</Note>
                <Note style={setColor3}>제공13. 협업.셀럽교류-1,000,000원</Note>
                <Note style={setColor3}>제공14. 10주 오프코칭권-1,000,000원</Note>
                <Note style={setColor3}>제공15. 10주 오프수강권-2,500,000원</Note>
                <Note style={setColor3}><b>제공16. 1년 코치.실행자 배치-실비</b></Note>
                <Note style={setColor3}><b>제공17. 1년 HW.SW 배치-실비</b></Note>
              </NoteWrap>
              <Button onClick={onClick} type='price'>1•10•100도전 시작</Button>
            </Box>
          </Wrapper>

          <Wrapper style={{display: visible2}}>
            <Box
              backGround = {hover4? 'rgb(21, 30, 82)' : '#ffffff'}
              onMouseEnter={mouseEnter4} onMouseLeave={mouseLeave4}
            >
              <Title style={setColor4} fontSize='34px'>CEO AI•3D컨설팅</Title>
              <LineText style={setColor4} >2,500,000원</LineText>
    
              <Title style={setColor4} fontWeight = '700' fontSize='32px'>250,000원/1회2h</Title>
              <Text style={setColor4} >1회 <b>AI•3D 컨설팅 (225만원 절약)</b></Text>
              <NoteWrap>
                <Note style={setColor4}>30억 빚을 1년만에 300억으로 만든 이상민CEO가 1:1 컨설팅을 합니다. 10강의 내용을 단, 1회 컨설팅으로 어떤 산업이든 코칭.진단하고, AI•3D기술로 해결할 수 있도록 명쾌함을 선사합니다! </Note>
            </NoteWrap>
              <Button onClick={onClick} type='price'>1:1 컨설팅 바로보기</Button>     
            </Box>
            <Box
              backGround = {hover5? 'rgb(21, 30, 82)' : '#ffffff'}
              onMouseEnter={mouseEnter5} onMouseLeave={mouseLeave5}
            >
              <Title style={setColor5} fontSize='34px'>3D홈페이지마케팅</Title>
              <LineText style={setColor5} >10,000,000원</LineText>
    
              <Title style={setColor5} fontWeight = '700' fontSize='32px'>월330,000원/3년</Title>
              <Text style={setColor5} >10주 <b>스터디 (750만원 절약)</b></Text>
              <NoteWrap>
                <Note style={setColor5}>3D홈페이지는 기존의 홈페이지 대비 고객을 끌어들이는 마법같은 효과입니다. 그리고 AI 마케팅은 그 고객을 꾸준한 관리와 정보로 매출까지 만들어내는 인공지능 시스템을 말합니다! </Note>
            </NoteWrap>
              <Button onClick={onClick} type='price'>3D홈페이지 마케팅 바로보기</Button>
            </Box>
            <Box
              backGround = {hover6? 'rgb(21, 30, 82)' : '#ffffff'}
              onMouseEnter={mouseEnter6} onMouseLeave={mouseLeave6}
            >
              <Title style={setColor6} fontSize='34px'>3D칠판•키오스크</Title>
              <LineText style={setColor6} >10,000,000원</LineText>
    
              <Title style={setColor6} color='var(--color-6Z-dzM8-7)' fontWeight = '700' fontSize='32px'>월230,000원/3년</Title>
              <Text style={setColor6} >1년단위 <b>실행 (매출.지분.협업)</b></Text>
              <NoteWrap>
                <Note style={setColor6}>사업자들의 필수 하드웨어인 포스.키오스크.전자칠판을 3D홈페이지로 업그레이드 시켜드립니다. 기존 하드웨어 유무에 상관없이 쉽고,빠르게 웹3D기술로 고객을 더 많이 유치해보세요! </Note>
            </NoteWrap>
              <Button onClick={onClick} type='price'>3D칠판•키오스크 바로보기</Button>     
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
