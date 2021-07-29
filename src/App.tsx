import { useState } from 'react';
import { Container, Content, Aside, Main, Publication, Private, Public } from './home';
import { GoNote } from 'react-icons/go';
import { AiOutlinePicture } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentDots, FaRegShareSquare } from 'react-icons/fa';
import { BsCameraVideo, BsFillLockFill } from 'react-icons/bs';
import { MdTimer, MdKeyboardArrowDown, MdPublic } from 'react-icons/md';
import { WritePublication } from './components/Publication';

function App() {
  const [like, setLike] = useState(false);

  function handleLiked() {
    setLike(!like)
  }
  return (
    <Container>
      <Content>
        <Aside>
          <div>
            <img src="https://github.com/rodrigosaantos.png" alt="RodrigoSaantos" />
            <p>Rodrigo Santos</p>
            <strong>@RodrigoSaantos</strong>
            <span>Front-end Developer</span>
          </div>
          <div>
            <p>Rio Branco</p>
            <div>
              <span>InCicle</span>
              <span>Uninorte</span>
            </div>
          </div>
        </Aside>
        <Main>
          <WritePublication />
          <Private>
            <div className="img-name-private-time">
              <img src="https://github.com/rodrigosaantos.png" alt="RodrigoSantos" />
              <div>
                <span>Rodrigo Santos</span>
                <div>
                  <MdTimer/>
                  <span>ha cerca de uma hora</span>
                  <BsFillLockFill />
                  <span>Somente eu</span>
                </div>
              </div>
              <MdKeyboardArrowDown />
            </div>
            <p>Essa publicação está configurada</p>
            <div className="like-comment-share">
              <div className="numbers">
                <div>
                  <BiLike />
                  <span>Seja o primeiro a curtir</span>
                </div>
                <div>
                  <span>0 Comentários</span>
                  <span>0 Compartilhamentos</span>
                </div>
              </div>
              <div className="buttons">
                  <button>
                    <BiLike />
                    Curtir
                  </button>
                  
                  <button>
                    <FaRegCommentDots />
                    Comentários
                  </button>
                  
                  <button>
                    <FaRegShareSquare />
                    Compartilhar
                  </button>
              </div>
            </div>
          </Private>
          <Public>
            <div className="img-name-private-time">
              <img src="https://github.com/rodrigosaantos.png" alt="RodrigoSantos" />
              <div>
                <span>Rodrigo Santos</span>
                <div>
                  <MdTimer/>
                  <span>há 8 dias</span>
                  <MdPublic />
                  <span>Público</span>
                </div>
              </div>
              <MdKeyboardArrowDown />
            </div>
            <p>Essa publicação está configurada</p>
            <div className="like-comment-share">
              <div className="numbers">
                <div>
                  <BiLike style={{ color: like ? 'var(--color-primary)' : ''}} />
                  <span>{like ? '1 pessoa curtiu isso' : 'Seja o primeiro a curtir'}</span>
                </div>
                <div>
                  <span>0 Comentários</span>
                  <span>3 Compartilhamentos</span>
                </div>
              </div>
              <div className="buttons">
                  <button onClick={handleLiked}>
                    <BiLike />
                    Curtir
                  </button>
                  
                  <button>
                    <FaRegCommentDots />
                    Comentários
                  </button>
                  
                  <button>
                    <FaRegShareSquare />
                    Compartilhar
                  </button>
              </div>
            </div>
          </Public>
        </Main>
      </Content>
    </Container>
  );
}

export default App;
