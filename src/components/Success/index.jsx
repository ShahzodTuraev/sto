import React, {useEffect} from 'react';
import { Container } from './style';
import Footer from '../Footer'
import Lectures from '../Lectures';
import QuestionsPage from '../8_HomePage_Awards';

const SuccessHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Lectures/>
      <QuestionsPage/>
      <Footer/>
    </Container>
  )
}

export default SuccessHome
