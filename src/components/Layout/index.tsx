import Image from 'next/image';
import Link from 'next/link';
import { Sidebar } from './Sidebar'

import { Container, Header, Content, NavigationVertical } from './styles'

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {

  return (
    <>
      <Container>
        <Header>
          <h1 className='logo'><span role='img' aria-label='emoji with check'>✅</span></h1>

          <NavigationVertical>
            <Link href='/'>
              <a>
                <Image src='/home.svg' alt='home' width={24} height={24} />
              </a>
            </Link>
            <Link href='/archived'>
              <a>
                <Image src='/archive.svg' alt='search' width={24} height={24} />
              </a>
            </Link>
          </NavigationVertical>
        </Header>
        <Sidebar />
        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
}