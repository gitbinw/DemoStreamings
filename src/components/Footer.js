import React from 'react';

const Footer = () => {
    const arrLinks = [
        {title: 'Home', href: '/'},
        {title: 'Terms and Conditions', href: '/'},
        {title: 'Privacy Policy', href: '/'},
        {title: 'Collection Statement', href: '/'},
        {title: 'Help', href: '/'},
        {title: 'Manage Account', href: '/'}
    ];
    const jsxLinks = arrLinks.map((link, i) => {
        return (
            <li key={i}>
                <a href={link.href}>{link.title}</a>
            </li>
        )
    });
    return (
        <div className="footer">
            <ul>
                {jsxLinks}
            </ul>

            <p>Copyright &copy; 2017 DEMO Streaming. All Rights Reserved.</p>

            <div className="footer-bottom">
                <div className="socials">
                    <a href="#" title="facebook"><img src="assets/social/facebook-white.svg" /></a>
                    <a href="#" title="twitter"><img src="assets/social/twitter-white.svg" /></a>
                    <a href="#" title="instagram"><img src="assets/social/instagram-white.svg" /></a>
                </div>
                <div className="platforms">
                    <a href="#" title="ios"><img src="assets/store/app-store.svg" /></a>
                    <a href="#" title="android"><img src="assets/store/play-store.svg" /></a>
                    <a href="#" title="windows"><img src="assets/store/windows-store.svg" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;