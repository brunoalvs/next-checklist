import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../Logo';
import { Sidebar } from './Sidebar'

import { Container, Header, Content, NavigationVertical, NavigationHorizontal } from './styles'

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {

  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    setIsMobile(window.innerWidth < 600);
  }

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (isMobile) {
    return (
      <Container>
        <Content>
          {children}
        </Content>
        <NavigationHorizontal>
          <Link href='/'>
            <a>
              <Image src='/home.svg' alt='home' width={24} height={24} />
              Home
            </a>
          </Link>
          <Link href='/archived'>
            <a>
              <Image src='/archive.svg' alt='search' width={24} height={24} />
              Archived
            </a>
          </Link>
          <Link href='/lists'>
            <a>
              <Image src='/lists.svg' alt='search' width={24} height={24} />
              Lists
            </a>
          </Link>
        </NavigationHorizontal>
      </Container>

    )
  }

  return (
    <>
      <Container>
        <Header>
          <Logo />

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