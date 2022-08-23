import { useEffect } from 'react';
import { useTodoContext } from '../../contexts/todo'
import { Button } from '../shared/Button';

import { Container, Header, Sidebar, Content, NavigationVertical } from './styles'

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { lists, addList } = useTodoContext()

  useEffect(() => {
    console.log('layout', lists)
  }, [lists])

  return (
    <>
      <Container>
        <Header>
          <h1 className='logo'><span role='img' aria-label='emoji with check'>✅</span></h1>

          <NavigationVertical>
            <a href='#'>Home</a>
            <a href='#'>Archive</a>
          </NavigationVertical>
        </Header>
        <Sidebar>
          <header>
            <h1>Lists</h1>
            <Button onClick={
              () => {
                addList('New list')
              }
            }>
              Add
            </Button>
          </header>
          <ul className='todo-list'>
            {lists.map(list => (
              <li className='todo' key={list.id}>
                {list.title}
              </li>
            ))}
          </ul>
        </Sidebar>
        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
}