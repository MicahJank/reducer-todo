import React from 'react';

import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 30px;
    background-color: #0074D9;

    .ui.center.aligned.header {
        color: white;
    }
`;

const HeaderTitle = () => {

    return (
        <Container>
            <Header textAlign='center' as='h1'>useReduce Todo</Header>
        </Container>
    )
}

export default HeaderTitle;