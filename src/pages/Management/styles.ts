import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  height: 100%;
`;

export const Aside = styled.aside`
  height: 100%;
  width: 300px;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 20px 20px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Menu = styled.div``;

export const Item = styled.div`
  padding: 14px;
  font-size: 18px;
  border: 1px solid #202020;
`;

export const Logout = styled(Item)`
  margin-bottom: 8px;
`;

export const Main = styled.main`
  margin-bottom: 8px;
`;
