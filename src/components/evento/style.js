import styled from 'styled-components'

export const Container =  styled.div`
  border: 3px solid #000;
  border-radius: 8px;
  box-sizing: border-box;
  width: ${props => props.width || '100%'};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .user {
    color: #c4c4c4;
  }

  .description {
    font-size: 20px;
    font-weight: bold;
  }

  .curtidas {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;