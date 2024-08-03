import React, { useState, useEffect } from 'react';
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

  const API_URL = 'http://localhost:3030/login';


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, {
        email_pessoal,
        senha,
      });

      if (response.data.token) {
        localStorage.setItem('user_info', JSON.stringify(response.data))
        window.location = '/feed'
      } else {
        setErrorMessage('Falha ao Logar.');
      }
    } catch (error) {
      setErrorMessage('Falha ao Logar.');
    }
  };

  useEffect(() => {
    localStorage.removeItem('user_info')
  }, [])

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
            <StyledLink href="/redefinir-senha">Esqueci minha senha</StyledLink>
          </div>
          <div>
            <StyledLink href="/cadastro">Primeiro cadastro</StyledLink>
          </div>
        </LoginLinks>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
