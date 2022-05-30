import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        //backend에서 처리한 정보들이 response안에 다 들어있음
        console.log(response);
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
