import { useContext } from "react";
import { AppContext } from '../context/AppContext';
import Swal from 'sweetalert2'

export default function Modal() {
  const {
    trail,
    grade,
    subscription,
    setModalVisible

  } = useContext(AppContext);

  function handleSubscription(trailId) {
    subscription.push(trailId);
    Swal.fire(
      '',
      'Inscrição realizada com sucesso!',
      'success'
    )
    setModalVisible(false);
  }

  return (
    <>
      <article>
        <h2 className="modal__title" id="dialog1_label">
          {trail.name}
        </h2>
        <p className="modal__description" id="dialog1_desc">
          {trail.description}
        </p>
        <div className='modal__button'>
          {subscription.includes(trail.id) ?
            <h3>Inscrito</h3> :
            <button
              onClick={() => handleSubscription(trail.id)}
              type="button"
            >inscrever-se</button>
          }
        </div>
      </article>
      <nav className="modal__grade">
        <ul className="modal__grade--list">
          {grade.map(({ name, hours, id }) => {
            return (
              <li className="modal__grade--item" key={id}>
                <h3>{name}</h3>
                <p>{hours + ' horas'}</p>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  )

}