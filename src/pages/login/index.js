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
} from './style.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      if (response.data.success) {
        alert('Login bem-sucedido!');
      } else {
        alert('Falha no login. Verifique suas credenciais.');
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      alert('Ocorreu um erro. Por favor, tente novamente.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h2>Login</h2>
        <InputGroup>
          <Input
            type="text"
            id="username"
            placeholder='Usuário'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Input
            type="password"
            id="password"
            value={password}
            placeholder='Senha'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
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
