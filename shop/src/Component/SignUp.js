import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Style/SignUp.css';

export default function SignUp() {
  const emailRef = useRef();
  const idRef = useRef();
  const pwRef = useRef();
  const rePwRef = useRef();
  const nameRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(idRef.current.value);
    console.log(pwRef.current.value);
    console.log(rePwRef.current.value);
    console.log(nameRef.current.value);
    axios.post('/api/account', { email: emailRef.current.value });
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
