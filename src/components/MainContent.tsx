import React from 'react';
import styled from 'styled-components';

const MainContent = () => {
  return (
    <MainContentWrap>
      <LeftWrap>
        <div>asdf</div>
      </LeftWrap>
      <RightWrap>
        <div>asdf</div>
      </RightWrap>
      <FixedWrap>
        <button type="button">다운로드</button>
      </FixedWrap>
    </MainContentWrap>
  );
};

const MainContentWrap = styled.div`
  display: flex;
`;

const LeftWrap = styled.div`
  max-width: 960px;
  width: 100%;
`;

const RightWrap = styled.div`
  max-width: 960px;
  width: 100%;
`;

const FixedWrap = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
`;

export default MainContent;
