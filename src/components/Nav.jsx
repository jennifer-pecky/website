import '../styles/nav.css';
import { AiTwotoneHome } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { BiBookAlt } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { MdMessage } from 'react-icons/md';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <NavLink
        to="/home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiTwotoneHome />
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <HiUser />
      </NavLink>
      <NavLink
        to="/experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBookAlt />
      </NavLink>
      <NavLink
        to="/contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <MdMessage />
      </NavLink>
      <NavLink
        to="/footer"
        onClick={() => setActiveNav('#footer')}
        className={activeNav === '#footer' ? 'active' : ''}
      >
        <RiServiceLine />
      </NavLink>
    </nav>
  );
}
