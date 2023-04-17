import Header from "../components/header";
import bannerTop from '../images/banner-home.png'
import Trails from '../components/trails';
import Modal from "../components/modal";

export default function Home() {
  return (
    <div className="home" aria-hidden="true">
      <Header />
      <section className="home__top">
        <div className="home__title">
          <h1>zup</h1>
          <h2>trails</h2>
        </div>
        <figure className="home__banner">
          <img src={bannerTop} alt='arte digital mostrando três pessoas sobre um notebook gigante, colocando componentes na tela' />
        </figure>
      </section>
      <section className="home__trails">
        <Trails />
      </section>
      <Modal/>
    </div>
  );
}