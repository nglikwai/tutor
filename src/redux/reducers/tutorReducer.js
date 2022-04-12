export default (state = {
    list: {
        isFetching: false,
        tutors: []
    },
    detail: {}
}, action) => {
    switch (action.type) {
        case 'FETCH_TUTORS_REQUEST':
            return {
                ...state,
                list: {
                    ...state.list,
                    isFetching: true
                }
            };
        case 'FETCH_TUTORS_SUCCESS':
            return {
                ...state,
                list: {
                    isFetching: false,
                    tutors: action.payload
                }
            };
        case 'FETCH_TUTOR':
            return {
                ...state,
                detail: action.payload
            };
        default:
            return state;
    }
};


