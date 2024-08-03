import React, { useState } from 'react';
// import axios from 'axios';
import SelectArea from '../../components/select/index.js';
import Input from '../../components/input/index.js';
import Button from '../../components/button/index.js';
import '../../style/redefinirSenha.scss';

const options = [
  { value: '', label: 'Selecione uma das opções', disabled: true }, 
  { value: 'option1', label: 'Opção 1' },
  { value: 'option2', label: 'Opção 2' },
  { value: 'option3', label: 'Opção 3' }
];

// Respostas corretas mockadas
const correctAnswers = {
  question1: 'option1',
  question2: 'option2',
  question3: 'option3',
};

const Login = () => {
  const [selectedValues, setSelectedValues] = useState({
    question1: '',
    question2: '',
    question3: ''
  });
  const [errorMessage, setErrorMessage] = useState(''); // Estado para a mensagem de erro

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
      setErrorMessage(''); // Limpa a mensagem de erro
      alert('Sucesso! Senha redefinida.');
    } else {
      setErrorMessage('Falha! Respostas incorretas.'); // Define a mensagem de erro
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
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
          <div className="error-message">{errorMessage}</div> // Exibe a mensagem de erro
        )}
        <div className="input-group">
          <Button
            type="submit"
            text="Redefinir"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
