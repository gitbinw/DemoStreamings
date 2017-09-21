import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        const {title} = this.props;

        const arrMenus = [
            {title: 'Movies', path: '/movies'},
            {title: 'Series', path: '/series'}
        ];
        const jsxMenus = arrMenus.map((menu, i) => {
            return (
                <Link key={i} to={menu.path}>
                    <div className="item home-menus">
                        <div className="glyphicon glyphicon-film">
                            <span>{menu.title}</span>
                        </div>
                        <span>Popular {menu.title}</span>
                    </div>
                </Link>
            )
        });

        return(
            <div>
                <h3 className="title">{title}</h3>
                <div className="item-container home-container">
                    {jsxMenus}
                </div>
            </div>
        )
    }
}