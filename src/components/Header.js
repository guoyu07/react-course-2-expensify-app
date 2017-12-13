import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink className="navLink" to="/" activeClassName="is-active" exact={true}>Go Home</NavLink>
        <NavLink className="navLink" to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink className="navLink" to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;