import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button, SubButton, Container, Title } from '../styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  function verifyLogin() {
    const validEmail = /\S+@\S+\.\S+/;
    const pwLength = 6;
    if ((password.length > pwLength) && (validEmail.test(email))) {
      return false;
    }
    return true;
  }

  function submitButton() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    dispatch({ type: 'LOGIN', email });
    history.push('/comidas');
  }

  return (
    <Container>
      <Form
        className="d-flex flex-column align-items-center bg-white rounded p-5 shadow-lg"
      >
        <Title>Login</Title>
        <Form.Control
          className="my-2"
          size="lg"
          type="email"
          placeholder="Email"
          value={ email }
          data-testid="email-input"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <Form.Control
          size="lg"
          className="my-2"
          type="password"
          placeholder="Senha"
          value={ password }
          data-testid="password-input"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <Button
          className="btn my-2"
          type="button"
          data-testid="login-submit-btn"
          onClick={ submitButton }
          disabled={ verifyLogin() }
        >
          Entrar
        </Button>
        <SubButton
          className="btn"
          type="button"
          variant="$orange-500"
          onClick={ () => { setPassword('1234567'); setEmail('teste@teste.com'); } }
        >
          Esqueceu a senha ?
        </SubButton>
      </Form>
    </Container>
  );
}
