import React from 'react';
import { Container, Main,  QuesText, Icon, Title, Box,
        Item, Text, Wrapper, AdTitle, AdBox, AdText, AdImg,
        } from './style';
import { Button } from '../Generic';
import { Index } from '../1_HomePage_Intro/style';
import Logo from '../../assets/imgs/mever-flayer.png'
import { useNavigate } from 'react-router-dom';
import { idSelect } from '../Features';
const AbilityPage = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/main/form');
  }
  const abilities = [
    {id: 1,
      icon: <Icon.Sales/>,
      item: 'AI • 3D 컨설팅',
      text: '온라인 방문자를 AI•3D기술로 매출전환까지 일으키는 컨설팅. 1회25만원~'
    },
    {id: 2,
      icon: <Icon.Website/>,
      item: '3D홈페이지 제작',
      text: '산업별•업종별 검증된 3D 홈페이지를 만들어 매출을 일으킵니다.월33만~'
    },
    {id: 3,
      icon: <Icon.Online/>,
      item: 'CEO 교육과정',
      text: 'AI • 3D기술로 온라인 자동 매출을 만드는 방법을 교육합니다. 10강25만원~'
    },
    {id: 4,
      icon: <Icon.Store/>,
      item: '3D 전자칠판•키오스크',
      text: '취급하는 상품 • 서비스를 온라인 3D로 일치시켜 매출을 극대화합니다. 월23만~'
    },
    {id: 5,
      icon: <Icon.Crm/>,
      item: 'AI CRM•ERP•MES',
      text: '각 산업별 필수 솔루션을 AI로 관리하고 연동•진단•해결책을 제공합니다. 월13만~'
    },
    {id: 6,
      icon: <Icon.Landing/>,
      item: '3D 랜딩 페이지',
      text: '당신의 사업에 많은 고객을 유치할 수 있는 3D 랜딩페이지를 만듭니다. 1건100만~'
    },
    {id: 7,
      icon: <Icon.Membership/>,
      item: '1•10•100억 매출도전',
      text: 'CEO매출을 만들어가는 과정을 도전 프로그램으로 코칭 합니다. 매출/지분쉐어~'
    },
    {id: 8,
      icon: <Icon.Email/>,
      item: 'AI 이메일 마케팅',
      text: '당신의 상품•서비스를 이메일 스토리로 발송•도달•관리합니다. 1건 1원~ '
    },
    {id: 9,
      icon: <Icon.Ab/>,
      item: 'A/B 테스트',
      text: '당신의 웹사이트, 3D랜딩페이지, 이메일 캠페인에 A/B 테스트를 실행하세요.'
    },
    {id: 10,
      icon: <Icon.Blog/>,
      item: 'AI 영상 콘텐츠',
      text: '당신의 산업에서 전문가로 인식되도록 AI 영상콘텐츠를 만드세요. 1분 1만원~'
    },
    {id: 11,
      icon: <Icon.Customer/>,
      item: 'AI 고객센터',
      text: '고객 개인 맞춤형 AI 고객센터로 고객 만족도를 높이세요. 1 Call 1천원~'
    },
    {id: 12,
      icon: <Icon.Analytics/>,
      item: 'DB 통계•분석',
      text: '비즈니스 성장에 꼭 필요한 모든 데이터를 AI 통계분석으로 앞서가세요.'
    },
    {id: 13,
      icon: <Icon.Click/>,
      item: 'AI 고객센터',
      text: '메버의 특허출원 HW•SW 모든 기술들을 API로 연동하여 제공합니다.'
    },
    {id: 14,
      icon: <Icon.Work/>,
      item: 'AI 워크플로우',
      text: '3D마케팅 AI자동화를 위해 강력한 AI 워크플로우를 만들어 보세요.'
    },
    {id: 15,
      icon: <Icon.Global/>,
      item: '글로벌 제품',
      text: '각 국가별 마케팅와 글로벌 진출을 위해 현지인 AI 마케팅을 준비해보세요.'
    },
    {id: 16,
      icon: <Icon.Shopping/>,
      item: '멘토 CEO들의 코칭',
      text: '1조(유니콘)•10조(데카콘)•100조(헥토콘) 기업 CEO들의 코치를 받습니다.'
    },
  ]
  return (
    <Container>
      <Main>
        <Title>『메버』는 CEO들이 온라인 성공에 <br /> 필요한 모든 것을 제공합니다.</Title>
        <QuesText>고객이 온•오프라인을 찾아 소비하게 만드는 메버! <br /> SW•HW 『특허 솔루션』을 압도적으로 선사합니다.</QuesText>
        <Wrapper>
            
            {abilities.map((ability)=>(
              <Box key={ability.id} onClick={()=>{
                navigate('/main/features')
                idSelect.push(ability.id)
              }}>
              {ability.icon}
              <Item>{ability.item}</Item>
              <Text>{ability.text}</Text>
            </Box>
            ))}
        </Wrapper>
        <AdBox>
          <AdImg src={Logo}/>
          
          <AdTitle>메버는 업계에서 『제일 비쌉니다!』</AdTitle>
          {window.innerWidth <= 414 ?
                <AdText>세계 최고의 명품은 높은 가격만큼  희소성•<br />가치성•환급성이 높습니다. 메버 또한 <br /> 업계에서 똑같이 증명하고 있습니다!</AdText> :
                <AdText>세계 최고의 명품은 높은 가격만큼 희소성•가치성•환급성이 높습니다. 메버 또한 업계에서 똑같이 증명하고 있습니다!</AdText>
          }
          <Button onClick={onClick} >CEO를 위한, 1:1 맞춤 견적</Button>
          <Index color='#b6c6d6' >약정 계약 없음 • 언제든지 해지 가능</Index>
        </AdBox>
      </Main> 
    </Container>
  )
}

export default AbilityPage;

