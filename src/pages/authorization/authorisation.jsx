import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { server } from '../../bff'
import { H2, Input, Button } from '../../components'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const authFormSchema = yup.object().shape({
  login: yup.string()
    .required('Заполните логин')
    .matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры.')
    .min(3, 'Неверно заполнен логин. Минимум 3 символа')
    .max(15, 'Неверно заполнен логин. Максимум 15 символов'),
  password: yup.string()
    .required('Заполните пароль')
    .matches(/^[\w#%]+$/, 'Неверно заполнен пароль. Допускаются только буквы, цифры, знаки #, %.')
    .min(6, 'Неверно заполнен пароль. Минимум 6 символов')
    .max(20, 'Неверно заполнен пароль. Максимум 20 символов'),
});

const StyledLink = styled(Link)`
text-align: center;
text-decoration: underline;
margin: 20px 0;
font-size: 18px;
`;

const ErrorMessage = styled.div`
margin: 10px 0 0;
padding: 8px;
background-color: #fcadad;
font-size: 18px;
`;

const AuthorizationContainer = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormSchema),
  })

  const [serverError, setServerError] = useState(null);

  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then(({ error, response }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
      }
    })
  }
  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  return (
    <div className={className}>
      <H2>Авторизация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder='Логин' {...register('login', {
          onChange: () => setServerError(null),
        })} />
        <Input type="password" placeholder='Пароль' {...register('password', {
          onChange: () => setServerError(null),
        })} />
        <Button type='submit' disabled={!!formError}>Авторизоваться</Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <StyledLink to="/register">Регистрация</StyledLink>
      </form>
    </div>
  )
}

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > form {
  width: 260px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  }
`;