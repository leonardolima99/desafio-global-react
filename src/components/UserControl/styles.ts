import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  margin: 16px auto;
  width: max-content;
  border: 2px solid #888888;
  border-radius: 8px;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 8px;
  width: max-content;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 4px;
`;

export const Wrap = styled.div`
  align-items: center;
  padding: 4px;
`;

export const Label = styled.label`
  margin: 0 16px 0 4px;
`;

export const Input = styled.input`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #202020;
  padding: 8px 16px;
  width: ${(props) => (props.type === "radio" ? "auto" : "260px")};
  border: 1px solid #a7a7a7;
  border-radius: 8px;
  margin-bottom: 8px;
  outline-color: #008bef;

  &: check;
`;
