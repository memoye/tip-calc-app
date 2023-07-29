import { useContext } from "react"
import styles from "./customButton.module.css"
import { TipContext } from "../../contexts/TipProvider"

const CustomButton = (props) => {

    const { state } = useContext(TipContext)
    const { tip, label, percentage, dispatch } = props

    return (
        <>
            <button onClick={ () => {
                percentage === undefined ? dispatch({ type: 'RESET_ALL', payload: percentage })
                    : dispatch({ type: 'SET_PERCENT', payload: Number(percentage) / 100 })
            } }
                className={ `${tip ? styles.normal : styles.reset} ${(state.percent * 100) === percentage && styles.active}` }
            >

                { tip ? tip : label }

            </button>
        </>

    )
}

export default CustomButton
