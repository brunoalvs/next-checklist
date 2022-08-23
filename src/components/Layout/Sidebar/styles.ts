import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${props => props.theme.colors.dark.background[0]};
  color: ${props => props.theme.colors.dark.text};
  padding: 1rem .5rem;

  display: grid;
  grid-template-rows: 4rem 1fr;

  .todo-list {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-gap: 0.5rem;

    .todo {
      background-color: ${props => props.theme.colors.dark.background[1]};
      padding: 1rem;
      border-radius: 0.25rem;

      &:hover {
        cursor: default;
        filter: brightness(1.4);
      }
    }
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 .5rem 2rem;
`