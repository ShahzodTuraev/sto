import styled from "styled-components";
import {ReactComponent as check} from '../../assets/icons/check.svg'
import {ReactComponent as secure} from '../../assets/icons/icon-secure.svg'
import {ReactComponent as guarantee} from '../../assets/icons/icon-guarantee-blue.svg'
import {device} from '../Generic/responsive';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  @media ${device.mobile}{
    flex-direction: column;
    align-items: center;
  }
`;

const Main = styled.div`
  max-width: 580px;
  width: 100%;
  height: auto;
  box-shadow: 0px 10px 40px 0px rgba(29, 46, 59, 0.15);
  border-radius: 10px;
  padding: 40px 70px;
  @media ${device.mobile}{
    padding: 30px 20px;
    width: 94%;
  }
  `;

const Title = styled.div`
  font-weight: 700;
  font-size: 42px;
  line-height: 110%;
  letter-spacing: -0.06rem;
  margin-bottom: 20px;
`;

const Note = styled.p`
  font-weight: 400;
  letter-spacing: 0;
  line-height: 120%;
  font-size: 0.875rem;
  color: rgb(77, 82, 86);
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const CoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const Coution = styled.p`
  font-weight: 400;
  line-height: 140%;
  font-size: 0.75rem;
  color: rgb(77, 82, 86);
  margin-top: 20px;
  text-align: start;
`;

const Icon = styled.div``;

Icon.Check = styled(check)`
  width: 18px;
  height: auto;
`;
Icon.Secure = styled(secure)`
  height: 32px;
  width: auto;
`;
Icon.Guarantee = styled(guarantee)`
  height: 38px;
  width: 38px;
`;
const CardBox = styled.div`
  padding: 20px;
  border: 2px solid #d5d5d5;
  border-radius: 4px;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 506px;
  height: auto;
  padding: 30px 0;
  @media ${device.mobile}{
    width: 94%;
  }

`
const Head = styled.h1`
  text-align: left;
  line-height: 110%;
  font-size: 2rem;
  font-weight: 900;
  @media ${device.mobile}{
    text-align: center;
    font-size: 1.6rem;
  }
`;
const IconWrap = styled.div`
  display: flex;
  gap: 10px;
  
`;

const IconText = styled.p`
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.01rem;
  line-height: 120%;
  margin-right: 15px;
`;

const Text = styled.p`
  text-align: left;
  font-weight: 400;
  line-height: 140%;
  font-size: 0.9375rem;
  color: rgb(77, 82, 86);
`;

const Awrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

const Img = styled.img`
  width: 300px;
  margin: 40px 0;
  `;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  position: relative;
  padding-bottom: 20px;
`
const Alert = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: red;
  position: absolute;
  bottom: 0;
`;

export { Container, Main, Title, Text, Note, Wrapper, IconWrap, Alert,
        CoWrap, Coution, Icon, CardBox, MainWrapper, TextBox, Head, 
        IconText, Awrap, Img, InputWrap}