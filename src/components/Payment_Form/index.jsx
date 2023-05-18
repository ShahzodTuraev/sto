import React, {useEffect, useState} from 'react';
import { Alert, Container, Main, Title, Text, Wrapper, Coution, Icon, CardBox, MainWrapper, TextBox, Head, IconWrap, IconText, Awrap, Img, InputWrap } from './style';
import { Input, Button } from '../Generic';
import Logo from '../../assets/imgs/mever-flayer.png'
import { Bottom, Top } from '../Generic/transform';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import axios from 'axios';

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // form state alert state:
  const [nameAlert, setNameAlert] = useState('');
  const [emailAlert, setEmailAlert] = useState('');

  const clientKey = 'test_ck_OyL0qZ4G1VOmmAG4JOP8oWb2MQYg';
  // product name and payment amount come from pricing page according to the choice:
  const productName = localStorage.getItem('productName');
  const paymentAmount = Number(localStorage.getItem('paymentAmount'))
  const period = localStorage.getItem('period');
  const type = localStorage.getItem('type');
  // client email adress come from main initial page :
  const [emailReplace, setEmailReplace] = useState(localStorage.getItem('mainEmail'));
  const [customerName, setCustomerName] = useState('')
  // data input onChange functions:
  const onChangeEmail = (e) => {
    setEmailReplace(e.target.value)
  };
  const onChangeName =(e) => {
    setCustomerName(e.target.value)
  }

  // async/await을 사용하는 경우

  async function toss_go() {
    const tossPayments = await loadTossPayments(clientKey);
    if(type === 'BILLING'){
      axios.post('https://api.mever.me:8080/autoPayment', JSON.stringify({
        payType: '카드',
        totalAmount: `${paymentAmount}`,
        orderName: `${productName}`,
        name: `${customerName}`,
        email: `${emailReplace}`,
        period: `${period}`,
      }),{
        headers: {
          'Content-Type': 'application/json',
        },
    })
        .then((res) => {
          tossPayments.requestBillingAuth('CARD', {
            customerKey: res.data.customerKey,
            authKey: res.data.authKey,
            amount: res.data.totalAmount,
            orderId: res.data.orderId,
            orderName: res.data.orderName,
            name: res.data.name,
            email: res.data.email,
            successUrl: 'https://api.mever.me:8080/autoSuccess?url=https://mever.me/',
            failUrl: 'http://api.mever.me:8080/fail',
          });
        })
        .catch((error) => {
          alert(error.message);
        });
    }else{
        
        axios.post('https://api.mever.me:8080/payment', {
          payType: '카드',
          // https://api.mever.me:8080/paymentList
          totalAmount: `${paymentAmount}`,
          orderName: `${productName}`,
          name: `${customerName}`,
          email: `${emailReplace}`,
        })
          .then((res) => {
            tossPayments.requestPayment('카드', {
              amount: res.data.totalAmount,
              orderId: res.data.orderId,
              orderName: res.data.orderName,
              name: res.data.name,
              email: res.data.email,
              successUrl: 'https://api.mever.me:8080/success?url=https://mever.me/',
              failUrl: 'http://api.mever.me:8080/fail',
            });
          })
          .catch((error) => {
            alert(error.message);
          });
    }

    // tossPayments.requestPayment('카드', {
    //   amount: `${paymentAmount}`,
    //   orderId: 'AoARhnV12hjn_mbxAzvqV111',
    //   orderName: `${productName}`,
    //   customerName: `${customerName}`,
    //   successUrl: 'http://localhost:8080/success',
    //   failUrl: 'http://localhost:8080/fail',
    // })
  }
  // payment start button
  const onClick = async () => {
    if(customerName.length > 0 
      && emailReplace.length > 4 
      && emailReplace.includes('@', '.')){
        toss_go();
      }else{
        if(customerName.length === 0){setNameAlert('입력한 성명를 확인해주세요!')}
        if(emailReplace.length < 4 || !emailReplace.includes('@', '.')){setEmailAlert('입력한 이메일 주소를 확인해주세요!')}
      }
  }
// if focus on input, alert gets lost
  const onFocusName =()=>{setNameAlert('')};
  const onFocusEmail =()=>{setEmailAlert('')};

  return (
    <Container>
      <Top/>
      <Bottom/>
      <Img src={Logo}/>
      <MainWrapper>
        {/* payment input form */}
        <Main>
          <Title>간단 결제 후 시작</Title>
          <Wrapper>
            <InputWrap>
              <Input onChange={onChangeName} onFocus={onFocusName} placeholder='성명'/>
              <Alert>{nameAlert}</Alert>
            </InputWrap>
            <InputWrap>
              <Input onChange={onChangeEmail} onFocus={onFocusEmail} value = {emailReplace} placeholder='이메일 주소'/>
              <Alert>{emailAlert}</Alert>
            </InputWrap>
            <Button onClick={onClick} type={'step'}>결제하기</Button>
          </Wrapper>
          {/* <Wrapper style={{marginTop: '15px'}}>
            <InputWrap>
              <Input onChange={onChangeName} onFocus={onFocusName} placeholder='성명'/>
              <Alert>{nameAlert}</Alert>
            </InputWrap>
            <InputWrap>
              <Input onChange={onChangeEmail} onFocus={onFocusEmail}  placeholder='cash'/>
              <Alert>{emailAlert}</Alert>
            </InputWrap>
            <Button onClick={onClick} type={'step'}>결제하기</Button>
          </Wrapper> */}
          <Coution>결제 후 이용 (관련 세금 별도). 대시보드 또는 이메일(sm@mever.me)을 통해 취소하십시오. 또한 서비스 약관, 개인 정보 보호 정책 및 제휴 계약에 동의합니다.</Coution>
        </Main>
        {/* left side page */}
        <TextBox>
          <Head> 메버와 함께 성공하는 CEO가 되세요!</Head>
          <IconWrap>
            <IconWrap>
              <Icon.Check/>
              <IconText>누구나 쉽게 사용</IconText>
            </IconWrap>
            <IconWrap>
              <Icon.Check/>
              <IconText>AI 3D 신기술로</IconText>
            </IconWrap>
            <IconWrap>
              <Icon.Check/>
              <IconText>매출성장을 무한하게</IconText>
            </IconWrap>
          </IconWrap>
          <CardBox>
            <Text>계획</Text>
            <Awrap>
              <IconText>프로 월간</IconText>
              <IconText>0원 오늘 마감</IconText>
            </Awrap>
            <Text>결제 후 시작(관련 세금 별도)</Text>
          </CardBox>
          <IconWrap>
            <IconWrap>
              <Icon.Secure/>
              <Text>안전한 SSL 결제 보안 서버에 저장된 결제 데이터</Text>
            </IconWrap>
            <IconWrap>
              <Icon.Guarantee/>
              <Text>환불 보증 평가판 종료 후 30일 동안</Text>
            </IconWrap>
          </IconWrap>
        </TextBox>
      </MainWrapper>
      
    </Container>
  )
}

export default Payment
