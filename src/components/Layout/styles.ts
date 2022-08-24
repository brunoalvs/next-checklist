import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: grid;
  /* Tablet and Desktop */
  grid-template-columns: 50px minmax(220px, 1fr) 3fr;

  @media (min-width: 968px) {
    grid-template-columns: 50px 1fr 4fr;
  }
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

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

`

export const Content = styled.main`
  padding: 2rem;
`