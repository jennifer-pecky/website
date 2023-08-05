import { Outlet } from 'react-router-dom';
import Nav from './Nav';

export default function Navbar() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
