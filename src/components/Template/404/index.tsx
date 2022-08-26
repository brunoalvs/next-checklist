import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button } from '../../shared/Button'
import {Container, Code, Text} from './styles'

export const PageNotFound = () => {
  const { push } = useRouter()
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Container>
        <Code aria-label='404 Page not found'>404</Code>
        <Text>Page not found</Text>
        <Button
          onClick={( ) => push('/')}
        >
          Go to Homepage
        </Button>
      </Container>
    </>
  )
}