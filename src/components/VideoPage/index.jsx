import React from 'react';
import ReactPlayer from 'react-player';

import {Container, Main} from './style';

const VideoPage = () => {
const src = 'https://youtu.be/mWSVB7FMmoE' ;

  return (
    <Container>
      <Main>
      <ReactPlayer 
      controls 
      width={'100%'} 
      height={'665px'} 
      url={`${src}`}>
      </ReactPlayer>
      </Main>
      
    </Container>
    

  )
}

export default VideoPage;

