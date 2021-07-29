import { BiMap } from 'react-icons/bi';
import { AsideElement } from './styles';

function Aside() {
  return (
    <AsideElement>
      <div>
        <img src="https://github.com/rodrigosaantos.png" alt="RodrigoSaantos" />
        <p>Rodrigo Santos</p>
        <strong>@RodrigoSaantos</strong>
        <span>Front-end Developer</span>
      </div>
      <div>
        <div>
          <BiMap />
          <p>Rio Branco</p>
        </div>
        <div>
          <div>

          <span>InCicle</span>
          </div>
          <span>Uninorte</span>
        </div>
      </div>
    </AsideElement>
  )
}

export { Aside };
