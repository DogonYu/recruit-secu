import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';

const MainContent = () => {
  const onClick = () => {
    const { vfs } = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;
    const documentDefinition: any = {
      pageSize: 'A4',
      content: [
        { text: '2020 SecurityFirst 가입 원서' },
        {
          layout: 'lightHorizontalLines',
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],

            body: [
              ['First', 'Second', 'Third', 'The last one'],
              ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
              [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4'],
            ],
          },
        },
      ],
    };
    // const pdfName = 'download.pdf';
    pdfMake.createPdf(documentDefinition).open();
  };
  return (
    <MainContentWrap>
      <LeftWrap>
        <div className="left-inner">
          <div className="items-wrap">
            <div className="three-items">
              <Input size="large" placeholder="학부(과)" />
              <Input size="large" placeholder="이름" />
              <Input size="large" placeholder="카카오톡 ID" />
            </div>
            <div className="three-items">
              <Input size="large" placeholder="학년" />
              <Input size="large" placeholder="학번" />
              <Input size="large" placeholder="E-mail" />
            </div>
          </div>
          <div className="items-wrap">
            <div className="three-items">
              <Input size="large" placeholder="연락처" />
              <Input size="large" placeholder="등교 형태" />
              <Input size="large" placeholder="SNS / BLOG" />
            </div>
            <div className="three-items">
              <Input size="large" placeholder="군대" />
              <Input size="large" placeholder="고등학교" />
              <Input size="large" placeholder="사용언어" />
            </div>
          </div>
          <Input size="large" placeholder="보유 자격증  ex ) 태권도, 짜파게티 요리사 등등" />
          <Input size="large" placeholder="주량  ex ) 4.5병, 1병" />
          <Input.TextArea size="large" autoSize={{ minRows: 4 }} placeholder="자기소개" />
          <Input.TextArea size="large" autoSize={{ minRows: 4 }} placeholder="지원동기" />
          <Input.TextArea
            size="large"
            autoSize={{ minRows: 4 }}
            placeholder="동아리에 바라는 점 & 하고싶은 말 (자유롭게 작성)"
          />
        </div>
      </LeftWrap>
      <RightWrap id="pdf-wrap">
        <h2>2020 SecurityFirst 가입 원서</h2>
        <table>
          <tbody>
            <tr>
              <td className="td-img" rowSpan={6}>
                사진
              </td>
              <td>학부(과)</td>
              <td>ㅁㅇㄴㄹ</td>
              <td>학년</td>
              <td>ㄹㄹㄹ</td>
            </tr>
            <tr>
              <td>이 름</td>
              <td>45000</td>
              <td>학 번</td>
              <td>45000</td>
            </tr>
            <tr>
              <td>카카오톡 ID</td>
              <td>45000</td>
              <td>E-mail</td>
              <td>45000</td>
            </tr>
            <tr>
              <td>연락처</td>
              <td>45000</td>
              <td>군대</td>
              <td>45000</td>
            </tr>
            <tr>
              <td>등교 형태</td>
              <td>45000</td>
              <td>고등학교</td>
              <td>45000</td>
            </tr>
            <tr>
              <td>SNS / BLOG</td>
              <td>45000</td>
              <td>사용 언어</td>
              <td>45000</td>
            </tr>
          </tbody>
        </table>
      </RightWrap>
      <FixedWrap>
        <Button type="primary" size="large" onClick={onClick}>
          다운로드
        </Button>
      </FixedWrap>
    </MainContentWrap>
  );
};

const MainContentWrap = styled.div`
  display: flex;
  overflow: hidden;
`;

const LeftWrap = styled.div`
  max-width: 940px;
  width: 100%;
  height: calc(100% - 70px);
  padding: 2rem;
  overflow: auto;
  margin-bottom: 70px;
  input + input,
  input + textarea,
  textarea + textarea,
  textarea + input,
  .items-wrap + input,
  .items-wrap + .items-wrap {
    margin-top: 2rem;
  }
  .items-wrap {
    display: flex;
  }
  .items-wrap .three-items {
    width: 50%;
  }
  .three-items + .three-items {
    margin-left: 1rem;
  }
`;

const RightWrap = styled.div`
  max-width: 960px;
  width: 100%;
  font-size: 16px;
  padding: 5rem;
  word-wrap: break-word;
  h2 {
    display: flex;
    justify-content: center;
  }
  table {
    width: 100%;
    td {
      border: 1px solid black;
      text-align: center;
      margin-top: -1px;
    }
    .td-img {
      width: 128px;
    }
  }
`;

const FixedWrap = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  background: white;
`;

export default MainContent;
