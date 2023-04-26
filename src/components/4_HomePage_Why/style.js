import styled from "styled-components";
import {ReactComponent as cancel} from '../../assets/icons/icons-cancel.svg'
import {ReactComponent as check} from '../../assets/icons/check.svg'
import {device} from '../Generic/responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(to bottom right, #DEEAFA, var(--color-6Z-dzM8-3));
`;
  const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
  margin: 70px 0;
  @media ${device.mobile}{
    margin: 30px;
  }
`;

const Introbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet}{
    flex-direction: column;
    gap: 30px;
  };
  @media ${device.mobile}{
    flex-direction: column;
    gap: 30px;
  }
`;

const IntroTextBox = styled.div`
  width: 45%;
  @media ${device.tablet}{
    width: 90%;
  };
  @media ${device.mobile}{
    width: 84%;
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
    margin-bottom: 35px;
  };
  @media ${device.mobile}{
    font-size: 26px;
  }
`;
const IntroImg = styled.img`
  width: 520px;
  @media ${device.mobile}{
    width: 330px;
  }
`;
const IntroText = styled.p`
  color: rgb(77, 82, 86);
  font-size: 1.125rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 150%;
  margin: 10px 0;
  @media ${device.mobile}{
    font-size: 17px;
  }
`;
const IntroUnit = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 150%;
  @media ${device.mobile}{
    font-size: 17px;
  }
`;
const Title = styled.h1`
  font-weight: 900;
  letter-spacing: -0.05rem;
  line-height: 120%;
  font-size: 3rem;
  text-align: center;
  width: 60%;
  margin: 50px 0 20px 0;
  @media ${device.tablet}{
    width: 85%;
  };
  @media ${device.mobile}{
    font-size: 29px;
    width: 90%;
  }
`;

const SubTitle = styled.p`
  color: rgb(77, 82, 86);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  width: 54%;
  @media ${device.tablet}{
    width: 90%;
  };
  @media ${device.mobile}{
    font-size: 17px;
    width: 90%;
  }
`;

const CompareWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 40px 0;
  @media ${device.tablet}{
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 90%;
  };
  @media ${device.mobile}{
    flex-direction: column;
    gap: 30px;
    width: 90%;
  }
`;
const CompareBox = styled.div`
  background: #fff;
  box-shadow: 0px 0px 40px 0px rgba(0, 44, 122, 0.1);
  border-radius: 8px;
  width: 48.6%;
  padding: 25px 36px;
  @media ${device.tablet}{
    width: 90%;
  };
  @media ${device.mobile}{
    width: 100%;
  }
`;

const CompareTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 900;
  letter-spacing: -0.05rem;
  line-height: 120%;
  text-align: center;
  margin-bottom: 20px;
  @media ${device.mobile}{
    font-size: 22px;
  }
`;

const Icon = styled.div``;

Icon.Cancel = styled(cancel)`
  width: 18px;
  height: 18px;
`;
Icon.Check = styled(check)`
  width: 18px;
  height: 18px;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`;

const Shorts = styled.p`
  color: rgb(77, 82, 86);
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 150%;
  @media ${device.mobile}{
    font-size: 15px;
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
    font-size: 32px;
  };
  @media ${device.mobile}{
    font-size: 14px;
  }
`;

const AdHead = styled.h1`
  font-weight: 900;
  letter-spacing: -0.05rem;
  line-height: 120%;
  font-size: 2rem;
  text-align: center;
  margin: 10px 0 30px 0;
  @media ${device.tablet}{
    width: 90%;
  };
  @media ${device.mobile}{
    font-size: 22px;
    width: 90%;
  }
`;

export {Container, Main, Introbox, IntroTextBox, IntroTitle, IntroImg, 
  IntroText, IntroUnit, Title, SubTitle, CompareWrapper, CompareBox, 
  CompareTitle, Icon, IconBox, Shorts, QuesText, AdHead}