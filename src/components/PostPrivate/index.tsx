import { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { BsFillLockFill } from 'react-icons/bs';
import { FaRegCommentDots, FaRegShareSquare } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdTimer } from 'react-icons/md';
import { Private } from './styles';


function PostPrivate() {
  const [like, setLike] = useState(false);

  function handleLiked() {
    setLike(!like)
  }
  return (
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
      <p>Essa publicação está configurada no modo privado</p>
      <div className="like-comment-share">
        <div className="numbers">
          <div>
            <BiLike style={{ color: like ? 'var(--color-primary)' : ''}} />
            <span>{like ? '1 pessoa curtiu isso' : 'Seja o primeiro a curtir'}</span>
          </div>
          <div>
            <span>0 Comentários</span>
            <span>0 Compartilhamentos</span>
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
    </Private>
  )
}

export { PostPrivate };
