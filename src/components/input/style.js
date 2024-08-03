import styled from 'styled-components'

export const InputArea =  styled.div`
  width: ${props => props.width || 'auto'};
  display: flex;
  flex-direction: row;

  input {
    width: 100%;
    height: 32px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0px 8px;
    margin: 4px 0px;
  }

`;