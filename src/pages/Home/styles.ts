import styled from "styled-components";

export const Page = styled.div`
  height: 500px;
  width: 60%;
  margin: 0 auto;
  padding: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 8px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;

  padding: 20px 20px;
  margin-bottom: 8px;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const TextHighlight = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
