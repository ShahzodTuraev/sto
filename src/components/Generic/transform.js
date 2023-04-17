import styled, { keyframes } from 'styled-components';
const expand = keyframes`
  0% {
    height: 100%;
  }

  100% {
    height: 0;
  }
`;

const Top = styled.div`
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: #202020;
  transform: translateY(-50%);
  animation: ${expand} 0.25s ease-out;
  animation-delay: ${({animationDelay}) => (animationDelay? `${animationDelay}` : '0')};
  z-index: 2;
`;
const Bottom = styled.div`
  position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  height:0%;
  background-color: #202020;
  transform: translateY(-50%);
  animation: ${expand} 0.25s ease-out;
  animation-delay: ${({animationDelay}) => (animationDelay? `${animationDelay}` : '0')};

  z-index: 2;
`;

const expandClose = keyframes`
  0% {
    height: 0;
  }

  100% {
    height: 100%;
  }
`;

const TopClose = styled.div`
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  height: 101%;
  background-color: #202020;
  transform: translateY(-50%);
  animation: ${expandClose} 0.25s ease-out ;
  ;
  z-index: 2;
`;
const BottomClose = styled.div`
  position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  height:101%;
  background-color: #202020;
  transform: translateY(-50%);
  animation: ${expandClose} 0.25s ease-out;
  z-index: 2;
`;

const firstTop = keyframes`
0% {
  height: 0%;
  transform: translateY(0)
  }
  33.33% {
    height: 101%;
    transform: translateY(-50%)
  }
  66.67% {
    height: 101%;
    transform: translateY(-50%)
  }
  100% {
    height: 0%;
    transform: translateY(0)
  }
` ;
const firstTop1 = keyframes`
0% {
  height: 0%;
  transform: translateY(0)
  }
  33.33% {
    height: 100%;
    transform: translateY(-50%)
  }
  66.67% {
    height: 100%;
    transform: translateY(-50%)
  }

  100% {
    height: 0%;
    transform: translateY(0)
  }
` ;

const FirstTop = styled.div`
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  background-color: #202020;
  z-index: 2;
  animation: ${firstTop} 0.75s ease-out;
`;
const FirstBottom = styled.div`
  position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #202020;
  z-index: 2;
  animation: ${firstTop1} 0.75s ease-out;
`;


export { Top, Bottom, TopClose, BottomClose, FirstTop, FirstBottom}