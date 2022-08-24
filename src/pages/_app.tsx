import type { AppProps } from 'next/app'
import {
  createGlobalStyle,
  ThemeProvider
} from 'styled-components'
import { TodoProvider } from '../contexts/todo'

interface Theme {
  colors: {
    primary: string
    secondary: string
    dark: {
      background: [string, string, string]
      text: string
    },
    light: {
      background: [string, string, string]
      text: string
    }
  }
  fonts: {
    primary: string
    secondary: string
  }
}

const theme: Theme = {
  colors: {
    primary: '#2be277',
    secondary: '#a2d6b5',
    dark: {
      background: [
        '#000',
        '#151515',
        '#2c2c2c'
      ],
      text: '#fff',
    },
    light: {
      background: [
        '#f9f9f9',
        '#eaeaea',
        '#aeaeae'
      ],
      text: '#000',
    },
  },
  fonts: {
    primary: '"Roboto", sans-serif',
    secondary: '"Roboto Condensed", sans-serif'
  }
}

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: ${theme.fonts.primary};
  }
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TodoProvider>
          <Component {...pageProps} />
        </TodoProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
