import { useForm } from 'react-hook-form';
import './styles/PickAdd.css';
import { useState } from 'react';
import { useRegFormContext } from '../provider/RegFormProvider';
import { useNavigate } from 'react-router-dom';


const PickAdd = () => {

    const {handleSubmit  } = useForm();

    const [add_ons, setAdd_ons] = useState([])

    const [state , dispatch] =  useRegFormContext();

    const navigate = useNavigate();
    
    const onSubmit = () => {
        dispatch( {type:'SET_ADDONS_DATA' , data: add_ons} )
        dispatch( {type:'CHANGE_STEP' , data: 4} )

        navigate('/summary')
    }

  return (
    <>
    <section className='pick_card'>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      
    <form className='pickAdd_section' id='pickAdd' onSubmit={handleSubmit(onSubmit)}>

        <div className='option_container'>
            <input 
                type="checkbox" 
                name='Online Service'
                onChange={e=> {
                    !add_ons.includes('Online Service') ? setAdd_ons([...add_ons,'Online Service']) : setAdd_ons(add_ons.filter(e=> e != 'Online Service'))
                }}    
            />
            <div className='option_text'>
                <label htmlFor="switch">Online Service</label>
                <p>Access to multiplayer games</p>
            </div>
                {
                    state.pay == 'Yearly' ? <span>+10/yr</span> : <span>+1/mo</span>
                }
        </div>

        <div className='option_container'>
        <input 
            type="checkbox" 
            name='Larger storage'
            onChange={e=> {
                !add_ons.includes('Larger storage') ? setAdd_ons([...add_ons,'Larger storage']) : setAdd_ons(add_ons.filter(e=> e != 'Larger storage'))
            }}
        />
            <div className='option_text'>
                <label htmlFor="switch">Larger storage</label>
                <p>Extra 1TB of cloud save</p>
            </div>
                {
                    state.pay == 'Yearly' ? <span>+20/yr</span> : <span>+2/mo</span>
                }
        </div>

        <div className='option_container'>
        <input 
            type="checkbox" 
            name='Customizable profile'
            onChange={e=> {
                !add_ons.includes('Customizable profile') ? setAdd_ons([...add_ons,'Customizable profile']) : setAdd_ons(add_ons.filter(e=> e != 'Customizable profile'))
            }}
        />
            <div className='option_text'>
                <label htmlFor="switch">Customizable profile</label>
                <p>Custom theme on your profile</p>
            </div>
                {
                    state.pay == 'Yearly' ? <span>+20/yr</span> : <span>+2/mo</span>
                }
        </div>


    </form>
    </section>

    <footer>
        <button className='button_back' >Go Back</button>


        <button className='button_next' type='submit' form='pickAdd'>Next Step</button>
    </footer>
    </>
  )
}

export default PickAdd