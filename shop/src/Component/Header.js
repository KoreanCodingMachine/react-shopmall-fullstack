import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';

export default function Header() {
  return (
    <div class='navbar sticky-top' fixed='top'>
      <div className='empty'>JUNS'S MALL</div>
      <ul className='list'>
        <li>
          <Link to='./login'>Login</Link>
        </li>
        <li>
          <Link to='./signup'>Join</Link>
        </li>
        <li>
          <Link to='./cart'>Cart</Link>
        </li>
        <li>
          <Link to='./mypage'>My Page</Link>
        </li>
        <li class='nav-item dropdown'>
          <a
            href='/'
            id='navbarDropdown'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            SNS
          </a>
          <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
            <li>
              <a className='dropdown-item' href='https://www.instagram.com/'>
                Instagram
              </a>
            </li>
            <li>
              <a class='dropdown-item' href='https://ko-kr.facebook.com/'>
                FaceBook
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
