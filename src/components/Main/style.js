import styled from "styled-components";
import {device} from "../Generic/responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient( #E0ECFB, #F4F9FC);
  min-height: 100vh;
  padding-top: 30px;
  `;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1170px;
  width: 100%;
  padding: 20px 0;
  @media ${device.tablet}{
    max-width: 820px;
    width: 100%;  
  }
  `;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  @media ${device.mobile}{
    font-size: 28px;
  }
`;
const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin: 8px 0;
  @media ${device.mobile}{
    font-size: 16px;
  }
`;

const VideoBox = styled.div`
  width: 80%;
  height: 530px;
  margin-bottom: 30px;
  @media ${device.tablet}{
    width: 80%;
    height: 380px;
  };
  @media ${device.mobile}{
    width: 90%;
    height: 210px;
  }
  `;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 8px 12px;
  background: #0E3B68;
  margin: 5px 0 20px 0;
  border-radius: 9px;
  position: relative;
  @media ${device.tablet}{
    width: 80%;
  }
  @media ${device.mobile}{
    width: 90%;
  }
`;
const InputTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #FFFFFF;
  color: ${({color})=>(color ? `${color}` : '#FFF')};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 15px;
  width: 100%;
  gap:15px;
  @media ${device.tablet}{
    flex-direction: column;
  };
`;
const InputWrap = styled.div`
  display: flex;
  width: 55%;
  gap: 20px;
  @media ${device.tablet}{
    flex-direction: column;
  }
  @media ${device.mobile}{
    width: 90%;
  };
`;
const AlertEmail =styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
  position: absolute;
  top: 80px;
  left: 2rem;
  @media ${device.tablet}{
    top: 4.55rem;
    left: 15rem;
  }
  @media ${device.mobile}{
    left: 5.5rem;
  }
`;

const AlertTel =styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
  position: absolute;
  top: 80px;
  left: 18.4rem;
  @media ${device.tablet}{
    top: 8rem;
    left: 15rem;
  }
  @media ${device.mobile}{
    left: 5.5rem;
  }
  `;

  const AlertCheck = styled.p`
    color: red;
    font-size: 14px;
    text-align: center;
    position: absolute;
    top: 80px;
    left: 34rem;
    @media ${device.tablet}{
      top: 10.8rem;
      left: 15rem;
    }
    @media ${device.mobile}{
      left: 5.5rem;
    }
  `;
  const DownTitle = styled.p`
  margin-top: 30px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  `;

  const Phone = styled.a`
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    margin: 8px 0;
    @media ${device.mobile}{
      font-size: 16px;
    }
  `;

export {Container, Main, Title, Text, VideoBox, InputBox, DownTitle, Phone,
      InputTitle, Wrapper, InputWrap, AlertCheck, AlertEmail, AlertTel };