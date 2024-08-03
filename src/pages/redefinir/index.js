import React, { useState } from 'react';
import SelectArea from '../../components/select/index.js';
import Input from '../../components/input/index.js';
import Button from '../../components/button/index.js';
import { LoginContainer, LoginForm, ErrorMessage } from './style.js';

// Mocked correct answers
const correctAnswers = {
  question1: 'option1',
  question2: 'option2',
  question3: 'option3',
};

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

  const handleSelectChange = (e, question) => {
    setSelectedValues(prevState => ({
      ...prevState,
      [question]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selectedValues.question1 === correctAnswers.question1 &&
      selectedValues.question2 === correctAnswers.question2 &&
      selectedValues.question3 === correctAnswers.question3
    ) {
      setErrorMessage('');
      alert('Sucesso! Senha redefinida.');
    } else {
      setErrorMessage('Falha! Respostas incorretas.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Redefinir Senha</h2>
        <div className="input-group">
          <p>Selecione a resposta para a pergunta 1</p>
          <SelectArea
            options={options}
            value={selectedValues.question1}
            onChange={(e) => handleSelectChange(e, 'question1')}
          />
        </div>
        <div className="input-group">
          <p>Selecione a resposta para a pergunta 2</p>
          <SelectArea
            options={options}
            value={selectedValues.question2}
            onChange={(e) => handleSelectChange(e, 'question2')}
          />
        </div>
        <div className="input-group">
          <p>Selecione a resposta para a pergunta 3</p>
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
