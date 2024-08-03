import react from 'react'
import { InputArea } from './style';
const Input = ({ ...props }) => {


  return (
    <InputArea
      width={props.width || 'auto'}
    >
      <input 
        {...props}
      />
    </InputArea>
  )
}

export default Input;