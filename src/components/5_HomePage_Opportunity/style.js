import styled from "styled-components";
import {ReactComponent as down} from '../../assets/icons/arrows-down.svg'
import {ReactComponent as right} from '../../assets/icons/arrow-right.svg'
import {device} from '../Generic/responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient( #DEEAFA, var(--color-6Z-dzM8-5));
`;
  const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  margin-top: 70px;
`;

const Introbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  @media ${device.tablet}{
    justify-content: center;
  };
  @media ${device.mobile}{
    justify-content: center;
  }
`;

const IntroTextBox = styled.div`
  width: 45%;
  @media ${device.tablet}{
    width: 90%;
  };
  @media ${device.mobile}{
    width: 90%
  }
`;
const IntroTitle = styled.h1`
  font-weight: 900;
  letter-spacing: -0.05rem;
  line-height: 120%;
  font-size: 2.5rem;
  margin-bottom: 20px;
  @media ${device.tablet}{
    text-align: center;
    font-size: 36px;
  }
  @media ${device.mobile}{
    font-size: 26px;
    text-align: center;
  }
`;

const IntroImg = styled.img`
  width: 520px;
  @media ${device.tablet}{
    display: none;
  };
  @media ${device.mobile}{
    display: none;
  }
`;
const TabletImg = styled.img`
  display: none;
  @media ${device.tablet}{
    width: 516px;
    display: block;
    margin: 0 auto;
  }
  @media ${device.mobile}{
    display: none;
  }
`;

const ResponsiveImg = styled.img`
  display: none;
  @media ${device.mobile}{
    width: 330px;
    display: block;
  }
  
`
const IntroText = styled.p`
  color: rgb(77, 82, 86);
  font-size: 1.125rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 150%;
  margin: 10px 0;
  @media ${device.mobile}{
    font-size: 14px;
  }
`;
const QuesText = styled.p`
  text-align: center;
  color: rgb(29, 46, 59);
  font-family: "Caveat", handwriting;
  font-weight: 700;
  line-height: 140%;
  font-size: 2.25rem;
  @media ${device.tablet}{
    font-size: 22px;
  }
  @media ${device.mobile}{
    font-size: 22px;
    width: 90%;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  letter-spacing: -0.05rem;
  line-height: 120%;
  font-size: 2.5rem;
  text-align: center;
  margin: 20px 0;
  width: 80%;
  @media ${device.mobile}{
    font-size: 25px;
    width: 90%;
  }
`;
const AdHead = styled.h1`
  font-weight: 600;
  letter-spacing: -0.05rem;
  line-height: 120%;
  font-size: 2rem;
  text-align: center;
  @media ${device.mobile}{
    font-size: 21px;
  }
`;

const Icon = styled.div``;

Icon.Down = styled(down)`
  width: 175px;
  height: 33px;
  margin: 20px 0 35px 0;
`;
Icon.Right = styled(right)`
  height: 18px;
  width: auto;
  margin-right: 10px;
`;
const BrandImg = styled.img`
  width: 198px;
  height: 50px;
  margin-top: 5px;
  @media ${device.tablet}{
    margin: 15px 0;
  }
  @media ${device.mobile}{
    margin: 15px 0;
  }
`;
const FunctionCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  padding: 50px 60px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 0px 30px 0px rgba(0, 44, 122, 0.13);
  background: #ffffff;
  margin-bottom: 30px;
  @media ${device.tablet}{
    flex-direction: column;
    align-items: center;
    padding: 15px;
  
  }
  @media ${device.mobile}{
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
  }
`;
const Suptitle = styled.p`
  color: var(--color-6Z-dzM8-7);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 140%;
`;

const BoxUnit = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 20px;
`;

const CanWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 15px;
  @media ${device.tablet}{
    justify-content: start;
  }
`;
const CanText = styled.p`
  color: rgb(77, 82, 86);
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%;
`;
const CanImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45.5%;
  @media ${device.mobile}{
    width: 90%;
  }
`;
const CanImg = styled.img`
  width: 90%;
  margin: 20px;
  @media ${device.mobile}{
    width: 300px;
  }
`;

export {Container, Main, Introbox, IntroTextBox, IntroTitle, BrandImg, IntroImg, 
  IntroText, Title, Icon, QuesText, AdHead, ResponsiveImg, TabletImg,
  FunctionCard, Suptitle, BoxUnit, CanWrapper, CanText, CanImgBox, CanImg
}