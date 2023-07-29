import { createContext, useReducer } from "react"
import myReducer from "../reducer/reducer"


export const TipContext = createContext(null)

const initialState = {
    tipAmt: 0,
    total: 0,
    bill: 0,
    people: 0,
    percent: 0,
    reset: false
}

const TipProvider = ({ children }) => {

    const [state, dispatch] = useReducer(myReducer, initialState)

    return (
        <TipContext.Provider
            value={ { state, dispatch, initialState } }
        >
            { children }
        </TipContext.Provider>
    )
}

export default TipProvider