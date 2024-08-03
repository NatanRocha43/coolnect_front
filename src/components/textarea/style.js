import styled from 'styled-components'

export const Container =  styled.textarea`
  border: 3px solid #000;
  border-radius: 8px;
  box-sizing: border-box;
  width: ${props => props.width || '100%'};
  padding: 8px;
`;