import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expesify</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>Home</NavLink><span> | </span>
        <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink><span> | </span>
    </header>
);

export default Header;