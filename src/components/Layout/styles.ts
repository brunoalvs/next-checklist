import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: grid;

  @media (max-width: 599px) {
    height: 100vh;
    position: relative;
    grid-template-rows: 1fr auto;
  }

  @media (min-width: 600px) {
    /* Tablet and Desktop */
    grid-template-columns: 50px minmax(220px, 1fr) 3fr;
  }

  @media (min-width: 968px) {
    grid-template-columns: 50px 1fr 4fr;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;

  background-color: ${props => props.theme.colors.dark.background[1]};
  padding: 1rem .2rem;


  @media (min-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

export const NavigationVertical = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > a {
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`

export const NavigationHorizontal = styled.nav`
  width: 100%;
  background-color: ${props => props.theme.colors.dark.background[1]};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
  gap: 1rem;

  > a {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30px 1fr;
    gap: 0.25rem;

    color: ${props => props.theme.colors.dark.text};
    font-size: 0.8rem;
    padding: 0.5rem;
    text-align: center;
  }
`

export const Content = styled.main`
  padding: 2rem;

  @media (max-width: 599px) {
    overflow-y: auto;
  }
`