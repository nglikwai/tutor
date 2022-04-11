export default (state = [], action) => {
    switch (action.type) {
        case 'SELECT':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
