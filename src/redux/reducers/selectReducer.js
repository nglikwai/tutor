const locations = ['中西區', '東區', '南區', '灣仔', '九龍城', '觀塘', '深水埗', '黃大仙', '油尖旺', '離島', '葵青', '北區', '西貢', '沙田', '大埔', '荃灣', '屯門', '元朗'];
const subjects = ['中文', 'eng', 'math', 'ls', 'phy', 'chem', 'bio', 'econ', 'bafs', 'geo', 'history', '中國歷史'];
const genders = ['m', 'f'];

export default (state = { '地點': locations, '科目': subjects, gender: genders, price: 150 }, action) => {
    switch (action.type) {
        case 'SELECT':
            return { ...state, ...action.payload };
        case 'GENDER_SELECT':
            return { ...state, gender: action.payload };
        case 'PRICE_SELECT':
            return { ...state, price: action.payload };
        default:
            return state;
    }
};
