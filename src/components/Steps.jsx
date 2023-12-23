import './Steps.css';

const Steps = () => {
  return (
    <ul className='steps_containers'>
    <li>
      <span>1</span>
      <div className='steps_item'>
        <p className='step'>STEP 1</p>
        <p>YOUR INFO</p>
      </div>

    </li>
    <li>
      <span>2</span>
      <div className='steps_item'>
        <p className='step'>STEP 2</p>
        <p>SELECT PLAN</p>
      </div>

    </li>
    <li>
      <span>3</span>
      <div className='steps_item'>
        <p className='step'>STEP 3</p>
        <p>ADD-ONS</p>
      </div>

    </li>
    <li>
      <span>4</span>
      <div className='steps_item'>
        <p className='step'>STEP 4</p>
        <p>SUMMARY</p>
      </div>

    </li>
  </ul>
  )
}

export default Steps