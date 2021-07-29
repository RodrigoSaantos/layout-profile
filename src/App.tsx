import { Aside } from './components/Aside';
import { PostPrivate } from './components/PostPrivate';
import { PostPublic } from './components/PostPublic';
import { WritePublication } from './components/Publication';
import { Container, Content, Main } from './home';

function App() {
  return (
    <Container>
      <Content>
        <Aside />
        <Main>
          <WritePublication />
          <PostPrivate />
          <PostPublic />
        </Main>
      </Content>
    </Container>
  );
}

export default App;
