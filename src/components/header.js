import { useContext, useEffect } from 'react';
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

  useEffect(() => {

    function getUser() {
      if (user.id) {
        localStorage.setItem('user', JSON.stringify(user))
      }
      if (user.length === 0 && localStorage.getItem('user')) {
        setUser(JSON.parse(localStorage.getItem('user')))
      }
    }

    getUser();

  }, [setUser]);
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/home'>home</Link></li>
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