import { Link } from 'react-router-dom';
import logo from '../../assets/freshcart-logo.svg';
import { useContext } from 'react';
import { authContext } from '../../context/Auth/Auth';

export default function Footer() {
  const { userToken } = useContext(authContext);

  return (
    <>
      <footer className="bg-white border border-t-1 mt-6 dark:bg-gray-900">
      </footer>
    </>
  );
}
