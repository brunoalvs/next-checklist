import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  position: relative;
`

export const Header = styled.header`
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`

export const CloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 0 0 0 1rem;
  border: 0;

  background-color: ${props => props.theme.colors.dark.background[1]};
  color: ${props => props.theme.colors.dark.text};

  position: absolute;
  top: 0rem;
  right: 0rem;
  transition: filter .2s ease;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: #fff;
  }
`

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`