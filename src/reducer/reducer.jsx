const myReducer = (state, action) => {


    switch (action.type) {
        case 'SET_BILL':
            const newTipByBill = state.percent * action.payload,
                newTotalByBill = (newTipByBill + action.payload) / state.people
            return { ...state, total: newTotalByBill, tipAmt: newTipByBill / state.people, bill: action.payload, reset: false }

        case 'SET_PERCENT':
            const newTipByPercent = action.payload * state.bill,
                newTotalByPercent = (newTipByPercent + state.bill) / state.people
            return { ...state, percent: action.payload, tipAmt: newTipByPercent / state.people, total: newTotalByPercent, reset: false }

        case 'SET_PEOPLE':
            const newTipByPeople = state.percent * state.bill,
                newTotalByPeople = (newTipByPeople + state.bill) / action.payload
            return { ...state, tipAmt: newTipByPeople / action.payload, people: action.payload, total: newTotalByPeople, reset: false }

        case 'RESET_ALL':
            return {
                tipAmt: 0,
                total: 0,
                bill: 0,
                people: 0,
                percent: 0,
                reset: true
            }

        default:
            return state;
    }
}

export default myReducer
