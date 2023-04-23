import React, { useState, useEffect} from 'react';
import { Progress, Radio, Space } from 'antd';
import { Container, Main,  Title, Text, Alert, Wrapper, Coution, FormWrap, Note, } from './style';
import {Button } from '../Generic';
import { Bottom, Top, FirstBottom, FirstTop, TopClose, BottomClose } from '../Generic/transform';
import { useNavigate } from 'react-router-dom';
export const result = [];

// form results collecting array 

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
  
  // display opening and closing state variable:
  const [close, setClose] = useState(false);
  const [action, setAction ] = useState(false)
  // const [open, setOpen] = useState(false)
  
  // alert (choose one of them) state variable:
  
  const [displayText, setDisplayText] = useState('');
  
  // function for selecting checkbox:
  
  const onChange = (e) => {
    setValue(e.target.value);
    setDisplayText('');
    setAction(false)
  };

  // navigate variable to the next page:

  const navigate = useNavigate();
  
  const postResult = () => {
    if(atForm.id === 4){
      console.log(result);
      setTimeout(()=>{navigate('/form-generate')}, 420)
      setClose(true)
    }
  }

  // click button Function:

  const onClick =()=> {
    if(value){    
      setTimeout(()=>{setIndex(index + 1)}, 420);
      setAction(true);
      result.push(value);
      setValue('');
      postResult()     
    }else{
      setDisplayText('하나를 선택하십시오!');
    }
  }

  return (
    <Container>
      <Top/>
      <Bottom/>
      { action && <FirstBottom/> }
      { action && <FirstTop/> }      
      { close && <TopClose/> }
      { close && <BottomClose/> }
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
      </Main>
    </Container>
  )
}

export default Step1
