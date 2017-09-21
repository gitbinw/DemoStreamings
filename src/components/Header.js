import React from 'react';

const Header = (props) => {
    const {toggleMenu, menuOn} = props;
    let menubarClass = 'header-menusbar';
    if (menuOn) menubarClass += ' menubar-dropdown';

    return (
        <div className="header">
            <span className="title">DEMO Streaming</span>
            <div className="header-menus">
                <div className="hamburger glyphicon glyphicon-menu-hamburger" onClick={toggleMenu}></div>
                <div className={menubarClass}>
                    <a href="#Login" title="Login">Login</a>
                    <a href="#freetrial" title="Start Your Free Trial">Start Your Free Trial</a>
                </div>
            </div>
        </div>
    )
}

export default Header;