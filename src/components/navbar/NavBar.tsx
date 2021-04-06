import React from 'react';
import { SearchIcon } from '../../icons/SearchIcons';
import './navbar.scss';

export const NavBar = () => {
    return (
        <div className="navbar-main">
            <div className="nm-left">
              <span>Hentaigameshub</span>
            </div>
            <div className="nm-right">
                <button>
                    <SearchIcon />
                </button>
            </div>
        </div>
    )
}