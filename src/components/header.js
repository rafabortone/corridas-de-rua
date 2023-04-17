import userIcon from '../icons/icon-user.svg'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

export default function Header() {
  const { subscription } = useContext(AppContext);
  
  return (
    <header>
      <article>
        <p>{'inscrições: '+ subscription.length}</p>
        <img src={userIcon} alt="user icon" />
      </article>
    </header>
  );
}