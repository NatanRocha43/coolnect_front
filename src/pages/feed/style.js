import styled from 'styled-components'

export const Container =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  background-color: #fff;
  margin: 20px 16px;
  padding: 16px 24px 16px 16px;
  border-radius: 8px;
  
  .wrapper-content {
      display: grid;
      gap: 24px;
      grid-template-columns: 25% 1fr;  
      
      .aside {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
  }
`;

export const Post =  styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;

  .button-post {
      align-self: flex-end;
  }
`;

export const Feed =  styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;

  textarea {
    width: 100%;
  }
`;