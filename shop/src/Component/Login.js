import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../_actions/user_action';
import '../Style/Login.css';

export default function Login(props) {
  const dispatch = useDispatch();
  const { id, error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const idReference = useRef();
  const pwReference = useRef();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState();

  // const onEmailHandler = (e) => {
  //   setEmail(e.currentTarget.value);
  // };

  // const onPasswordHandler = (e) => {
  //   setPassword(e.currentTarget.value);
  // };

  // 선언형 프로그래밍 // 리랜더링
  if (error === null && loading === false && id !== '') {
    navigate('/');
  }
  const onSubmit = (e) => {
    let body = {
      email: idReference.current.value,
      password: pwReference.current.value,
    };

    dispatch(loginUser(body)); // 리랜더링하고 실행된다. , 랜더링 한 후에 실행되게 해야한다.
  };

  return (
    <div className='container mt-5 col-3 form'>
      <div className='form'>
        <label className='mt-2' htmlFor='id'>
          아이디
        </label>
        <input
          className='w-100 id mt-2'
          type='text'
          placeholder='아이디'
          ref={idReference}
        ></input>
        <label className='mt-2' htmlFor='pw'>
          비밀번호
        </label>
        <input
          className='w-100 mt-2 pw'
          type='text'
          placeholder='비밀번호'
          ref={pwReference}
        ></input>
        <button className='w-100 mt-4 login' type='button' onClick={onSubmit}>
          로그인
        </button>
        <div className='d-flex justify-content-around mt-4'>
          <p className='message'>
            Not registered? <Link to='/signup'>Create an account</Link>
          </p>
        </div>
      </div>

      <hr className='mt-4' />
      <div className='d-flex justify-content-around icon container'>
        <i className='fab fa-facebook icon-facebook fa-3x'></i>
        <i className='fab fa-google icon-google fa-3x'></i>
      </div>
    </div>
  );
}
