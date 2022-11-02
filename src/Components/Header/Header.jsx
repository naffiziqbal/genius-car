import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='shadow-2xl'>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Genius Car</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to={'/home'} >Home</Link></li>
      <li><Link to={'/signup'}>Sign Up</Link></li>
      <li><Link to={'/login'}>Log In </Link></li>
      <li><Link>something</Link></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;
