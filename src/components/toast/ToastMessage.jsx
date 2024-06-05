import React, { useContext } from 'react'
import {AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning, } from 'react-icons/ai';
import './styles.css';

const iconStyle = {marginRight: '10px'};
const icons = {
  success: <AiOutlineCheckCircle style={iconStyle} />,
  info: <AiOutlineInfoCircle style={iconStyle} />,
  warning: <AiOutlineWarning style={iconStyle} />,
  error: <AiOutlineCloseCircle style={iconStyle} />
}
const ToastMessage = ({type ='info', message, onClose=() => {}}) => {
  
  return (
    <div className={`toast toast-${type}`}>
        {icons[type]}
        {message}
        <AiOutlineClose className='closeBtn' color='white' onClick={() => onClose()} />
    </div>
  )
}

export default ToastMessage