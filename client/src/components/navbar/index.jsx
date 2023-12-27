import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <span>{user}</span>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
