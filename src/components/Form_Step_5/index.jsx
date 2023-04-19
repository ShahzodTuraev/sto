import React, { useState, useEffect } from 'react';
import { Container, Main, Title, Note, Wraper, Text, } from './style';
import { useNavigate } from 'react-router-dom';
import { Bottom, Top, TopClose, BottomClose } from '../Generic/transform';
export const array = [];
const Step5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate()
  const [percentage, setPercentage] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [close, setClose] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prevPercentage => {
        const newPercentage = prevPercentage + 1;
        if (newPercentage >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newPercentage;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChecked(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setIsChecked2(true);
    }, 2000);

    const timer3 = setTimeout(() => {
      setIsChecked3(true);
    }, 3000);

    const timer4 = setTimeout(() => {
      setIsChecked4(true);
    }, 4000);
    const timer5 = setTimeout(()=>{
      navigate('/pricing-home')
    }, 5350);
    const timer6 = setTimeout(()=>{
      setClose(true)
    }, 4300)
    

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [navigate]);

  
  return (
    <Container>
      <Top/>
      <Bottom/>
      { close && <TopClose/> }
      { close && <BottomClose/> }
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
    </Container>
  )
}

export default Step5
