import React, {useEffect} from 'react';
import { Container, Icon, Main, Tit, Text, VideoBox, Section, VideoTitle} from './style';
import {Button} from '../Generic';
import {Index} from '../1_HomePage_Intro/style';
import { useNavigate } from 'react-router-dom';
import { FirstBottom,  FirstTop } from '../Generic/transform';
import ReactPlayer from 'react-player';
export const idSelect = [];
const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const onClick = ()=>{
    navigate('/form/step-1')
  }
  const abilityContent = [
    {id: 1,
      subtitle: 'AI•3D 이상민 CEO컨설팅',
      title: '30억 빚을 300억으로 진단+해결 1:1컨설팅.',
      text: '우리는 전문 컨설턴트가 아닙니다. 전문 강사도 아닙니다. 오직 현장에서 17년간 크고 작은 실패와 성공으로 체화된 경험을 AI•3D 기술로 자동화시키는 개발자들입니다. 저희가 했다면, 당신도 할 수 있습니다. 아니, 그 이상도 가능합니다. 진단+해결의 주옥같은 코칭으로 사업의 판도를 바꿔보세요. 명쾌한 인사이트를 예약하세요.',
      button: '이상민 1:1 컨설팅 예약하기',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 2,
      subtitle: '3D 홈페이지 마케팅',
      title: '고객과 매출이 늘어나는 기술! 3D웹사이트!',
      text: '온라인 마케팅을 모르는 분도, 이미 온라인 마케팅에 수 많은 시행착오를 하시는 분도, 한결같이 하는 말! "3D홈페이지 자체가 마케팅이다!" 라고 합니다. 물론 마케팅은 핵심 카피, 컨텐츠 스토리, 훌륭한 상품서비스 등 수 많은 조건들이 뒤 따라야 합니다. 하지만, 분명한 것은 3D페이지 첫 3초로 고객은 귀사의 브랜드에 반합니다.',
      button: '3D 홈페이지 마케팅 예약하기',
      videoSrc: 'https://youtu.be/tjRCSwnrAv4'
    },
    {id: 3,
      subtitle: '실전 온•오프라인 CEO 교육과정',
      title: '오직 CEO를 위한 AI•3D활용 실전교육.',
      text: '다시한번 말씀 드리지만, 우리는 전문 강사가 아닙니다. 오직 현장에서 17년간 크고 작은 실패와 성공으로 AI•3D 기술로 30억 빚을 300억 회사의 성공 스토리를 10강으로 100% 공개합니다. 저희가 했다면, 당신도 할 수 있습니다. 아니, 그 이상도 가능합니다. 10주 온/오프라인 강의로 사업의 판도를 바꿔보세요.',
      button: '온•오프라인 CEO 교육과정 바로가기',
      videoSrc: 'https://youtu.be/SiFwsbWTKrY'
    },
    {id: 4,
      subtitle: 'AI•3D 이상민 CEO컨설팅',
      title: '30억 빚을 300억으로 진단+해결 1:1컨설팅.',
      text: '우리는 전문 컨설턴트가 아닙니다. 전문 강사도 아닙니다. 오직 현장에서 17년간 크고 작은 실패와 성공으로 체화된 경험을 AI•3D 기술로 자동화시키는 개발자들입니다. 저희가 했다면, 당신도 할 수 있습니다. 아니, 그 이상도 가능합니다. 진단+해결의 주옥같은 코칭으로 사업의 판도를 바꿔보세요. 명쾌한 인사이트를 예약하세요.',
      button: '이상민 1:1 컨설팅 예약하기',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 5,
      subtitle: '',
      title: '',
      text: '',
      button: '',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 6,
      subtitle: '',
      title: '',
      text: '',
      button: '',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 7,
      subtitle: '',
      title: '',
      text: '',
      button: '',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 8,
      subtitle: '',
      title: '',
      text: '',
      button: '',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 9,
      subtitle: '',
      title: '',
      text: '',
      button: '',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 10,
      subtitle: '',
      title: '',
      text: '',
      button: '',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 11,
      subtitle: '',
      title: '',
      text: '',
      button: '',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 12,
      subtitle: '',
      title: '',
      text: '',
      button: '',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 13,
      subtitle: '',
      title: '',
      text: '',
      button: '',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 14,
      subtitle: '',
      title: '',
      text: '',
      button: '',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 15,
      subtitle: '',
      title: '',
      text: '',
      button: '',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
    {id: 16,
      subtitle: '',
      title: '',
      text: '',
      button: '',
      videoSrc: 'https://youtu.be/I_3DA2cWPfI'
    },
  ]
  const selectedId =abilityContent[idSelect[idSelect.length - 1]-1];
  return (
    <Container>
      <FirstTop/>
      <FirstBottom/>
        <Main>
        <Text>{selectedId.subtitle}</Text>
        <Tit>{selectedId.title}</Tit>
        <Text>{selectedId.text}</Text>
        <Button onClick={onClick} type='large'>{selectedId.button} </Button>
        <Index>의무 사항 없음 • 언제든지 취소 가능</Index>
        <Section>
          <Icon.Play/>
          <VideoTitle>아래 비디오에서 메버에 대해 더 자세히 알아보시고 AI 3D 기술을 천천히 둘러보세요!</VideoTitle>
        </Section>
        <VideoBox>
        <ReactPlayer controls width={'100%'} height={'100%'} url={selectedId.videoSrc}></ReactPlayer>
        </VideoBox>
    </Main>
    

      
    </Container>
  )
}

export default Features






























