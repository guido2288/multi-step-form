import './PersonalInfo.css';

const PersonalInfo = () => {
  return (
    <section className='card_container'>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" placeholder='e.g. Stphen King'/>
        <label htmlFor="">Email Address</label>
        <input type="text" name="" id="" placeholder='e.g. stephenking@lorem.com'/>
        <label htmlFor="">Phone Number</label>
        <input type="text" name="" id="" placeholder='e.g. +1 234 567 890'/>
      </form>
    </section>
  )
}

export default PersonalInfo