import '@scss/description.scss'
import dish1 from '@images/dish1.png'
import dish2 from '@images/dish2.png'
import dish3 from '@images/dish3.png'

export const Description = () => {
  return (
    <section className='section description-section'>
      <div className="container">
        <h2>Bocados</h2>
        <p>Restaurante de tapas donde la calidad y el sabor van de la mano. Con una selección cuidada de ingredientes frescos y recetas tradicionales con un toque innovador, ofrecemos una experiencia gastronómica única en cada bocado. Un lugar acogedor para disfrutar de tapas bien elaboradas, maridadas con una excelente selección de vinos y cervezas.</p>
        <div className='dishes-container'>
          <img src={dish1} alt="bocados dish" />
          <img src={dish2} alt="bocados dish" />
          <img src={dish3} alt="bocados dish" />
        </div>
      </div>
    </section>
  )
}