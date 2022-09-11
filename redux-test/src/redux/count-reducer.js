
const initState = 0;
export default function countReducer(prevState = initState, action) {
    console.log(prevState);
    const { type, data } = action;
    switch (type) {
        case 'increment':
            return prevState + data * 1;
        case 'decrement':
            return prevState - data * 1;
        default:
            return prevState;
    }

}