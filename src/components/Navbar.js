import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Início</Link>
    <Link to="/users">Lista de Usuários</Link>
    <Link to="/add-user">Criar Usuário</Link>
  </nav>
);

export default Navbar;
