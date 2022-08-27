import styled from "styled-components"

export const ErrorContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  gap: 1rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.5rem;
`

export const ListLists = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  gap: 0.5rem;
  list-style: none;
`

export const ListItem = styled.li`
  background-color: ${props => props.theme.colors.light.background[1]};
  padding: 1rem;
  transition: filter .2s ease;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`