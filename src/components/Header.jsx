import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation().pathname;
  const header = {
    main: '전체차량',
    detail: '차량상세',
  };
  return (
    <MainHeader>{location === '/' ? header.main : header.detail}</MainHeader>
  );
}

const MainHeader = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  padding: 20px 0;
`;

export default Header;
