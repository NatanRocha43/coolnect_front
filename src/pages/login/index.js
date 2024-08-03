import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import '../../style/login.scss';

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
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <Input
            type="text"
            id="username"
            placeholder='Usuário'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <Input
            type="password"
            id="password"
            value={password}
            placeholder='Senha'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          text="Entrar"
        />
        <div>
        <div className="login-links">
          <div>
            <a href="/forgot-password" className="link">Esqueci minha senha</a>
          </div>
          <div>
            <a href="/register" className="link">Primeiro cadastro</a>
          </div> 
        </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
