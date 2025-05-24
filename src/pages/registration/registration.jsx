import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { server } from '../../bff'
import { AuthFormError, H2, Input, Button } from '../../components'
import { useState } from 'react';
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../actions'
import { selectUserRole } from '../../selectors'
import { useResetForm } from '../../hooks'
import styled from 'styled-components';
import { ROLE } from '../../constants';

const regFormSchema = yup.object().shape({
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
  passcheck: yup
    .string()
    .required('Повторите пароль')
    .oneOf([yup.ref('password'), null], 'Пароль не совпадает')
});

const RegistrationContainer = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
      passcheck: '',
    },
    resolver: yupResolver(regFormSchema),
  })

  const [serverError, setServerError] = useState(null);

  const dispatch = useDispatch();
  const roleID = useSelector(selectUserRole);

  useResetForm(reset);

  const onSubmit = ({ login, password }) => {
    server.register(login, password).then(({ error, response }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`);
        return;
      }
      dispatch(setUser(response));
    })
  }
  const formError = errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
  const errorMessage = formError || serverError;

  if (roleID !== ROLE.GUEST) {
    return <Navigate to="/" />
  }

  return (
    <div className={className}>
      <H2>Регистрация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder='Логин' {...register('login', {
          onChange: () => setServerError(null),
        })} />
        <Input type="password" placeholder='Пароль' {...register('password', {
          onChange: () => setServerError(null),
        })} />
        <Input type="password" placeholder='Повторите пароль' {...register('passcheck', {
          onChange: () => setServerError(null),
        })} />
        <Button type='submit' disabled={!!formError}>Зарегистрироваться</Button>
        {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
      </form>
    </div>
  )
}

export const Registration = styled(RegistrationContainer)`
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