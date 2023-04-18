import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function Header() {

  const {
    user,
    setUser
  } = useContext(AppContext)

  if (user.id) {
    localStorage.setItem('profile', JSON.stringify(user))
  }

  if (user.length === 0 && localStorage.getItem('profile')) {
    setUser(JSON.parse(localStorage.getItem('profile')))
  }
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li>corridas</li>
          <li>duvidas</li>
          <li>contato</li>
        </ul>
        {
          user == '' ? <article>
            <Link to='login'>
              login
            </Link>
          </article>
            :
            <div className='profile'>
              <p>olá, {user.login} </p>
              <Link to='/area-atleta'>área do atleta</Link>
            </div>
        }

      </nav>
    </header>
  );
}