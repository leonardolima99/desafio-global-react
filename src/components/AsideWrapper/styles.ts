import styled from "styled-components";

type Props = {
  visible: boolean;
};

export const Page = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Aside = styled.aside`
  height: 100%;
  width: 220px;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  position: absolute;
  top: 0;

  @media (max-width: 1000px) {
    margin-left: ${(props: Props) => (!props.visible ? "-220px" : "0px")};
  }
`;

export const Span = styled.span`
  position: absolute:
`;

export const Header = styled.header`
  text-align: center;

  font-size: 18px;
  font-weight: 600;
  padding: 20px 20px;
`;

export const WrapButton = styled.div`
  margin: 16px;
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
  cursor: pointer;
  background-color: #d8d8d8;
`;

export const Logout = styled(Item)`
  margin-bottom: 8px;
  cursor: pointer;
`;
export const Main = styled.main`
  margin-left: ${(props: Props) => (props.visible ? "200px" : "0px")};
  width: 100%;
  padding: 0 16px;
  transition: all 0.4s ease;

  @media (max-width: 1000px) {
    margin-left: ${(props: Props) => (props.visible ? "220px" : "0px")};
  }
`;
