
import React from 'react';
import { Link } from 'react-router-dom';

function Nav({colors}) {
      return (
        <nav className="NavBar">
        <Link to="/color/new">Add a color</Link>
        <ul>
            {colors.map((color,index)=>
            <li key={index} >
                <Link to={`/color/${color.name}`}>{color.name}</Link>
            </li>
            )}
        </ul>
        </nav>
      );
    
}

export default Nav;
