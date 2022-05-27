import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../_actions/user_action';
import '../Style/SignUp.css';

export default function SignUp(props) {
  const dispatch = useDispatch();
  const { id, error, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const emailRef = useRef();
  const idRef = useRef();
  const pwRef = useRef();
  const rePwRef = useRef();
  const nameRef = useRef();

  // if (error === null && loading === false && id !== '') {
  //   navigate('/');
  // }
  const onSubmit = (e) => {
    // e.preventDefault();

    if (pwRef !== rePwRef) {
      return alert('비밀번호와 비밀번호확인은 같아야합니다.');
    }

    let body = {
      email: emailRef.current.value,
      id: idRef.current.value,
      password: pwRef.current.value,
      repassword: rePwRef.current.value,
      name: nameRef.current.value,
    };
    dispatch(registerUser(body));
  };

  return (
    <div className='container col-3 form'>
      <div className='form'>
        <label className='mb-2' htmlFor='email'>
          이메일
        </label>
        <input
          className='w-100 id'
          type='email'
          placeholder='이메일'
          id='email'
          ref={emailRef}
        ></input>
        <label className='mt-2' htmlFor='id'>
          아이디
        </label>
        <input
          className='w-100 id mt-2'
          type='id'
          placeholder='아이디'
          id='id'
          ref={idRef}
        ></input>
        <label className='mt-2' htmlFor='pw'>
          비밀번호
        </label>
        <input
          className='w-100 mt-2 pw'
          type='password'
          placeholder='비밀번호'
          id='pw'
          ref={pwRef}
        ></input>
        <label className='mt-2' htmlFor='re-pw'>
          비밀번호 확인
        </label>
        <input
          className='w-100 mt-2 pw'
          type='password'
          placeholder='비밀번호 확인'
          id='re-pw'
          ref={rePwRef}
        ></input>
        <label className='mt-2' htmlFor='name'>
          이름
        </label>
        <input
          className='w-100 mt-2 pw'
          type='text'
          placeholder='이름'
          id='name'
          ref={nameRef}
        ></input>
        <button className='w-100 mt-4 login' type='button' onClick={onSubmit}>
          회원가입
        </button>
      </div>
    </div>
  );
}
