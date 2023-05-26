import React from 'react';
import { LinkArea, LinkIcon } from './styled';
import { useHistory, useLocation } from 'react-router-dom';

const MyComponent = ({ title, icon, link }) => {
    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname === link;

    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push( link );
    }

    return (
        <LinkArea
        data-tooltip-content={title}
        id="tip-right"
         active={isActive}
         href={link}
         onClick={handleLinkClick}>
            <LinkIcon src={icon} />
            </LinkArea>
    )
}

export default MyComponent