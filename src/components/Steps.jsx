import './styles/Steps.css';

const Steps = ({step}) => {

  return (
    <ul className='steps_containers'>
    <li>
      <span className={ step === 1 ? "step_highlighted" : "" } >1</span>
      <div className='steps_item'>
        <p className='step'>STEP 1</p>
        <p>YOUR INFO</p>
      </div>

    </li>
    <li>
      <span className={ step === 2 ? "step_highlighted" : "" } >2</span>
      <div className='steps_item'>
        <p className='step'>STEP 2</p>
        <p>SELECT PLAN</p>
      </div>

    </li>
    <li>
      <span className={ step === 3 ? "step_highlighted" : "" } >3</span>
      <div className='steps_item'>
        <p className='step'>STEP 3</p>
        <p>ADD-ONS</p>
      </div>

    </li>
    <li>
      <span className={ step === 4 ? "step_highlighted" : "" } >4</span>
      <div className='steps_item'>
        <p className='step'>STEP 4</p>
        <p>SUMMARY</p>
      </div>

    </li>
  </ul>
  )
}

export default Steps