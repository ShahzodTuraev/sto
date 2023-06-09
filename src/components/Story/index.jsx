import React, { useEffect } from 'react';
import { Container } from './style';
import Intro from '../1_HomePage_Intro'
import EntrepreneursHomePage from '../3_HomePage_Entrepreneurs';
import WhyFourthPage from '../4_HomePage_Why';
import OpportunityPage from '../5_HomePage_Opportunity';
import AbilityPage from '../6_HomePage_Ability';
import PartnersPage from '../7_HomePage_Partners';
import Footer from '../Footer'
import { FirstBottom, FirstTop } from '../Generic/transform';
const StoryHome = () => {
  localStorage.setItem('option', 'second')
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <FirstTop/>
      <FirstBottom/>
      <Intro/>
      <EntrepreneursHomePage/>
      <WhyFourthPage/>
      <OpportunityPage/>
      <AbilityPage/>
      <PartnersPage/>
      <Footer/>
    </Container>
  )
}

export default StoryHome
