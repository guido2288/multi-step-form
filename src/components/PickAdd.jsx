import './styles/PickAdd.css';


const PickAdd = () => {
  return (
    <>
    <section className='pick_card'>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      
    <form className='pickAdd_section' id='pickAdd'>

        <div className='option_container'>
            <input type="checkbox" />
            <div className='option_text'>
                <label htmlFor="switch">Online Service</label>
                <p>Access to multiplayer games</p>
            </div>
 
            <span>+$1/mo</span>

        </div>

        <div className='option_container'>
        <input type="checkbox" />
            <div className='option_text'>
                <label htmlFor="switch">Larger storage</label>
                <p>Extra 1TB of cloud save</p>
            </div>
            <span>+$2/mo</span>
        </div>

        <div className='option_container'>
        <input type="checkbox" />
            <div className='option_text'>
                <label htmlFor="switch">Customizable profile</label>
                <p>Custom theme on your profile</p>
            </div>
            <span>+$2/mo</span>
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