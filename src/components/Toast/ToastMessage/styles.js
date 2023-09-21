import styled, { css } from "styled-components";

const containerVariant = {
  default: css`background: ${({ theme }) => theme.colors.primary.main};`,
  success: css`background: ${({ theme }) => theme.colors.success.main};`,
  danger: css`background: ${({ theme }) => theme.colors.danger.main};`,
};

export const Container = styled.div`
  padding: 16px 32px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ type }) => containerVariant[type] || containerVariant.default}
  & + & {
    margin-top: 12px;
  }

  img {
    margin-right: 8px;
  }
`
