import { useContext } from "react";
import { AppContext } from '../context/AppContext';
import Swal from 'sweetalert2'

export default function CorridaDetails() {

  const {
    trail
  } = useContext(AppContext);


  return (
    <>
      <article>
        <h2 className="modal__title" id="dialog1_label">
          {trail.nome}
          opaaaaaaaa
        </h2>
      </article>
      <nav className="modal__grade">
        <ul className="modal__grade--list">
        
        </ul>
      </nav>
    </>
  )
}