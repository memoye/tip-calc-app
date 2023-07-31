import styles from "./customInput.module.css"
import dollar from "../../assets/icon-dollar.svg"
import person from "../../assets/icon-person.svg"
import { useContext } from "react"
import { TipContext } from "../../contexts/TipProvider"


const CustomInput = (props) => {
    const { label, placeholder, dispatch, value } = props
    const { state } = useContext(TipContext)


    return (
        <>
            { label ? <label className={ styles.label } htmlFor="num">{ label }</label> : null }
            <div className={ styles.inputBox }>
                <img className={ styles.icon } src={ label === "Bill" ? dollar : label === "Number of People" ? person : null } alt={ label } />
                <input onInput={ (e) => {
                    label === "Bill" ?
                        dispatch({ type: "SET_BILL", payload: Number(e.target.value) })
                        : label === "Number of People" ?
                            dispatch({ type: "SET_PEOPLE", payload: Number(e.target.value) })
                            : dispatch({ type: "SET_PERCENT", payload: Number(e.target.value) / 100 })
                } } className={ styles.numInput } type="number" name="num" placeholder={ placeholder && placeholder } min='0' />
            </div>
        </>
    )
}

export default CustomInput
