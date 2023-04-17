import React, { useState} from 'react';
import { Progress, Radio, Space } from 'antd';
import { Container, Main, Title, Text, Alert, Wrapper, Coution, FormWrap, Note, } from './style';
import {Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
import { array } from '../Form_Step_5';
import { Bottom, BottomClose, Top, TopClose } from '../Generic/transform';
const Step2 = () => {
  
  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const navigate = useNavigate()
  const [displayText, setDisplayText] = useState('');

  const [close, setClose] = useState(false);
  const onClick =()=> {
    if(value){
      setTimeout(()=>{navigate('/form/step-3')}, 420)
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
        <Text>어떤 경로로 알게 되었습니까?</Text>
        <Alert>{displayText}</Alert>
        <Progress percent={40} showInfo={false} />
        <Note>2 / 5</Note>
        <Wrapper>
          <FormWrap>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={'토리 로빈슨'}>유명 유튜버 • 유명 인플루언서 통해</Radio>
                <Radio value={'CNBC 방송'}>네이버 • 구글 등 검색 후 타고 타고</Radio>
                <Radio value={'글 《포브스》, 《Inc.》, 《앙트프러너 Enterpreneur》, 《허핑턴 포스트》'}>각종 언론을 보고</Radio>
                <Radio value={'페이스북, 구글, 유튜브, 인스타그램 믿을 만한 친구'}> 페북•인스타•유튜브등 게시물/광고</Radio>
                <Radio value={'클릭퍼널스는 눈에 자주 띈다'}>지인의 직접적 구두 소개로</Radio>
                <Radio value={'기타'}>기타</Radio>
              </Space>
            </Radio.Group>
          </FormWrap>
          <Button onClick={onClick} type={'step'}>3단계로 가기</Button>
        </Wrapper>
        <Coution>10초 설문 후 1:1맞춤 견적 페이지가 나옵니다!</Coution>
      </Main>
    </Container>
  )
}

export default Step2
