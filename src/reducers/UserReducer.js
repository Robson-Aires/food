const initialState = {
    token: '',
    name: 'Teste'
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return { ...state, token: action.payload.token };
        case 'SET_NAME':
            return { ...state, name: action.payload.name };
        default:
            return state;
    }
}

export default reducer;