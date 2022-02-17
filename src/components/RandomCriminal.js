import React from 'react'
import * as actionCreators from '../state/action-creators';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledRandomCriminal = styled.div`

`


const RandomCriminal = (props) => {
    
    const randNum = () => Math.floor(Math.random() * 20)

    console.log('1: ', randNum())
    
    if(props.allMostWanted){
        // const randCrim = props.getRandomCriminal(Math.floor(Math.random() * 20))
        // console.log('randCrim: ', randCrim);
        return(
            <StyledRandomCriminal>
                <img src={props.allMostWanted[randNum()].images[0].large} />
            </StyledRandomCriminal>
        )
    }else{
        return null;
    }
}

export default connect(state => state, actionCreators)(RandomCriminal);


