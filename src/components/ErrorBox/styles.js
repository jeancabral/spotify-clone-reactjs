import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  line-height: 42px;
  padding: 0 20px;
  color: rgba(0, 0, 0, 0.6);
  background: #f55;
  margin: 20px 0 10px;
  font-size: 13px;
  color: inherit;
  border-radius: 4px;

  button {
    border: 0;
    background: transparent;

    img {
      height: 14px;
    }
  }
`;
