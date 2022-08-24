import styled from "styled-components"

export const Container = styled.div`
  /* border: 1px solid ${props => props.theme.colors.primary}; */
  width: 100%;
  height: 1.5rem;

  background-color: ${props => props.theme.colors.light.background[1]};
  border-radius: .5rem;

  position: relative;
  overflow: hidden;
`
export const Text = styled.p`
  font-size: small;
  text-align: center;

`

export const Bar = styled.div`
  min-width: 0.05%;
  height: 100%;
  background: ${props => props.theme.colors.primary};
  border-radius: .5rem;

  transition: width .3s ease-in-out;
`