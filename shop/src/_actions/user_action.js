import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  SET_LOADING,
  SET_ERROR,
} from './types';

const setLoginUser = (userdata) => {
  return {
    type: LOGIN_USER,
    payload: userdata,
  };
};

const setRegisterUser = (register) => {
  return {
    type: REGISTER_USER,
    payload: register,
  };
};

const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    payload: loading,
  };
};

const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const loginUser = (dataToSubmit) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });
  dispatch({
    type: SET_ERROR,
    payload: null,
  });
  try {
    const response = await axios.post('/api/users/login', dataToSubmit);
    dispatch(setLoginUser(response.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
  }

  // const request = axios
  // .post('/api/users/login', dataToSubmit)
  // .then((response) => {
  //   dispatch(setLoginUser(response.data));
  //   dispatch(setLoading(false));
  // })
  // .catch((error) => {
  //   dispatch(setError(error.message));
  // });
};

// export function registerUser(dataToSubmit) {
//   const request = axios
//     .post('/api/users/register', dataToSubmit)
//     .then((res) => res.data);

//   return {
//     type: REGISTER_USER,
//     payload: request,
//   };
// }

export const registerUser = (dataToSubmit) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });
  dispatch({
    type: SET_ERROR,
    payload: null,
  });
  try {
    const response = await axios.post('/api/users/register', dataToSubmit);
    dispatch(setRegisterUser(response.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export function auth() {
  const request = axios.get('/api/users/auth').then((res) => res.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
