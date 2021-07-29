import { AiOutlinePicture } from 'react-icons/ai';
import { BsCameraVideo } from 'react-icons/bs';
import { GoNote } from 'react-icons/go';
import { Publication } from './styles';

function WritePublication() {
  return (
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
  )
}

export { WritePublication };
