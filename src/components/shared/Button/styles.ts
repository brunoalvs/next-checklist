import styled from 'styled-components'

export const Container = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #eee;
  font-weight: bold;
  cursor: pointer;

  transition: filter .2s ease;

  &:hover {
    filter: brightness(0.9);
  }
`