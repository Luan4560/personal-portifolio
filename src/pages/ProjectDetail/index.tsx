import ImageC from '../../assets/carters.png'
import * as SC from './styles'

export const ProjectDetail = () => {
  return (
    <SC.Container>
      <main>
        <div className='image-content'>
          <img src={ImageC} alt="Project Image" />
        </div>

        <div className='description-content'>
          <h1>Tribute Site</h1>

          <div className="tag-content">
            <a href='/'>HTML</a>
            <a href='/'>CSS</a>
          </div>

          <div className="links-content">
            <a href="/">Demo</a>
            <a href="/">Source Code</a>
          </div>

          <div className="description-p-content">
            <p>
              Haerent hoc fibras cumque, eburno manus tenuique Derceti adversam 
              regem, et colores eunti victor: nulla? Ora notas circumdare, te 
              fuerant potens levant incognita pectore a. Satis Pelethronium 
              ululatibus operique simili rogabat sum sed latos; est ensem; 
              quia sidere deserto solantia pedibus. Sua altis quem Balearica 
              tu Persea minuendo, et fuit Persea cur certa induitur observo. 
              Infamia in inquit virgae epulas auro me Achivi negabat harundine.
            </p>
          </div>

        </div>
      </main>
    </SC.Container>
  )
}