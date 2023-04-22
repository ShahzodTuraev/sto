import React, { useState, useEffect } from 'react';
import { Progress, Radio, Space } from 'antd';
import { Container, Main, Wraper, Title, Text, Alert, Wrapper, Coution, FormWrap, Note, } from './style';
import {Button } from '../Generic';
// import { useNavigate } from 'react-router-dom';
import { array } from '../Form_Step_5';
import { Bottom, Top, FirstBottom, FirstTop } from '../Generic/transform';
import { useNavigate } from 'react-router-dom';
const Step1 = () => {

  // the function for returning the top of the page:

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // the collection of the all steps' data in an array by object:

    const form = [
      {id: 1, percent: 25, question: '다음 중 당신의 사업은 어느 분야에 가깝습니까?'},
      {id: 2, percent: 40, question: '어떤 경로로 알게 되었습니까?'},
      {id: 3, percent: 60, question: '사업을 시작한 지 얼마나 되었나요?'},
      {id: 4, percent: 80, question: '사업시, AI•3D기술을 활용해봤나요?'},
      {id: 5}
    ];

  // establishing first index of the form:

  const [index, setIndex] = useState(0);

  // change the shape of form index in convenient way:

  const atForm = form[index];

  // state variable for checkbox value:

  const [value, setValue] = useState();

  // function for selecting checkbox:

  const onChange = (e) => {
    setValue(e.target.value);
    setDisplayText('')
  };
  // display opening and closing state variable:

  const [close, setClose] = useState(false)
  // const [open, setOpen] = useState(false)

  // alert (choose one of them) state variable:

  const [displayText, setDisplayText] = useState('');

  // click button Function:

  const onClick =()=> {
    if(value){
      setTimeout(()=>{setIndex(index + 1)}, 420);
      setClose(true);
      // setTimeout(()=>{setOpen(true)}, 420);
      array.push(value);
      setValue('')
    }else{
      setDisplayText('하나를 선택하십시오!');
    }
  }

  // form 5 states:
  const [percentage, setPercentage] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  // navigate variable to the next page:

  const navigate = useNavigate();

  // form 5 useEffects for SetTimeOut:
    useEffect(() => {
    const interval = setInterval(() => {
      atForm.id ===5 && setPercentage(prevPercentage => {
        const newPercentage = prevPercentage + 1;
        if (newPercentage >= 100) {
          atForm.id===5 && clearInterval(interval);
          return 100;
        }
        return newPercentage;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [atForm.id]);  

  useEffect(() => {
    const timer = setTimeout(() => {
      atForm.id===5 && setIsChecked(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      atForm.id===5 && setIsChecked2(true);
    }, 2000);

    const timer3 = setTimeout(() => {
      atForm.id===5 && setIsChecked3(true);
    }, 3000);

    const timer4 = setTimeout(() => {
      atForm.id===5 && setIsChecked4(true);
    }, 4000);
    const timer5 = setTimeout(()=>{
      atForm.id===5 && navigate('/pricing-home')
    }, 5350);
    const timer6 = setTimeout(()=>{
      atForm.id===5 && setClose(true)
    }, 4300)

    return () => { 
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [atForm.id, navigate]);

  return (
    <Container>
      <Top/>
      <Bottom/>
      { close && <FirstBottom/> }
      { close && <FirstTop/> }
      {/* { open && <Top/> }
      { open && <Bottom/> } */}


      
      {atForm.id < 5 &&
      <Main>
        <Title>다음의 간단한 질문에 답하면, 맞춤형 AI가 가장 적합한 AI • 3D 기술을 찾아줍니다.</Title>
        <Text>{atForm.question}</Text>
        <Alert>{displayText}</Alert>
        <Progress percent={atForm.percent} showInfo={false} />
        <Note>{atForm.id} / 5</Note>
        <Wrapper>
          <FormWrap>
            <Radio.Group onChange={onChange} value={value}>

              {/*Form 1  */}

              {atForm.id===1 && <Space direction="vertical">
                <Radio value={'프리랜서 / 1인사업자'}>프리랜서 / 1인사업자</Radio> 
                <Radio value={'IT 정보통신 사업자'}>IT 정보통신 사업자</Radio>
                <Radio value={'의•식•주 상품 온 / 오프라인 사업자'}>의•식•주 상품 온 / 오프라인 사업자</Radio>
                <Radio value={'코칭/컨설팅 / 교육업'}> 코칭/컨설팅 / 교육업</Radio>
                <Radio value={'온 / 오프라인 마케팅 사업자'}>온 / 오프라인 마케팅 사업자</Radio>
                <Radio value={'10인 미만 자영업 / 프렌차이즈'}>10인 미만 자영업 / 프렌차이즈</Radio>
                <Radio value={'10인이상 중소.중견 사업자'}>10인이상 중소.중견 사업자</Radio>
                <Radio value={'100인이상 기업 / 상장기업'}>100인이상 기업 / 상장기업</Radio>
                <Radio value={'비영리 / 협업 / 제휴 사업'}> 비영리 / 협업 / 제휴 사업</Radio>
              </Space>}

              {/*Form 2  */}

              {atForm.id===2 && <Space direction="vertical">
                <Radio value={'유명 유튜버 • 유명 인플루언서 통해'}>유명 유튜버 • 유명 인플루언서 통해</Radio>
                <Radio value={'네이버 • 구글 등 검색 후 타고 타고'}>네이버 • 구글 등 검색 후 타고 타고</Radio>
                <Radio value={'각종 언론을 보고'}>각종 언론을 보고</Radio>
                <Radio value={'페북•인스타•유튜브등 게시물/광고'}> 페북•인스타•유튜브등 게시물/광고</Radio>
                <Radio value={'지인의 직접적 구두 소개로'}>지인의 직접적 구두 소개로</Radio>
                <Radio value={'기타'}>기타</Radio>
              </Space>}

              {/*Form 3  */}

              {atForm.id===3 && <Space direction="vertical">
                <Radio value={'1~2년'}> 1~2년</Radio>
                <Radio value={'3~5년'}>3~5년</Radio>
                <Radio value={'6~10년'}>6~10년</Radio>
                <Radio value={'10년 이상'}> 10년 이상</Radio>
                <Radio value={'창업 준비 중'}>창업 준비 중</Radio>
              </Space>}

              {/*Form 4  */}

              {atForm.id===4 && <Space direction="vertical">
                <Radio value={' AI • 3D 등 IT기술을 사업에 활용 중이다'}> AI • 3D 등 IT기술을 사업에 활용 중이다</Radio>
                <Radio value={'들어는 봤지만 활용하는 법을 모른다'}>들어는 봤지만 활용하는 법을 모른다</Radio>
                <Radio value={'개념 정도만 알고, 공부할 시간이 없다'}>개념 정도만 알고, 공부할 시간이 없다</Radio>
                <Radio value={"AI • 3D기술이 무엇인지 모른다"}>AI • 3D기술이 무엇인지 모른다</Radio>
                <Radio value={'기타'}>기타</Radio>
              </Space>}
            </Radio.Group>
          </FormWrap>
          <Button onClick={onClick} type={'step'}>{atForm.id + 1}단계로 가기</Button>
        </Wrapper>
        <Coution>10초 설문 후, 1:1맞춤 견적 페이지가 나옵니다!</Coution>
      </Main>}
      {/* form 5 */}
      {atForm.id === 5 && 
      <Main>
      <Title>당신을 위한 1:1 맞춤형 사례 분석이<br></br> 진행중입니다!</Title>
      <div className="skill-box">
              <div className="skill-bar">
                  <span className="skill-per ">
                      <span className="tooltip">{percentage}%</span>
                  </span>
              </div>
          </div>
          <Note>5 / 5</Note>
          <Wraper>
            <input
            className='spinner' 
            type="checkbox" 
            id="my-checkbox"
            checked={isChecked}
            />
            <label className='label' htmlFor="my-checkbox">
              <div className="check"></div>
            </label>
            <Text>메버AI 데이터 베이스를 분석합니다.</Text>
          </Wraper>
          <Wraper>
            <input
            className='spinner' 
            type="checkbox" 
            id="my-checkbox"
            checked={isChecked2}
            />
            <label className='label' htmlFor="my-checkbox">
              <div className="check"></div>
            </label>
            <Text>3D메버로 입체적 필터링 합니다.</Text>
          </Wraper>
          <Wraper>
            <input
            className='spinner' 
            type="checkbox" 
            id="my-checkbox"
            checked={isChecked3}
            />
            <label className='label' htmlFor="my-checkbox">
              <div className="check"></div>
            </label>
            <Text>1:1 맞춤형 사례분석을 생성합니다.</Text>
          </Wraper>

          <Wraper>
            <input
            className='spinner' 
            type="checkbox" 
            id="my-checkbox"
            checked={isChecked4}
            />
            <label className='label' htmlFor="my-checkbox">
              <div className="check"></div>
            </label>
            <Text>최상의 메버AI 시스템을 선택합니다.</Text>
          </Wraper>
    </Main>
      }


    </Container>
  )
}

export default Step1
