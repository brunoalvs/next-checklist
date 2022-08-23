import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: grid;
  /* Tablet and Desktop */
  grid-template-columns: 50px 1fr 4fr;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.colors.dark.background[1]};
  padding: 1rem .2rem;

  .logo {
    color: ${props => props.theme.colors.dark.text};
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 2rem;
  }
`

export const NavigationVertical = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  > a {
    width: 2.5rem;
    height: 2.5rem;

    border: 1px dashed white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

`

export const Sidebar = styled.aside`
  background-color: ${props => props.theme.colors.dark.background[0]};
  color: ${props => props.theme.colors.dark.text};
  padding: 1rem .5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 .5rem 2rem;
  }

  .todo-list {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
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

export const Content = styled.main`
`