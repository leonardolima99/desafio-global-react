import styled from "styled-components";

export const Page = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 18px;
  font-weight: 600;
  padding: 6px 20px;
`;

export const Title = styled.span`
  align-items: center;
  align-self: center;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 300px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 8px;
`;

export const HeadTable = styled.div`
  border-bottom: 1px solid rgba(32, 32, 32, 0.6);
  color: rgba(#202020, 0.6);
  display: flex;
  margin: 0 16px;
  justify-content: space-between;
`;

export const HeadItem = styled.div`
  padding: 8px 20px;
  background-color: transparent;
  max-width: 200px;
  width: 100%;
`;

export const WrapLine = styled.span`
  display: flex;
  width: 100%;
`;

export const List = styled.div``;

export const Item = styled.div`
  padding: 32px;
  background-color: #d8d8d8;
`;

export const Text = styled.div`
  color: #202020;
`;

export const TextMuted = styled.div`
  color: #888888;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Menu = styled.div``;

export const Logout = styled(Item)`
  margin-bottom: 8px;
`;

export const Main = styled.main`
  margin-bottom: 8px;
`;
