import userIcon from '../icons/icon-user.svg'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const { subscription } = useContext(AppContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              home
            </Link>
          </li>
          <li>
            corridas
          </li>
          <li>
            duvidas
          </li>
          <li>
            contato
          </li>
        </ul>
        <article>
          <Link to='/'>
            login
          </Link>
        </article>
      </nav>
    </header>
  );
}