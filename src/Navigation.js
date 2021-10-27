import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
      <div>
        <NavLink to="/registration">Register</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>
        <br />
        <NavLink to="/enroll">Enroll</NavLink>
      </div>
    );
}
