import styled from "styled-components";

export const Page = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;

  padding: 6px 20px;
`;

export const Title = styled.span`
  align-items: center;
  align-self: center;

  font-size: 18px;
  font-weight: 600;
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

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const HeadEmail = styled.div`
  padding: 8px 20px;
  background-color: transparent;
  max-width: 150px;
  width: 100%;
`;

export const HeadRole = styled.div`
  padding: 8px 20px;
  background-color: transparent;
  max-width: 100px;
  width: 100%;
`;

export const HeadAction = styled.div`
  padding: 8px 20px;
  background-color: transparent;
  max-width: 100px;
  width: 100%;
  text-align: right;

  @media (max-width: 650px) {
    flex-direction: column;
    text-align: left;
  }
`;
/* 
export const WrapLine = styled.span`
  display: flex;
  width: 100%;

`; */

export const List = styled.ul`
  list-style: none;
`;
export const ItemMessage = styled.div`
  margin: 8px 16px;
  padding: 6px;
  background-color: rgba(#008bef, 0.9);
  border: 4px solid #008bef;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TextMessage = styled.div`
  color: #202020;
  width: 100%;
  padding: 0 16px;
`;
export const Item = styled.div`
  margin: 8px 16px;
  padding: 6px;
  background-color: #d8d8d8;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Text = styled.div`
  color: #202020;
  max-width: 150px;
  width: 100%;
  padding: 0 16px;

  @media (max-width: 900px) {
    margin: 16px;
  }
`;

export const TextMuted = styled.div`
  color: #777777;
  max-width: 100px;
  width: 100%;
  padding: 0 16px;

  @media (max-width: 900px) {
    margin: 0 16px 16px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Menu = styled.div``;

export const Actions = styled.div`
  display: flex;

  @media (max-width: 900px) {
    align-items: flex-start;
    margin: 0 24px 16px;
  }
`;

export const Main = styled.main`
  margin-bottom: 8px;
`;
