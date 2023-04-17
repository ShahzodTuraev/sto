import React, { useState } from 'react';
import { Progress, Radio, Space } from 'antd';
import { Container, Main, Title, Text, Alert, Wrapper, Coution, FormWrap, Note, } from './style';
import {Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
import { array } from '../Form_Step_5';
import { Bottom, Top, BottomClose, TopClose } from '../Generic/transform';
const Step3 = () => {

  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
    setDisplayText('')
  };
  const navigate = useNavigate()
  const [displayText, setDisplayText] = useState('');
  const [close, setClose] = useState(false);
  const onClick =()=> {
    if(value){
      setTimeout(()=>{navigate('/form/step-4')}, 850)
      setClose(true)
      array.push(value);
    }else{
      setDisplayText('하나를 선택하십시오!');
    }
  }
  return (
    <Container>
      <Top/>
      <Bottom/>
      { close && <TopClose/> }
      { close && <BottomClose/> }
      <Main>
        <Title>다음의 간단한 질문에 답하면, 맞춤형 AI가 가장 적합한 AI • 3D 기술을 찾아줍니다.</Title>
        <Text>사업을 시작한 지 얼마나 되었나요?</Text>
        <Alert>{displayText}</Alert>
        <Progress percent={60} showInfo={false} />
        <Note>3 / 5</Note>
        <Wrapper>
          <FormWrap>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={'0~2년'}> 1~2년</Radio>
                <Radio value={'2~5년'}>3~5년</Radio>
                <Radio value={'5~10년'}>6~10년</Radio>
                <Radio value={'10년 이상'}> 10년 이상</Radio>
                <Radio value={'기타'}>창업 준비 중</Radio>
              </Space>
            </Radio.Group>
          </FormWrap>
          <Button onClick={onClick} type={'step'}>4단계로 가기</Button>
        </Wrapper>
        <Coution>10초 설문 후, 1:1맞춤 견적 페이지가 나옵니다!</Coution>
      </Main>
    </Container>
  )
}

export default Step3
