import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";


export default function AreaAtleta() {

  const {
    setUser,
    inscricao,
    setInscricao
  } = useContext(AppContext)

  console.log(inscricao);
  const navigate = useNavigate()


  useEffect(() => {

    function getInscricao() {
      if (inscricao.length) {
        localStorage.setItem('inscricao', JSON.stringify(inscricao))
      }
      if (inscricao.length === 0 && localStorage.getItem('inscricao')) {
        console.log('opaaa');
        setInscricao(JSON.parse(localStorage.getItem('inscricao')))
      }
    }

    getInscricao();

  }, [setInscricao]);




  function logOut() {
    localStorage.removeItem('profile');
    navigate('/', { replace: true })
    setUser('')
  }

  return (
    <div className="account">
      <h1>Area do atleta</h1>

      <h2>
        Minhas Inscrições
      </h2>
      <ul>
        {
          inscricao.map(inscricao => {
            return (
              <li>{inscricao.corrida.nome}</li>
            );
          })
        }
        <li></li>
      </ul>

      <ul>
        <li></li>
        <li onClick={() => logOut()}>sair</li>
      </ul>
    </div>
  )
}