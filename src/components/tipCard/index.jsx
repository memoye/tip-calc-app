import styles from "./tipCard.module.css"
import CustomButton from "../customButton"
import { useContext } from "react";
import { TipContext } from "../../contexts/TipProvider";


const TipCard = () => {
    const { state, dispatch } = useContext(TipContext)

    return (

        <div className={ styles.tipsArea }>

            <div className={ styles.vals }>

                <div className={ styles.tip }>
                    <p className={ styles.label }><span className={ styles.labelTitle }> Tip Amount </span> <span className={ styles.freq }>/ person</span> </p>
                    <p className={ styles.amount }>${ isNaN(state.tipAmt) || !isFinite(state.tipAmt) || state.tipAmt === 0 ? 0 : state.tipAmt.toFixed(2) }</p>
                </div>

                <div className={ styles.tip }>
                    <p className={ styles.label }><span className={ styles.labelTitle }>Total</span> <span className={ styles.freq }>/ person</span>  </p>
                    <p className={ styles.amount }>${ isNaN(state.total) || !isFinite(state.total) || state.total === 0 ? 0 : state.total.toFixed(2) }</p>
                </div>

            </div>

            <div className={ styles.resetBtn }>
                <CustomButton
                    label={ "RESET" }
                    dispatch={ dispatch }
                />
            </div>

        </div >

    )
}

export default TipCard