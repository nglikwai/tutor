export default (state = [{ username: '', coin: 0 }], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return action.payload;
        default:
            return state
    }
}