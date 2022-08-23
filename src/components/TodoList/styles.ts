import styled from "styled-components"

export const Container = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-gap: 0.5rem;
`

export const Item = styled.li<{
  isActive: boolean;
  isCompleted: boolean;
}>`
  background-color: ${props => props.theme.colors.dark.background[1]};
  padding: 1rem;
  border-radius: 0.25rem;

  ${props => props.isCompleted && `
    text-decoration: line-through;
  `}

  ${props => props.isActive && `
    background-color: ${props.theme.colors.dark.background[2]};
  `}

  &:hover {
    cursor: default;
    filter: brightness(1.4);
  }
`