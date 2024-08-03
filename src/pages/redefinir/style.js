import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

export const LoginForm = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  height: 90%;
  box-sizing: border-box;

  h2 {
    margin-bottom: 1.5rem;
  }

  .input-group {
    margin-bottom: 1.5rem;
  }

  .error-message {
    color: red;
    margin-bottom: 1rem;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 1rem;
`;
