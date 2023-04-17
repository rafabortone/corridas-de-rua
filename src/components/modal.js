import { useContext } from "react";
import { AppContext } from '../context/AppContext';
import IconClose from '../icons/icon-close.svg'


export default function Modal() {
  const {
    modalVisible,
    setModalVisible
  } = useContext(AppContext);


  return (
    <>
      {modalVisible ?
        <div className="modal" data-testeid="modal" tabIndex="-1">
          <div className="modal__content" aria-modal="true" id="dialog1" role="dialog" aria-labelledby="dialog1_label" aria-describedby="dialog1_desc" >
            <div className="modal__close">
              <img 
                src={IconClose} 
                onClick={() => setModalVisible(false)}
                alt="botão para fechar a caixa de dialogo"
                id="dialog1_close"
              />
            </div>
          </div>
        </div> : null
      }
    </>
  );
}