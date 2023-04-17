import styled from "styled-components";
import {device} from "../Generic/responsive"
import {ReactComponent as sales} from '../../assets/icons/Sales-Funnels.svg';
import {ReactComponent as website} from '../../assets/icons/Websites.svg';
import {ReactComponent as online} from '../../assets/icons/Online-Courses.svg';
import {ReactComponent as store} from '../../assets/icons/E-Commerce-Store.svg';
import {ReactComponent as crm} from '../../assets/icons/CRM.svg';
import {ReactComponent as landing} from '../../assets/icons/Landing-Pages.svg';
import {ReactComponent as membership} from '../../assets/icons/Membership-Sites.svg';
import {ReactComponent as email} from '../../assets/icons/Email-Marketing.svg';
import {ReactComponent as ab} from '../../assets/icons/AB-Testing.svg';
import {ReactComponent as blog} from '../../assets/icons/Blog.svg';
import {ReactComponent as customer} from '../../assets/icons/Customer-Center.svg';
import {ReactComponent as analytics} from '../../assets/icons/Analytics box.svg';
import {ReactComponent as click} from '../../assets/icons/ClickFunnels-Editor.svg';
import {ReactComponent as work} from '../../assets/icons/icon-workflow.svg';
import {ReactComponent as global} from '../../assets/icons/Global-Products.svg';
import {ReactComponent as shopping} from '../../assets/icons/Shopping-Cart.svg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
  const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  width: 100%;
`;

const Icon = styled.div``;
Icon.Sales = styled(sales)`
  width:35px;
  height: 35px;
`;
Icon.Website = styled(website)`
  width:35px;
  height: 35px;
`;
Icon.Online = styled(online)`
  width:35px;
  height: 35px;
`;
Icon.Store = styled(store)`
  width:35px;
  height: 35px;
`;
Icon.Crm = styled(crm)`
  width:35px;
  height: 35px;
`;
Icon.Landing = styled(landing)`
  width:35px;
  height: 35px;
`;
Icon.Membership = styled(membership)`
  width:35px;
  height: 35px;
`;
Icon.Email = styled(email)`
  width:35px;
  height: 35px;
`;
Icon.Ab = styled(ab)`
  width:35px;
  height: 35px;
`;
Icon.Blog = styled(blog)`
  width:35px;
  height: 35px;
`;
Icon.Customer = styled(customer)`
  width:35px;
  height: 35px;
`;
Icon.Analytics = styled(analytics)`
  width:35px;
  height: 35px;
`;
Icon.Click = styled(click)`
  width:35px;
  height: 35px;
`;
Icon.Work = styled(work)`
  width:35px;
  height: 35px;
`;
Icon.Global = styled(global)`
  width:35px;
  height: 35px;
`;
Icon.Shopping = styled(shopping)`
  width:35px;
  height: 35px;
`;

const Title = styled.h1`
  font-weight: 900;
  letter-spacing: -0.05rem;
  line-height: 120%;
  font-size: 2.5rem;
  text-align: center;
  width: 60%;
  margin-bottom: 20px;
  @media ${device.tablet}{
    width: 87%;

  }
  @media ${device.mobile} { 
    font-size:26px;
    width: 90%;
  }
`;

const QuesText = styled.p`
  text-align: center;
  color: rgb(29, 46, 59);
  font-family: "Caveat", handwriting;
  font-weight: 700;
  line-height: 140%;
  font-size: 1.5rem;
  @media ${device.mobile} { 
    font-size:15px;
  }
`;
const Wrapper = styled.div`
  margin: 70px 0 80px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 202px;
width: 292px;
padding: 30px 15px;
gap: 12px;
cursor: pointer;
transition: all 0.1s;
&:hover{
  background:var(--color-6Z-dzM8-3)
}
@media ${device.mobile} { 
    width: 170px;
  }
`;

const Item = styled.p`
  font-weight: 900;
  line-height: 140%;
  font-size: 1.1875rem;
  border-bottom: 1px solid rgba(28, 188, 255, 0.5);
  &:hover{
  color:var(--color-6Z-dzM8-7)
  };
  @media ${device.mobile} { 
    font-size:14.8px;
  }
`;

const Text = styled.p`
  color: rgb(77, 82, 86);
  font-weight: 400;
  line-height: 150%;
  font-size: 1rem;
  text-align: center;
  @media ${device.mobile} { 
    font-size: 12px;
  }
`;

const AdBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0E3B68;
  border-radius: 9px;
  width: 90%;
  padding: 40px 50px;
  @media ${device.tablet}{
    padding: 40px;
  }
  @media ${device.mobile} { 
    padding: 30px;
  }
`;

const AdTitle = styled.h1`
  font-weight: 900;
  letter-spacing: -0.05rem;
  line-height: 120%;
  font-size: 2.5rem;
  text-align: center;
  color: #FFFFFF;
  @media ${device.tablet}{
    font-size: 2.25rem;
  }
  @media ${device.mobile} { 
    font-size: 21px;
  }
`;
const AdText = styled.p`
  color: rgb(255, 255, 255);
  line-height: 140%;
  font-size: 1.25rem;
  text-align: center;
  margin: 20px 0;
  @media ${device.mobile} { 
    font-size: 1rem;
  }
`;
const AdImg = styled.img`
  width: 260px;
  height: auto;
  margin: -70px 0 30px 0;
  @media ${device.mobile} { 
    width: 220px;
    margin: -50px 0 20px 0;
  }

`;

export {Container, Main, Icon, Title, QuesText, Wrapper,  Box, 
        Item, Text, AdTitle, AdBox, AdText, AdImg}