import styled from 'styled-components'

export const Container =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`

  width: ${props => props.width || '100%'};
  margin: ${props => props.margin || 'auto'};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: #FFF;
  border-radius: 16px;

`;

