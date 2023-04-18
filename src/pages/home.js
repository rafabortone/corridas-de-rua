import bannerTop from '../images/banner-home.png'
import Trails from '../components/trails';

export default function Home() {


  localStorage.removeItem('corrida')
  return (
    <div className="home" aria-hidden="true">
      <section className="home__top">
        <figure className="home__banner">
          <img src={bannerTop} />
        </figure>
      </section>
      <h2 className="title">PRÓXIMAS CORRIDAS</h2>
      <section className="home__trails">

        <Trails />
      </section>
    </div>
  );
}