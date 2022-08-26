import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 1.25rem;

  background-color: ${props => props.theme.colors.light.background[1]};
  border-radius: .5rem;

  position: relative;
  overflow: hidden;
`
export const Text = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: small;
  font-weight: 600;
  position: absolute;
`

export const Bar = styled.div<{
  progress: number;
}>`
  width: ${props => props.progress}%;
  min-width: 0.05%;
  height: 100%;
  background: ${props => props.progress < 100 ? props.theme.colors.secondary : props.theme.colors.primary};
  border-radius: .5rem;

  transition: width .3s ease-in-out;
`