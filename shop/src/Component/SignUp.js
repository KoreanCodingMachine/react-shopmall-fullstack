import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Style/SignUp.css';

export default function SignUp() {
  const onSubmit = (e) => {
    e.prevendDefault();
  };

  const emailReference = useRef();
  const idReference = useRef();
  const pwReference = useRef();
  const rePwReference = useRef();
  const nameReference = useRef();

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
          ref={emailReference}
        ></input>
        <label className='mt-2' htmlFor='id'>
          아이디
        </label>
        <input
          className='w-100 id mt-2'
          type='id'
          placeholder='아이디'
          id='id'
          ref={idReference}
        ></input>
        <label className='mt-2' htmlFor='pw'>
          비밀번호
        </label>
        <input
          className='w-100 mt-2 pw'
          type='password'
          placeholder='비밀번호'
          id='pw'
          ref={pwReference}
        ></input>
        <label className='mt-2' htmlFor='re-pw'>
          비밀번호 확인
        </label>
        <input
          className='w-100 mt-2 pw'
          type='password'
          placeholder='비밀번호 확인'
          id='re-pw'
          ref={rePwReference}
        ></input>
        <label className='mt-2' htmlFor='name'>
          이름
        </label>
        <input
          className='w-100 mt-2 pw'
          type='text'
          placeholder='이름'
          id='name'
          ref={nameReference}
        ></input>
        <button className='w-100 mt-4 login' type='button' onClick={() => {}}>
          회원가입
        </button>
      </div>
    </div>
  );
}
