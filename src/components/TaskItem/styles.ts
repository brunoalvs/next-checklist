import styled, { css } from "styled-components"

export const Container = styled.section<{
  isChecked: boolean;
}>`
  display: flex;
  gap: 0.5rem;
  background-color: ${props => props.theme.colors.light.background[1]};
  padding: 1rem;

  transition: filter .2s ease;

  &:hover {
    filter: brightness(0.8);
  }

  ${props => props.isChecked && css`
    text-decoration: line-through;
  `}
`