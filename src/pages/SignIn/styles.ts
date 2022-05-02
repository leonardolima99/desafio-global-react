import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
  color: #202020;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #202020;
  padding: 16px;
  width: 350px;
  border: 1px solid #a7a7a7;
  border-radius: 8px;
  margin-bottom: 8px;
  outline-color: #008bef;
`;
