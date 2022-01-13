/*eslint no-unused-vars: off */
import { createPortal } from 'react-dom'
import React, { useState } from 'react'
import './modal.css'


/**
 * Création d'un hook personnalisé pour la gestion des données de la fenêtre modale au sein de l'application dans laquelle elle sera déployée
 * @returns {isShowing : constante gérant l'affichage ou non de la modale ; toggle : appel modifiant l'option d'affichage}
 */
export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  function toggle() {
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    toggle,
  }
}


/**
 * 
 * @param {*} objet regroupant les méthodes d'affichage de la modale 
 * @returns Composant représentant la fenêtre modale à afficher dans l'application
 */
const Modal = ({ isShowing, hide }) =>
  isShowing
    ? createPortal(
        <div className='styledModal' onClick={hide} onKeyPress={hide}>
          <p>Employé créé</p>

          <div id="closeIcon">X</div>
        </div>,
        document.body
      )
    : null

export default Modal