import Header from "../components/header";
import bannerTop from '../images/banner-home.png'
import Trails from '../components/trails';
import Modal from "../components/modal";

export default function Home() {
  return (
    <div className="home" aria-hidden="true">
      <section className="home__top">
        <figure className="home__banner">
          <img src={bannerTop} alt='arte digital mostrando três pessoas sobre um notebook gigante, colocando componentes na tela' />
        </figure>
      </section>
      <h2 className="title">PRÓXIMAS CORRIDAS</h2>
      <section className="home__trails">
        
        <Trails />
      </section>
    </div>
  );
}