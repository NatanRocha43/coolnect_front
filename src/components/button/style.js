import styled from 'styled-components'

export const ButtonArea =  styled.div`
  width: ${props => props.width || 'auto'};
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    width: 200px;
    height: 32px;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    color: #333;
    border-radius: 4px;
    padding: 8px;

    &:hover {
      background-color: #bdbdbd;
      cursor: ${props => props.loading ? 'wait' : 'pointer'};
    }
  }
`;