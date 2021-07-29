import React from 'react';
import { Container, Content, Aside, Main, Publication, Private } from './home';
import { GoNote } from 'react-icons/go';
import { AiOutlinePicture } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentDots, FaRegShareSquare } from 'react-icons/fa';
import { BsCameraVideo, BsFillLockFill } from 'react-icons/bs';
import { MdTimer, MdKeyboardArrowDown } from 'react-icons/md';

function App() {
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
          <Publication>
            <div>
              <div>
                <GoNote width="64px" height="64px" />
                <input type="text" placeholder="Escreva uma publicação" />
                <AiOutlinePicture  />
                <BsCameraVideo  />
              </div>

              <span>ou<button>&nbsp;publique um artigo&nbsp;</button>na InCicle</span>
            </div>
          </Publication>
          <Private>
            <div>
              <img src="https://github.com/rodrigosaantos.png" alt="RodrigoSantos" />
              <div>
                <span>Rodrigo Santos</span>
                <div>
                  <MdTimer/>
                  <span>ha cerca de uma hora</span>
                  <BsFillLockFill />
                  <span>Somemnte eu</span>
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
          <div>PostPublico</div>
        </Main>
      </Content>
    </Container>
  );
}

export default App;
