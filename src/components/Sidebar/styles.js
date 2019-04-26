import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 240px;
  background: #090a0c;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    overflow-y: auto;
  }
`;

export const MainNav = styled.ul`
  list-style: none;
  padding-top: 25px;

  &:first-child {
    margin: 0;
  }
`;

export const MainNavItem = styled.li`
  border-left: ${props => (props.active ? '4px solid #1ed760' : '4px solid #090a0c')};
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 28px;
  margin-bottom: 15px;

  a {
    color: inherit;
    text-decoration: none;
    font-size: 13px;
    line-height: 32px;
    font-weight: ${props => (props.main ? 'bold' : 'normal')};

    &:hover {
      color: #fff;
    }
  }
  img {
    margin-right: 10px;
    width: 36px;
    height: 36px;
    padding: 5px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;
  padding-left: 25px;
  &:first-child {
    margin: 0;
  }

  li {
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};

      &:hover {
        color: #fff;
      }
    }

    span {
      color: #b1b1b1;
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  color: #b3b3b3;
  font-size: 13px;

  display: flex;
  align-items: center;
  padding: 25px;

  &:hover {
    color: #fff;
  }

  img {
    margin-right: 10px;
  }
`;

export const Cover = styled.div`
  overflow-y: hidden !important;
  height: 290px;
  img {
    width: 240px;
    height: 240px;
  }
`;
