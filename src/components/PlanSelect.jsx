import './styles/PlanSelect.css';

const PlanSelect = () => {
  return (
    <section className='plan_card'>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      
    <form className='plans_container'>
        <div className='plan_selection'>
        
            <img src="./images/icon-arcade.svg" alt="arcade" />
            <div className='plan_price'>
                <p>Arcade</p>
                <span>$9/mo</span>
                
            </div>
        </div>

        <div className='plan_selection'>
            <img src="./images/icon-advanced.svg" alt="advanced" />
        <div className='plan_price'>
            <p>Advanced</p>
            <span>$12/mo</span>
        </div>
      </div>

      <div className='plan_selection'>
        <img src="./images/icon-pro.svg" alt="pro" />
        <div className='plan_price'>
            <p>Pro</p>
            <span>$15/mo</span>
        </div>
      </div>


    </form>

    <div className='switch_container'>
        <p>Monthly</p>
        <input type="checkbox" id="switch" /><label htmlFor="switch" className='switch_label'></label>
        <p>Yearly</p>
      </div>


    </section>
  )
}

export default PlanSelect