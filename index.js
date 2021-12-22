/*eslint no-unused-vars: off */
import styled from 'styled-components'
import { createPortal } from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'

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

const StyledModal = styled.div`
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(26, 39, 156, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    background: white;
    padding: 1rem;
    border: 1px solid black;
  }
  #closeIcon {
    color: red;
    position: relative;
    top: -25px;
    right: 13px;
    font-size: 1.5rem;
    :hover {
      cursor: pointer;
    }
  }
`

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? createPortal(
        <StyledModal onClick={hide} onKeyPress={hide}>
          <p>Employé créé</p>

          <FaTimes id="closeIcon" />
        </StyledModal>,
        document.body
      )
    : null

export default Modal
