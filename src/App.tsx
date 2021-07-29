import { Aside } from './components/Aside';
import { Post } from './components/Post';
import { WritePublication } from './components/Publication';
import { Container, Content, Main } from './home';

function App() {
  return (
    <Container>
      <Content>
        <Aside />
        <Main>
          <WritePublication />
          <Post
            name="Rodrigo Santos"
            time="há cerca de uma hora"
            text="Essa publicação está configurada no modo privado"
            comments={0}
            share={0}
            isPrivate
          />
          <Post
            name="Rodrigo Santos"
            time="há 8 dias"
            text="kkkk"
            comments={0}
            share={3}
          />
        </Main>
      </Content>
    </Container>
  );
}

export default App;
