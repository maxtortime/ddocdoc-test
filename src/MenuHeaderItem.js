import React from 'react';

export default (props) => {
    let className = 'menu-header-item';
    let newIcon = '';

    if (props.menuText === '기획전') {
        className +=' menu-header-active-item'
    }

    return (
        <li className={className}>
            <div>
                {newIcon}
                <a href={props.menuHref}>{props.menuText}</a>
            </div>
        </li>
    )
}