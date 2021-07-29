import { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentDots, FaRegShareSquare } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdPublic, MdTimer } from 'react-icons/md';
import { BsFillLockFill } from 'react-icons/bs';
import { Container } from './styles';

interface PostProps {
  name: string;
  time: string;
  text: string;
  comments: number;
  share: number;
  isPrivate?: boolean;
}

function Post({
  name,
  time,
  text,
  comments,
  share,
  isPrivate = false
}: PostProps) {
  const [like, setLike] = useState(false);

  function handleLiked() {
    setLike(!like)
  }

  return (
      <Container>
        <div className="img-name-private-time">
          <img src="https://github.com/rodrigosaantos.png" alt="RodrigoSantos" />
          <div>
            <span>{name}</span>
            <div>
              <MdTimer/>
              <span>{time}</span>
              {isPrivate ? (
                <>
                  <BsFillLockFill />
                  <span>Somente eu</span>
                </>
              ) : (
                <>
                  <MdPublic />
                  <span>Público</span>
                </>
              )}
            </div>
          </div>
          <MdKeyboardArrowDown />
        </div>
        <p>{text}</p>
        <div className="like-comment-share">
          <div className="numbers">
            <div>
              <BiLike style={{ color: like ? 'var(--color-primary)' : ''}} />
              <span>{like ? '1 pessoa curtiu isso' : 'Seja o primeiro a curtir'}</span>
            </div>
            <div>
              <span>{comments} Comentários</span>
              <span>{share} Compartilhamentos</span>
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
      </Container>
  )
}

export { Post };
