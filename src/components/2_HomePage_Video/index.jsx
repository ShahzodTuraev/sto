import React from 'react'
import { Container, IconPlay, Main, Section, Text,  Wrapper } from './style'
import iconPlay from '../../assets/icons/play.svg'
import ReactPlayer from 'react-player';


const VideoPage = () => {
  return (
    <Container>
      <Main>
        <Section>
          <IconPlay src= {iconPlay} />
          <Text>아래 비디오에서 메버에 대해 더 자세히 알아보시고 AI 3D 기술을 천천히 둘러보세요!</Text>
        </Section>
        <Wrapper>
          <ReactPlayer width={'100%'} height={'100%'} url={'https://youtu.be/2slWcfxpFPg'}></ReactPlayer>
        </Wrapper>
      </Main> 
    </Container>

  )
}

export default VideoPage
