import React, { useState } from 'react';
import { Progress, Radio, Space } from 'antd';
import { Container, Main, Title, Text, Alert, Wrapper, Coution, FormWrap, Note, } from './style';
import {Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
import { array } from '../Form_Step_5';
import { BottomClose, FirstBottom, FirstTop, TopClose } from '../Generic/transform';
const Step1 = () => {

  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
    setDisplayText('')
  };
  const [close, setClose] = useState(false)
  const navigate = useNavigate()
  const [displayText, setDisplayText] = useState('');
  const onClick =()=> {
    if(value){
      setTimeout(()=>{navigate('/form/step-2')}, 420)
      setClose(true)
      array.push(value);
    }else{
      setDisplayText('하나를 선택하십시오!');
    }
  }
  return (
    <Container>
      
      <FirstTop/>
      <FirstBottom/>
      
      { close && <TopClose/> }
      { close && <BottomClose/> }

      <Main>
        <Title>다음의 간단한 질문에 답하면, 맞춤형 AI가 가장 적합한 AI • 3D 기술을 찾아줍니다.</Title>
        <Text>다음 중 당신의 사업은 어느 분야에 가깝습니까?</Text>
        <Alert>{displayText}</Alert>
        <Progress percent={25} showInfo={false} />
        <Note>1 / 5</Note>
        <Wrapper>
          <FormWrap>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={'프리랜서 / 1인사업자'}>프리랜서 / 1인사업자</Radio>
                <Radio value={'IT 정보통신 사업자'}>IT 정보통신 사업자</Radio>
                <Radio value={'의•식•주 상품 온 / 오프라인 사업자'}>의•식•주 상품 온 / 오프라인 사업자</Radio>
                <Radio value={'코칭/컨설팅 / 교육업'}> 코칭/컨설팅 / 교육업</Radio>
                <Radio value={'온 / 오프라인 마케팅 사업자'}>온 / 오프라인 마케팅 사업자</Radio>
                <Radio value={'10인 미만 자영업 / 프렌차이즈'}>10인 미만 자영업 / 프렌차이즈</Radio>
                <Radio value={'10인이상 중소.중견 사업자'}>10인이상 중소.중견 사업자</Radio>
                <Radio value={'100인이상 기업 / 상장기업'}>100인이상 기업 / 상장기업</Radio>
                <Radio value={'비영리 / 협업 / 제휴 사업'}> 비영리 / 협업 / 제휴 사업</Radio>
              </Space>
            </Radio.Group>
          </FormWrap>
          <Button onClick={onClick} type={'step'}>2단계로 가기</Button>
        </Wrapper>
        <Coution>10초 설문 후, 1:1맞춤 견적 페이지가 나옵니다!</Coution>  
      </Main>
    </Container>
  )
}

export default Step1
