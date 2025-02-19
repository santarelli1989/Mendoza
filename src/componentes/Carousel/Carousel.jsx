import './Carousel.css'
import imagen1 from '../../assets/imgCarousel/Mendoza1.jpg'
import imagen2 from '../../assets/imgCarousel/Mendoza2.jpg'
import imagen3 from '../../assets/imgCarousel/Mendoza3.jpg'
import imagen4 from '../../assets/imgCarousel/Mendoza4.jpg'
import imagen5 from '../../assets/imgCarousel/Mendoza5.jpg'
import imagen6 from '../../assets/imgCarousel/Mendoza6.jpg'


function Carousel() {
    const imgs = [imagen6, imagen1, imagen2, imagen3, imagen4, imagen5 ];
    return (
      <div className="container col">
        <div className="row my-3">
         <div className='col-6 my-3'>
         <p className='historia'>Mendoza es una ciudad ubicada en el oeste de Argentina. Su historia se remonta a tiempos prehispánicos, cuando la región estaba habitada por pueblos originarios como los huarpes.
En el siglo XVI, llegaron los españoles y fundaron la ciudad el 2 de marzo de 1561, dándole el nombre de "Ciudad de Mendoza del Nuevo Valle de La Rioja". Este nombre fue en honor al gobernador de Chile, García Hurtado de Mendoza, ya que en ese momento la región formaba parte de la Capitanía General de Chile.
Durante la época colonial, Mendoza se convirtió en un importante centro comercial y agrícola gracias a su ubicación estratégica en la ruta entre el Río de la Plata y Chile. La producción de vino comenzó a destacar, y Mendoza se ganó su fama como una de las principales regiones vitivinícolas de Argentina.
En el siglo XIX, Argentina se independizó y Mendoza se convirtió en una provincia. La ciudad creció y se modernizó, pero siempre conservando su identidad y su legado histórico.
Hoy en día, Mendoza es una ciudad vibrante y cosmopolita que combina su rica historia con un presente dinámico. Es un importante destino turístico, conocido por sus viñedos, sus paisajes de montaña y su cultura del vino.</p>
        </div>
          <div className="col-md-6">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner my-3">
                {imgs.map((img, idx) => (
                  <div
                    key={idx}
                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                    data-bs-interval="2000"
                  >
                    <img src={img} className="d-block" alt="soldadura" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Carousel;