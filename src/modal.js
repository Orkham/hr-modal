/*eslint no-unused-vars: off */
import { createPortal } from 'react-dom'
import React, { useState } from 'react'
import './modal.css'

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