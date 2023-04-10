import React from 'react'
import { Container, Main, Suptitle, Title, Text, Index, IconCheck, Wrapper, Section, SectionText } from './style';
import { Button } from '../Generic';
import iconCheck from '../../assets/icons/check.svg';
import { useNavigate } from 'react-router-dom';

const Intro = () => {

  const navigate = useNavigate();
  const onClick = () => { navigate('/pricing-home') }
  return (
    <Container>
      <Main>
        <Suptitle>CEO님, 검증된 꾸준한 수익을 얻고싶으신가요?</Suptitle>
        <Title>3D홈페이지.3D마케팅.</Title>
        <Text>사람들을 3D홈페이지로 유입하여,<br></br> 매출까지 전환시키는 것이 우리가 가장 잘하는 일입니다.</Text>
        <Button onClick={onClick} type={'large'}>처음 오신 CEO를 위해, 무료 시작</Button>
        <Index>계약 없음 • 언제든지 해지 가능</Index>
        <Wrapper>
          <Section>
            <IconCheck src = {iconCheck}/>
            <SectionText>최신 AI 3D기술을 사용하고 싶지만</SectionText>
          </Section>
          <Section>
            <IconCheck src = {iconCheck}/>
            <SectionText>익숙하지 않은 CEO들에게 쉽게 특화하여</SectionText>
          </Section>
          <Section>
            <IconCheck src = {iconCheck}/>
            <SectionText>다양한 CEO 비즈니스에 1:1맞춤 제공됩니다</SectionText>
          </Section>
        </Wrapper>
      </Main>
    </Container>
  )
}

export default Intro;
