import styled from "styled-components";

type StyleProps = {
  size: "small" | "large";
};

export const Button = styled.button`
  display: flex;
  align-items: center;
  align-self: center;
  background-color: #008bef;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  border: 0;
  border-radius: 8px;
  margin: 4px;
  padding: ${(props: StyleProps) =>
    props.size === "small" ? "8px 8px 8px 8px" : "12px 16px 12px 12px"};
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(60%);
  }
`;

export const ButtonText = styled.span`
  margin: 0 4px 0 8px;
`;
