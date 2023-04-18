import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import profileIcon from '../images/profile.png'
import Swal from "sweetalert2";


export default function AreaAtleta() {

  const {
    setUser,
    inscricao,
    setInscricao
  } = useContext(AppContext)

  const navigate = useNavigate()

  useEffect(() => {
    function getInscricao() {
      if (inscricao.length) {
        localStorage.setItem('inscricao', JSON.stringify(inscricao))
      }
      if (inscricao.length === 0 && localStorage.getItem('inscricao')) {
        setInscricao(JSON.parse(localStorage.getItem('inscricao')))
      }
    }
    getInscricao();

  }, [setInscricao]);

  function logOut() {
    localStorage.removeItem('profile');
    navigate('/home', { replace: true })
    setUser('')
  }

  function cancelInscricao(item) {

    const lista = inscricao.filter(element => {
      return element.corrida_id !== item.corrida_id
    })

    Swal.fire({
      title: 'Atenção',
      text: "Tem certeza que deseja cancelar a inscrição na corrida: " + item.corrida.nome + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar inscrição'
    }).then(result => {
      if (result.isConfirmed) {

        setInscricao(lista)

        Swal.fire(
          'Cancelado',
          'Inscrição cancelada com sucesso.',
          'success'
        ).then(() => {
          localStorage.setItem('inscricao', JSON.stringify(lista));
        })

      }
    })

  }

  return (
    <div className="account">
      <h1>Area do atleta</h1>
      <section className="account__top">
        <figure className="account__profile-icon">
          <img src={profileIcon} alt='arte digital mostrando três pessoas sobre um notebook gigante, colocando componentes na tela' />
        </figure>
        <ul className="account__menu">
          <li>Inscrições</li>
          <li onClick={() => logOut()}>sair</li>
        </ul>
        <div className="account__information">
          <h2>
            Minhas Inscrições
          </h2>
          <ul className="inscricoes">
            {
              inscricao.map(inscricao => {
                return (
                  <li>
                    <p>
                      {inscricao.corrida.nome} {inscricao.corrida.distancia} {inscricao.corrida.data}
                    </p>
                    <button className="btn-cancelar" type="button" onClick={() => cancelInscricao(inscricao)}>cancelar</button>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </section>
    </div>
  )
}