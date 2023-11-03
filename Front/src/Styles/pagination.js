import styled from 'styled-components';

export const PaginationContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const PageItem = styled.li`
  margin: 0 5px;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;

export const PageButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
