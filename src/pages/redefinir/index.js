// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../components/input/index.js';
import Button from '../../components/button/index.js';
import { LoginContainer, LoginForm, ErrorMessage } from './style.js';

const API_URL = 'https://your-backend-api.com/reset-password';

const Login = () => {
  const [securityAnswers, setSecurityAnswers] = useState({
    question1: '',
    question2: '',
    question3: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e, question) => {
    setSecurityAnswers(prevState => ({
      ...prevState,
      [question]: e.target.value
    }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        seguranca_1: securityAnswers.question1,
        seguranca_2: securityAnswers.question2,
        seguranca_3: securityAnswers.question3,
        senha: password,
        email_pessoal: email
      };
      
      const response = await axios.post(API_URL, data);
        console.log(data);
      if (response.status === 200) {
        alert('Sucesso! Senha redefinida.');
      }
    } catch (error) {
      setErrorMessage('Falha! Erro ao redefinir a senha.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Redefinir Senha</h2>
        <div className="input-group">
          <p>Qual o nome do primeiro animal de estimação?</p>
          <Input
            type="text"
            value={securityAnswers.question1}
            onChange={(e) => handleInputChange(e, 'question1')}
            required
          />
        </div>
        <div className="input-group">
          <p>Qual o nome da sua primeira professora?</p>
          <Input
            type="text"
            value={securityAnswers.question2}
            onChange={(e) => handleInputChange(e, 'question2')}
            required
          />
        </div>
        <div className="input-group">
          <p>Em qual cidade seus pais se conheceram?</p>
          <Input
            type="text"
            value={securityAnswers.question3}
            onChange={(e) => handleInputChange(e, 'question3')}
            required
          />
        </div>
        <div className="input-group">
        <p>Nova Senha</p>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="input-group">
        <p>Digite seu E-mail</p>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        {errorMessage && (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )}
        <div className="input-group">
          <Button
            type="submit"
            text="Redefinir"
          />
        </div>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
