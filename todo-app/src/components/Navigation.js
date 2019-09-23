import React, { useState, useContext } from 'react';

import { TodoContext } from '../context/TodoContext.js';

import { Menu, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    text-align: center;

    .ui.pointing.secondary.menu {
        display: flex;
        justify-content: center;
    }
`;

const Navigation = () => {

    const [activeItem, setActiveItem] = useState('ALL');

    const { dispatch } = useContext(TodoContext);

    const handleClick = (e) => {
        setActiveItem(e.target.getAttribute('value'));
        dispatch({
            type: `FILTER_${e.target.getAttribute('value')}`
        })
    }

    return (
        <Container>
            <Menu pointing secondary>
                <Menu.Item
                    name='ALL' 
                    value='ALL'
                    active={activeItem === 'ALL'}
                    onClick={handleClick}
                >ALL</Menu.Item>
                <Menu.Item
                    name='ACTIVE' 
                    value='ACTIVE'
                    active={activeItem === 'ACTIVE'}
                    onClick={handleClick}
                />
                <Menu.Item
                    name='COMPLETED' 
                    value='COMPLETED'
                    active={activeItem === 'COMPLETED'}
                    onClick={handleClick}
                />
            </Menu>
        </Container>
    );
}

export default Navigation;