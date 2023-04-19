import React from 'react';
import { BrandWrap, Container, Main, UpTitle, Img } from './style';
import brand1 from '../../assets/imgs/brand-1.png'
import brand2 from '../../assets/imgs/brand-2.png'
import brand3 from '../../assets/imgs/brand-3.png'
import brand4 from '../../assets/imgs/brand-4.jpg'

const PartnersPage = () => {
  return (
    <Container>
        <Main>
          <UpTitle>최고의 브랜드가 신뢰하는</UpTitle>
          <BrandWrap>
            <Img src={brand1}/>
            <Img src={brand2}/>
            <Img src={brand3}/>
            <Img src={brand4}/>
          </BrandWrap>
        </Main> 
    </Container>
    

  )
}

export default PartnersPage;

