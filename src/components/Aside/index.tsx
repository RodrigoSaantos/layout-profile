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
        <p>Rio Branco</p>
        <div>
          <span>InCicle</span>
          <span>Uninorte</span>
        </div>
      </div>
    </AsideElement>
  )
}

export { Aside };
