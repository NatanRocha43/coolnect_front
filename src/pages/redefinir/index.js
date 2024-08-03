// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import SelectArea from '../../components/select/index.js';
import Input from '../../components/input/index.js';
import Button from '../../components/button/index.js';
import { LoginContainer, LoginForm, ErrorMessage } from './style.js';

const API_URL = 'https://your-backend-api.com/reset-password';

const options = [
  { value: '', label: 'Selecione uma das opções', disabled: true }, 
  { value: 'option1', label: 'Opção 1' },
  { value: 'option2', label: 'Opção 2' },
  { value: 'option3', label: 'Opção 3' }
];

const Login = () => {
  const [selectedValues, setSelectedValues] = useState({
    question1: '',
    question2: '',
    question3: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSelectChange = (e, question) => {
    setSelectedValues(prevState => ({
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
        options: selectedValues,
        newPassword: password,
        email: email
      };
      
      const response = await axios.post(API_URL, data);
      
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
          <SelectArea
            options={options}
            value={selectedValues.question1}
            onChange={(e) => handleSelectChange(e, 'question1')}
          />
        </div>
        <div className="input-group">
          <p>Qual o nome da sua primeira professora?</p>
          <SelectArea
            options={options}
            value={selectedValues.question2}
            onChange={(e) => handleSelectChange(e, 'question2')}
          />
        </div>
        <div className="input-group">
          <p>Em qual cidade seus pais se conheceram?</p>
          <SelectArea
            options={options}
            value={selectedValues.question3}
            onChange={(e) => handleSelectChange(e, 'question3')}
          />
        </div>
        <div className="input-group">
          <Input
            type="password"
            placeholder='Nova Senha'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="input-group">
          <Input
            type="email"
            placeholder='Seu e-mail'
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
