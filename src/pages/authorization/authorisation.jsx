import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { server } from '../../bff'
import { useState } from 'react';
import styled from 'styled-components';

const authFormSchema = yup.object().shape({
  login: yup.string()
    .required('Заполните логин')
    .matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры.')
    .min(3, 'Неверно заполнен логин. Минимум 3 символа')
    .max(15, 'Неверно заполнен логин. Максимум 15 символов'),
  password: yup.string()
    .required('Заполните пароль')
    .matches(/^[\w]#%+$/, 'Неверно заполнен пароль. Допускаются только буквы, цифры, знаки #, %.')
    .min(6, 'Неверно заполнен пароль. Минимум 6 символов')
    .max(20, 'Неверно заполнен пароль. Максимум 20 символов'),
});

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

  const [serverError, setServerError] = useState();

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
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Логин' {...register('login')} />
        <input type="password" placeholder='Пароль' {...register('password')} />
        <button type='submit' disabled={!!formError}>Войти</button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  )
}

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > form {
  display: flex;
  flex-direction: column;
  }
`;