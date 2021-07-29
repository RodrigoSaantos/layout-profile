import { BiMap, BiBuilding } from 'react-icons/bi';
import { RiBankLine } from 'react-icons/ri';
import { AsideElement } from './styles';

function Aside() {
  return (
    <AsideElement>
      <div className="aside-profile">
        <img src="https://github.com/rodrigosaantos.png" alt="RodrigoSaantos" />
        <p>Rodrigo Santos</p>
        <strong>@RodrigoSaantos</strong>
        <span>Front-end Developer</span>
      </div>
      <div className="aside-info">
        <span>
          <BiMap />
          Rio Branco
        </span>
        <div>            
          <span><BiBuilding />InCicle</span>
          <span><RiBankLine />Uninorte</span>
        </div>
      </div>
    </AsideElement>
  )
}

export { Aside };
