import CustomButton from '../customButton'
import CustomInput from '../customInput'
import styles from './inputSide.module.css'
import { TipContext } from "../../contexts/TipProvider"
import { useContext } from 'react'


const InputSide = () => {
    const btns = [
        { tip: "5%", percentage: 5 },
        { tip: "10%", percentage: 10 },
        { tip: "15%", percentage: 15 },
        { tip: "25%", percentage: 25 },
        { tip: "50%", percentage: 50 }
    ]

    const { state, dispatch } = useContext(TipContext)



    return (
        <div className={ styles.inputSide }>
            <div>
                <CustomInput
                    label={ "Bill" }
                    placeholder={ 0 }
                    dispatch={ dispatch }
                    val={ state.bill === 0 || state.reset ? '' : Number(state.bill) }
                />
            </div>
            <div className={ styles.side }>
                <p className={ styles.label }>Select Tip %</p>
                <div className={ styles.btnsGrid }>
                    {
                        btns.map((btn) => {
                            return (
                                <CustomButton
                                    key={ btn.tip }
                                    { ...btn }
                                    dispatch={ dispatch }
                                />
                            )
                        })
                    }
                    <div>
                        <CustomInput
                            placeholder={ "Custom" }
                            dispatch={ dispatch }
                            val={ state.percent === 0 || state.reset ? '' : Number(state.percent) * 100 }
                        />
                    </div>
                </div>
            </div>

            <div>
                <CustomInput
                    label={ "Number of People" }
                    placeholder={ 0 }
                    dispatch={ dispatch }
                    val={ state.people === 0 || state.reset ? '' : Number(state.people) }
                />
            </div>
        </div>
    )
}

export default InputSide