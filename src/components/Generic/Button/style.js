import styled from "styled-components";
const getType = ({type})=>{
  switch(type){
    case 'small':
      if(window.innerWidth > 414){
        return {
        height: '37px',
        width: '155px',
        fontSize: '16px'
        };
      } break;
    case 'large':
      if(window.innerWidth<= 414){
        return {
          height: '58px',
          fontSize: '19px',
          width: '320px'
        }
      } else{
        return {
          height: '74px',
          fontSize: '24px',
          width: '408px'
        }
      }
    case 'step':
      if(window.innerWidth <= 414){
        return{
          width: '100%',
          height: '40px',
          boxShadow: '0px 4px 8px 0px rgba(0, 28, 56, 0.15)',
          fontSize: '18px',
        }
      }else{
        return {
          width: '440px',
          height: '66px',
          boxShadow: '0px 4px 8px 0px rgba(0, 28, 56, 0.15)',
          fontSize: '24px',
      }
      }
      
      case 'main':
        return {
          width: '200px',
          height: 'auto',
          boxShadow: '0px 4px 8px 0px rgba(0, 28, 56, 0.15)',
          fontSize: '15px',
          padding: '5px 16px'
        }
    case 'sto':
      return {
        width: '110px',
        height: '70px',
        boxShadow: '0px 4px 8px 0px rgba(0, 28, 56, 0.15)',
        fontSize: '15px',
        padding: '0 16px'
      }  
    case 'price':
      return {
        height: '50px',
        fontSize: '18px',
        padding: '0 20px',
        boxShadow: '0px 4px 8px 0px rgba(0, 28, 56, 0.15)',
        width: '100%'
      } 

    case 'full':
      if(window.innerWidth <= 414){
        return{
          fontSize: '20px',
          padding: '0 20px',
          boxShadow: '0px 4px 8px 0px rgba(0, 28, 56, 0.15)',
          height: '60px',
          width: '100%'
        }
      }else{
        return {
          height: '50px',
          fontSize: '20px',
          padding: '0 20px',
          boxShadow: '0px 4px 8px 0px rgba(0, 28, 56, 0.15)',
          width: '100%'
      }
      }
    default:
      if(window.innerWidth<= 414){
        return {
          height: '45px',
          fontSize: '14px',
          padding: '0 20px',
        }
      } else{
        return {
          height: '50px',
          fontSize: '18px',
          padding: '0 20px',
        }
      }
      
  }
};
const Container = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Gowun Dodum', sans-serif;
  border-radius: 3px;
  border: none;
  color: var(--color-6Z-dzM8-5);
  background: var(--color-6Z-dzM8-7);
  font-weight: 900;
  box-shadow: 0px 4px 16px 2px rgba(0, 44, 122, 0.2);
  width: ${({width})=>(width ? `${width}` : 'auto')};
  border: 1px solid rgba(0, 0, 0, 0.13);
  transition: all 0.2s;
  cursor: pointer;
  &:hover{
    background: rgba(1, 116, 199, 0.6);
  }
  ${getType}
`
export {Container}