import React from 'react';
import {  Container,  Main,  Title,} from './style';
import { Collapse } from 'antd';
const { Panel } = Collapse;
const text1 = `
  아닙니다. 메버의 모든 AI 소프트웨어, 3D 하드웨어의 업데이트는 평생 무료로 진행됩니다. 
`;

const text2 = `
  안전합니다. 우리는 AI정보기반 조직으로서 각 국가별 정보통신법을 따르며, 최고등급 보안으로 안전하게 관리됩니다.
`;

const text3 = `
  소프트웨어의 의무계약기간은 없습니다. 단, 하드웨어(전자칠판,키오스크 등)는 할부가격이 포함되어 있어서 36개월 약정이 있을 수 있습니다. 물론 일시불 할인은 10%가능합니다.
`;

const text4 = `
  네 AI 고객센터가 운영되고 있고, 언제든 CEO를 위한 전문 코칭인력이 배치되어 온.오프라인 소통이 가능합니다.  
`;

const text5 = `
  계정 탈퇴시 모든 계정은 일정기간 보관 후 자동 삭제됩니다. 모든 데이터는 안전하게 관리.삭제될 수 있게 운영됩니다. 
`;

const text6 = `
  각 조직에서 사용하고 있는 SW HW 시스템과 메버 SW HW 시스템을 함께 연동 관리할 수 있습니다. 단 추가 연동개발에 관한 비용은 나올 수 있습니다.
`;

const text7 = `
  전혀 없습니다. 우리는 wwww. 웹표준 방식으로 3D web과 AI web 방식을 추구합니다. 따라서 3D를 위한 각종 시스템을 다운받아서 사용할 필요가 없습니다. 
`;

const text8 = `
  매출달성에 대한 100%보장과 책임을 지진 않습니다. 모든 운영에 대한 책임은 각각의 기업과 조직의 CEO들의 최종 결정권에 따른 책임이 있으며, 다만 메버는 초기 고정비를 줄이고, 매출 달성에 따른 수익쉐어나 지분쉐어를 추구합니다. 그만큼 대행사나 위탁사가 아닌, 공동 주주/투자자의 마음으로 책임감 있게 끝까지 함께 하는 원칙이기도 합니다. 
`;

const text9 = `
  모든 고객 데이터는 암호화되어 철저하게 보안관리 됩니다. 즉, 우리는 고객이 동의하지 않는 한 데이터를 볼 수 없습니다.  
`;
const QuestionsPage = () => {
    
  
    return (
    <Container>
      <Main>
        <Title>CEO들이 자주 묻는 『 질문 & 답변 』</Title>
        <Collapse style={{width: '95%', fontSize: '1rem'}} accordion>
          <Panel header="업데이트 비용을 지불해야 합니까?" key="1">
            <p>{text1}</p>
          </Panel>
          <Panel header="내 AI 3D기술은 안전한가요?" key="2">
            <p>{text2}</p>
          </Panel>
          <Panel header="계약 기간은 얼마나 됩니까?" key="3">
            <p>{text3}</p>
          </Panel>
          <Panel header="질문이 있는 경우 상담은 어떻게하나요?" key="4">
            <p>{text4}</p>
          </Panel>
          <Panel header="계정 탈퇴시, 데이터도 삭제 되나요?" key="5">
            <p>{text5}</p>
          </Panel>
          <Panel header="기존 시스템에 메버를 연동할 수 있나요?" key="6">
            <p>{text6}</p>
          </Panel>
          <Panel header="필수 설치해야 하는 것이 있나요?" key="7">
            <p>{text7}</p>
          </Panel>
          <Panel header="매출을 메버가 100% 보장하나요?" key="8">
            <p>{text8}</p>
          </Panel>
          <Panel header="민감한 고객 데이터를 메버도 확인하나요?" key="9">
            <p>{text9}</p>
          </Panel>

        </Collapse>
        
      </Main> 
      
      
    </Container>
    

  )
}

export default QuestionsPage;

