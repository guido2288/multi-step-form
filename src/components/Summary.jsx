import { useNavigate } from "react-router-dom";
import { useRegFormContext } from "../provider/RegFormProvider";
import "./styles/Summary.css";
import { useEffect, useState } from "react";
import AddOnsListYear from "./AddOnsListYear";
import AddOnsListMonth from "./AddOnsListMonth";
import { useForm } from "react-hook-form";

const Summary = () => {
    const {handleSubmit  } = useForm();

    const [state , dispatch] =  useRegFormContext();

    const [addsValues, setAddsValues] = useState()

    const navigate = useNavigate();

    const handleGoBack = () => {
        dispatch( {type:'CHANGE_STEP' , data: 3} )
        navigate('/pick_add')
      }

    useEffect( () => {

        let total = state.planValue;
        if(state.pay === 'Yearly' && state.addOns.length > 0){
            state.addOns.forEach(add => {
                add === 'Online Service' ? total += 10 : total += 20;
            });
        } else {
            state.addOns.forEach(add => {
                add === 'Online Service' ? total += 1 : total += 2;
            });
        }

        setAddsValues(total)

    }, [])

    const onSubmit = () => {
       
        dispatch( {type:'CHANGE_STEP' , data: 5} )
  
        navigate('/laststep')
    }
    
  return (
    <>
    <section className='summary'>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

        <div className="info_container"> 

            <div className="info_item">
                <div className="info_plan">
                    <span className="plan_selected">{state.plan} ({state.pay})</span>
                    <p>Change</p>
                </div>
                {
                    state.pay == 'Yearly' ? <span>+{state.planValue}/yr</span> : <span>+{state.planValue}/mo</span>
                }
                
            </div>

            {
                state.pay == 'Yearly' ? <AddOnsListYear addOns={state.addOns} /> : <AddOnsListMonth addOns={state.addOns} />
            }

        </div>

        <div className="total_container">
            <h4>Total { state.pay === 'Yearly' ? "(per year)" : "(per month)" }</h4>
            {
                state.pay == 'Yearly' ? <span>${addsValues}/yr</span> : <span>${addsValues}/mo</span>
            }
            
        </div>
      
    
    </section>

    <footer>
    <button className='button_back' onClick={handleGoBack} >Go Back</button>


    <button className='button_next' type='submit' form='planSelect' onClick={handleSubmit(onSubmit)}>Confirm</button>
    </footer>
    </>
  )
}

export default Summary