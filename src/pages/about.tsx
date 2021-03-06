import styled from '@emotion/styled';
import React from 'react';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';

const Contents = styled.section`
  margin-bottom: 3rem;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: lightgrey;
  font-size: 1rem;
  border-radius: 4px;
  font-weight: bold;
`;
const Info = styled.div`
  display: flex;
  gap: 10px;
`;

function about() {
  return (
    <Layout>
      <Header />
      <Contents>
        <h2>Earth Driven Developer</h2>
        <p>
          미래 세대가 안전하고 행복한 지구를 만들고 싶습니다. 지속 가능한 기술에
          관심이 많습니다.
        </p>
        <Info>
          <a
            href="https://seonghwa.notion.site/Earth-Driven-Developer-4a710dcefd7c49668bd0c7ecf8f5bf3c"
            target={`_blank`}
          >
            <Button>resume</Button>
          </a>
          <a href="https://twitter.com/earthloverdev" target={`_blank`}>
            <Button>twitter</Button>
          </a>
        </Info>
      </Contents>
    </Layout>
  );
}

export default about;
