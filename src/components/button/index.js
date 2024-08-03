import react from 'react'
import { ButtonArea } from './style';
const Button = ({ ...props }) => {


  return (
    <ButtonArea
      {...props}
    >
      <button 
        {...props}
      >
        {props.text}
      </button>
    </ButtonArea>
  )
}

export default Button;