import { useState } from 'react';
import './styles/PlanSelect.css';
import  { useRegFormContext } from '../provider/RegFormProvider';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const PlanSelect = () => {

  const [plan, setPlan] = useState("Arcade");

  const [pay, setPay] = useState("Monthly");

  const [ , dispatch] =  useRegFormContext();

  const {handleSubmit  } = useForm();

  const navigate = useNavigate();


  const handleSelection = (e) => {
    setPlan(e)
  }

  const handlePaySwich = () => {
    pay === "Monthly" ? setPay("Yearly") : setPay("Monthly")
  }

  const handleGoBack = () => {
    dispatch( {type:'CHANGE_STEP' , data: 0} )
    navigate('/')
  }

  const onSubmit = () => {

    let value = 0;
    dispatch( {type:'SET_PLAN_DATA' , data: plan} )
    dispatch( {type:'SET_PAY_DATA' , data: pay} )
    
    if(pay == 'Monthly'){
      switch (plan) {
        case 'Arcade':
          value = 9
          break;
      
        case 'Advanced':
          value = 12
          break;

        case 'Pro':
          value = 15
          break;
      }
    }

    if(pay == 'Yearly'){
      switch (plan) {
        case 'Arcade':
          value = 90
          break;
      
        case 'Advanced':
          value = 120
          break;

        case 'Pro':
          value = 150
          break;
      }
    }
    dispatch( {type:'SET_PLANVALUE' , data: value} )

    dispatch( {type:'CHANGE_STEP' , data: 3} )

    navigate('/pick_add')
  }

  return (
    <>
      <section className='plan_card'>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      
    <form className='plans_container' id="planSelect" onSubmit={handleSubmit(onSubmit)}>

        <div className={ plan == "Arcade" ? 'plan_selection plan_selected' : 'plan_selection'} onClick={() => handleSelection('Arcade')}>
            <img src="./images/icon-arcade.svg" alt="arcade" />
            <div className='plan_price'>
                <p>Arcade</p>
                {
                  pay == 'Monthly' ? <span>$9/mo</span> : <span>$90/mo</span>
                }
                {
                  pay == 'Yearly' && <span style={ {color:'hsl(213, 96%, 18%)'} }>2 months free</span> 
                }
                
            </div>
        </div>

        <div className={ plan == "Advanced" ? 'plan_selection plan_selected' : 'plan_selection'} onClick={() => handleSelection('Advanced')}>
            <img src="./images/icon-advanced.svg" alt="advanced" />
        <div className='plan_price'>
            <p>Advanced</p>
            {
              pay == 'Monthly' ? <span>$12/mo</span> : <span>$120/mo</span>
            }
            {
              pay == 'Yearly' && <span style={ {color:'hsl(213, 96%, 18%)'} }>2 months free</span> 
            }
        </div>
      </div>

      <div className={ plan == "Pro" ? 'plan_selection plan_selected' : 'plan_selection'} onClick={() => handleSelection('Pro')}>
        <img src="./images/icon-pro.svg" alt="pro" />
        <div className='plan_price'>
            <p>Pro</p>
            {
              pay == 'Monthly' ? <span>$15/mo</span> : <span>$150/mo</span>
            }
            {
              pay == 'Yearly' && <span style={ {color:'hsl(213, 96%, 18%)'} }>2 months free</span> 
            }
        </div>
      </div>


    </form>

    <div className='switch_container'>
        <p>Monthly</p>
        <input type="checkbox" id="switch" /><label htmlFor="switch" className='switch_label' onClick={handlePaySwich}></label>
        <p>Yearly</p>
      </div>


    </section>

    <footer>
        <button className='button_back' onClick={handleGoBack}>Go Back</button>
        
      
        <button className='button_next' type='submit' form='planSelect'>Next Step</button>
      </footer>
    </>

  )
}

export default PlanSelect