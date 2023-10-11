import styles from "./customInput.module.css"
import dollar from "../../assets/icon-dollar.svg"
import person from "../../assets/icon-person.svg"
import { useContext, useState } from "react"
import { TipContext } from "../../contexts/TipProvider"


const CustomInput = (props) => {
    const { label, placeholder, dispatch } = props
    const { state } = useContext(TipContext)

    const [inputVal, setInputVal] = useState(null)
    function handleChange(e) {
        setInputVal(e.target.value)
    }

    return (
        <>
            { label ? <label className={ styles.label } htmlFor="num">{ label }</label> : null }

            <div className={ styles.inputBox }>
                { label &&
                    <img className={ styles.icon } src={ label === "Bill" ? dollar : label === "Number of People" ? person : null } alt={ 'input icon' } /> }
                <input
                    onChange={ handleChange }
                    onInput={ (e) => {
                        label === "Bill" ?
                            dispatch({ type: "SET_BILL", payload: Number(e.target.value) })
                            : label === "Number of People" ?
                                dispatch({ type: "SET_PEOPLE", payload: Number(e.target.value) })
                                : dispatch({ type: "SET_PERCENT", payload: Number(e.target.value) / 100 })
                    } }
                    value={ state.reset ? '' : inputVal }
                    className={ styles.numInput }
                    type="number"
                    name="num"
                    placeholder={ placeholder && placeholder } min='0' />
            </div>
        </>
    )
}

export default CustomInput
