import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';
import history from '~/services/history';

import { signInSucess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.log('Usuário não é um prestador de serviços!');
    return;
  }

  yield put(signInSucess(token, user));

  history.pushState('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
