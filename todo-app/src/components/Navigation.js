import React, { useState, useContext } from 'react';

import { TodoContext } from '../context/TodoContext.js';
import { NavigationContext } from '../context/NavigationContext.js';

import { Menu, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    text-align: center;
    background-color: #0074D9;
    padding: 30px 0;

    .ui.pointing.secondary.menu {
        display: flex;
        justify-content: center;

        a {
            color: rgb(255, 255, 255, 0.5);
        }

        .active.item {
            color: rgb(255, 255, 255);
            border-color: rgb(255, 255, 255);

        }
    }
`;

const Navigation = () => {

    const [activeItem, setActiveItem] = useContext(NavigationContext);
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