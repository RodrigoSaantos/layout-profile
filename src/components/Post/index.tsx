import { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentDots, FaRegShareSquare } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdPublic, MdTimer } from 'react-icons/md';
import { Public } from './styles';

function PostPublic() {
  const [like, setLike] = useState(false);

  function handleLiked() {
    setLike(!like)
  }

  return (
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
      <p>kkkk</p>
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
            <button onClick={handleLiked} style={{ color: like ? 'var(--color-primary)' : ''}}>
              <BiLike />
              {like ? 'Você curtiu' : 'Curtir'}
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
  )
}

export { PostPublic };
