import * as types from './action-types'

const initialState = {
    allMostWanted: [],
    randomCriminal: {}
};

function reducer(state = initialState, action){
    switch (action.type){
        case types.GET_ALL_MOST_WANTED:
            return {...state, allMostWanted: action.payload}
        case types.GET_RANDOM_CRIMINAL:
            return {...state, randomCriminal: state.allMostWanted[action.payload]}
        default:
            return state;
    }
}

export default reducer;