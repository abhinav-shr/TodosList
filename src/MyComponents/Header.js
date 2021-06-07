import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export const Header = () => {
    const headerStyle = {
        
        padding : '10px',
        textDecoration : 'none',
        color : 'black'
    
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" style={headerStyle} to="/">Todos List</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-a active" style={headerStyle} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-a" style={headerStyle} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-a" style={headerStyle} to="/addtodo">Add Todo</Link>
                        </li>
                        
                        
                    </ul>

                    <Link className="nav-a" style={headerStyle} to="/searchtodo">Search Todo</Link>
                </div>
            </div>
            
            </nav>

        </div>
    )
}