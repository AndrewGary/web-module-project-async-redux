import React from 'react';
import styled from 'styled-components';

import * as actionCreators from '../state/action-creators';
import { connect } from 'react-redux';

const StyledHeader = styled.div`

`

const Header = (props) => {

    return (
        <StyledHeader>
            Header.
        </StyledHeader>
    )
}

export default connect(state => state, actionCreators)(Header);