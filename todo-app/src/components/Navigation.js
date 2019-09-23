import React, { useState } from 'react';

import { Menu, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { setState } from 'expect/build/jestMatchersObject';

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


    const handleClick = (e, { name }) => setState(name);

    return (
        <Container>
            <Menu pointing secondary>
                <Menu.Item 
                    name='ALL'
                    active={activeItem === 'ALL'}
                    onClick={() => setActiveItem('ALL')}
                />
                <Menu.Item 
                    name='ACTIVE'
                    active={activeItem === 'ACTIVE'}
                    onClick={() => setActiveItem('ACTIVE')}
                />
                <Menu.Item 
                    name='COMPLETED'
                    active={activeItem === 'COMPLETED'}
                    onClick={() => setActiveItem('COMPLETED')}
                />
            </Menu>
        </Container>
    );
}

export default Navigation;