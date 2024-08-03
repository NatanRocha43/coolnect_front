import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import { 
  LoginContainer, 
  LoginForm, 
  InputGroup, 
  LoginLinks, 
  StyledLink, 
  ErrorMessage
} from './style.js';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [email_pessoal, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://webhook.site/56c4b64c-8b32-4515-8b38-6c6f34e69334', {
        email_pessoal,
        senha,
      });

      if (response.data.success) {
        alert('Login bem-sucedido!');
      } else {
        setErrorMessage('Falha ao Logar.');
      }
    } catch (error) {
      setErrorMessage('Falha ao Logar.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h2>Login</h2>
        <InputGroup>
        <p>E-mail</p>
          <Input
            type="text"
            value={email_pessoal}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
        <p>Senha</p>
          <Input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </InputGroup>
        {errorMessage && (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )}
        <Button
          type="submit"
          text="Entrar"
        />
        <LoginLinks>
          <div>
            <StyledLink href="/forgot-password">Esqueci minha senha</StyledLink>
          </div>
          <div>
            <StyledLink href="/register">Primeiro cadastro</StyledLink>
          </div>
        </LoginLinks>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
