import { useNavigate } from "react-router-dom";
import { useRegFormContext } from "../provider/RegFormProvider";
import "./styles/Summary.css";

const Summary = () => {

    const [state , dispatch] =  useRegFormContext();

    const navigate = useNavigate();

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


            <ul>
                <li>
                    <h4>Online service</h4>
                    <span>+$10/yr</span>
                </li>
                <li>
                    <h4>Larger Storage</h4>
                    <span>+$20/yr</span>
                </li>
                <li>
                    <h4>Customizable profile</h4>
                    <span>+$20/yr</span>
                </li>
            </ul>

        </div>

        <div className="total_container">
            <h4>Total (per year)</h4>
            <span>$140/yr</span>
        </div>
      
    
    </section>

    <footer>
    <button className='button_back' >Go Back</button>


    <button className='button_next' type='submit' form='planSelect'>Confirm</button>
    </footer>
    </>
  )
}

export default Summary