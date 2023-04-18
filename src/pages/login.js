import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function Login() {

  const {
    setUser
  } = useContext(AppContext);

  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUsuario] = useState("");

  const perfis = [
    {
      id: 1,
      nome: 'atleta'
    },
    {
      id: 2,
      nome: 'organizador'
    }
  ]


  const users = [
    {
      id: 1,
      nome: 'Rafael Daumann Bortone',
      login: 'rafabortone',
      senha: '123456',
      cpf: '999.888.777-66',
      email: 'rafa.teste@bortone.com.br',
      id_perfil: 1,
      telefone: '(41) 99999-8888',
      data_nascimento: '27/02/1990'
    }
  ]

  function handleLogin() {
    let found = false;
    if (login != '' && senha != '') {
      users.forEach(item => {
        if (item.login == login && item.senha == senha) {
          found = true
          setUsusarioValues(item)
          return
        }
      })

      if (!found) {
        Swal.fire(
          'Atenção!',
          'Usuário não encontrado',
          'error'
        )
      }

    } else {
      Swal.fire(
        'Atenção!',
        'Preencha todos os campos',
        'warning'
      )
    }
  }

  function setUsusarioValues(user) {
    setUsuario(user)

    setUser(user)
    localStorage.setItem('profile', JSON.stringify(user))

    if (localStorage.getItem('corrida')) {
      navigate('/corrida-details', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  }



  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <input type="text" name='login' value={login}
          onChange={(e) => setLogin(e.target.value)} placeholder="login" />
        <input type="password" name='senha' value={senha}
          onChange={(e) => setSenha(e.target.value)} placeholder="senha" />
        <div className="buttons">
          <button type='button' className="btn-cancelar">cancelar</button>
          <button type='button' className="btn-salvar" onClick={() => handleLogin()}>Entrar</button>
        </div>
      </form>
    </div>

  )

}
