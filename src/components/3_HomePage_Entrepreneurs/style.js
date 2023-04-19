import styled from "styled-components";
import {device} from "../Generic/responsive"
import {ReactComponent as template} from '../../assets/icons/Proven_templates.svg'
import {ReactComponent as drag} from '../../assets/icons/Dragdrop.svg'
import {ReactComponent as cart} from '../../assets/icons/ShoppingCart.svg'
import {ReactComponent as courses} from '../../assets/icons/Courses.svg'
import {ReactComponent as analytics} from '../../assets/icons/Analytics.svg'
import {ReactComponent as testing} from '../../assets/icons/testing.svg'
import {ReactComponent as star} from '../../assets/icons/star-rate.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(to bottom right, var(--color-6Z-dzM8-3), #DEEAFA);
`;
  const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  margin-bottom: 70px;
`;

const SectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  margin: -60px 0 50px 0;
  box-shadow: 0px 4px 16px 2px rgba(0, 44, 122, 0.2);
  max-width: 1108px;
  width: 100%;
  padding: 20px;
  @media ${device.tablet}{
    width: 95%;
    padding: 10px;
  };
  @media ${device.mobile}{
    display: none;
  };
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 136px;
  height: 115px;
`;
const Icon = styled.div``;

Icon.Template = styled(template)`
  width: 50px;
`;

Icon.Drag = styled(drag)`
  width: 50px;
`;

Icon.Cart = styled(cart)`
  width: 50px;
`;

Icon.Courses = styled(courses)`
  width: 50px;
`;

Icon.Analytics = styled(analytics)`
  width: 50px;
`;

Icon.Testing = styled(testing)`
  width: 50px;
`;

Icon.Star = styled(star)`
  width: 26px;
`;

const StarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
`;

const Text = styled.p`
  text-align: center;
  font-weight: 800;
  line-height: 140%;
  font-size: 1rem;
`;

const Title = styled.h1`
  font-weight: 900;
  letter-spacing: -0.05rem;
  line-height: 120%;
  font-size: 2.5rem;
  text-align: center;
  width: 82%;
  margin: 10px 0;
  @media ${device.mobile}{
    font-size: 22px;
    margin: 20px 0;
  }
`;

const SubTitle = styled.p`
  font-family: "Caveat", handwriting;
  font-weight: 700;
  line-height: 140%;
  font-size: 2.25rem;
  @media ${device.mobile}{
    font-size: 20px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1108px;
  margin: 70px 0 50px 0;
  @media ${device.tablet}{
    width: 80%;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    };
  @media ${device.mobile}{
    width: 98%;
    flex-direction: column;
    gap: 60px;
    align-items: center;
  }
`;

const ClientCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0px 40px 0px rgba(0, 44, 122, 0.13);
  border-radius: 8px;
  width: 352px;
  padding: 0 40px 40px 40px;
`;
const ClientImg = styled.img`
  width: 150px;
  border-radius: 4px;
  margin: -40px 0 20px 0;
`;
const ClientName = styled.p`
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 150%;
`;
const ClientType =styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 15px;
`;
const ClientText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
  color: rgb(77, 82, 86);
`;
const LogoImg = styled.img`
width: 150px;
@media ${device.mobile}{

    margin-top: 10px;
  }
`;
const LogoTitle = styled.p`
  line-height: 140%;
  font-size: 0.875rem;
  font-weight: 700;
  margin: 10px 0 2px 0;
  @media ${device.mobile}{
    font-size: 11px;
  }
`;
const LogoText = styled.p`
  font-weight: 500;
  line-height: 140%;
  font-size: 0.875rem;
  @media ${device.mobile}{
    font-size: 11px;
  }
`; 

export {Container, Main, SectionTop, IconBox, Text, StarWrap, 
  Title, SubTitle, Icon, ClientImg, ClientCard, Wrapper,
  ClientName, ClientType, ClientText, LogoImg, LogoTitle, LogoText}